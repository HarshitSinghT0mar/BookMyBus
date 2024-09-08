import { useState } from "react"
import getDocumentData from "../../utils/getDocumentData"
import { COLLECTIONS } from "../../constants"
import { useParams } from "react-router"

export const useBusDetailsController = () => {
    const [busData, setBusData] = useState([])
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [currentRouteBusData, setCurrentRouteBusData] = useState({})
    const { busId, routeId } = useParams()
    const [isSelected,setIsSelected]=useState(false)

    const getBusDetails = async () => {
        const res = await getDocumentData(COLLECTIONS?.BUSES, busId)
        const currentRoute = res?.routes?.filter((route) => {
            return route?.routeId === routeId
        })
        setBusData(res)
        setCurrentRouteBusData(currentRoute[0])
    }

console.log({busData,currentRouteBusData});


    useState(() => {
        getBusDetails()
    }, [routeId, busId])

    return {
        busData,
        routeId,
        busId,
        selectedSeats,
        setSelectedSeats,
        currentRouteBusData,
        isSelected,
        setIsSelected
    }
}