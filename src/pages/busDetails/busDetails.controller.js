import { useState } from "react"
import getDocumentData from "../../utils/getDocumentData"
import { COLLECTIONS } from "../../constants"
import { useParams } from "react-router"

export const useBusDetailsController = () => {
    const [busData, setBusData] = useState(null)
    const {busId}=useParams()
    const getBusDetails = async () => {
        const res = await getDocumentData(COLLECTIONS?.BUSES, busId)
        console.log({res});
    }

    useState(() => {
        getBusDetails()
    },[])
    return {
busData
    }
}