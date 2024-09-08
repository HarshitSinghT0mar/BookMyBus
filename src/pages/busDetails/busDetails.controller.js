import { useState } from "react"
import getDocumentData from "../../utils/getDocumentData"
import { COLLECTIONS } from "../../constants"
import { useParams } from "react-router"

export const useBusDetailsController = () => {
    const [busData, setBusData] = useState([])
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [currentRouteBusData, setCurrentRouteBusData] = useState({})
    const { busId, routeId } = useParams()

    const getBusDetails = async () => {
        const res = await getDocumentData(COLLECTIONS?.BUSES, busId)
        const currentRoute = res?.routes?.filter((route) => {
            return route?.routeId === routeId
        })
        setBusData(res)
        setCurrentRouteBusData(currentRoute[0])
    }

    const handleSelectedSeats = ({ seatId }) => {
        setSelectedSeats((prevSelectedSeats) => {
            if (prevSelectedSeats?.includes(seatId)) {
                return prevSelectedSeats?.filter((seat) => seat !== seatId);
            } else {
                return [...prevSelectedSeats, seatId];
            }
        });
    }

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
        handleSelectedSeats
    }
}