import { useEffect, useState } from "react"
import getDocumentData from "../../utils/getDocumentData"
import { COLLECTIONS } from "../../constants"
import { addMultipleDocuments } from "../../utils/addDocuments"
import { useNavigate, useParams } from "react-router"
import { documentsToBuses } from "../../constants/constant.data"
import { getAllDocuments } from "../../utils/getAllDocuments"
import { addSeatsToRoutes } from "../../utils/generateSeats/generateSeats"

const INITIAL_ROUTE_DATA = {
    source: '',
    destination: '',
}

export const useLandingPageController = () => {
    const [route, setRoute] = useState(INITIAL_ROUTE_DATA)
    const [journeyDate, setJourneyDate] = useState('')
    const [currentRouteData, setCurrentRouteData] = useState([])
    const navigate = useNavigate()
    const { routeId } = useParams()
    const handleRouteChange = (option, actionMeta) => {
        if (!option || !actionMeta) {
            console.error('Option or actionMeta is missing:', { option, actionMeta });
            return;
        }

        const { name } = actionMeta;

        if (name) {
            setRoute(prevState => ({
                ...prevState,
                [name]: option?.value
            }));
        } else {
            console.error('actionMeta.name is missing:', actionMeta);
        }
    };

    const selectJourneyDate = (e) => {
        const dateValue = e.target.value;
        const dateObj = new Date(dateValue);
        const isoString = dateObj.toISOString();
        setJourneyDate(isoString)
    }


    const addRoutes = async () => {
        const res = await addMultipleDocuments(COLLECTIONS?.BUSES, documentsToBuses)
        console.log({ res });
    }

    const searchRoutes = () => {
        navigate(`/${route?.source?.toLowerCase()}-${route?.destination?.toLowerCase()}`)
    }



    useEffect(() => {
        const getRouteBuses = async (routeId) => {
            const res = await getDocumentData(COLLECTIONS?.ROUTES, routeId)
            setCurrentRouteData(res)
            const res1 = await getAllDocuments(COLLECTIONS?.BUSES)
            console.log({ res1 });
            const updatedBusData = addSeatsToRoutes(res1)
                console.log({updatedBusData});
                
            const buswithseats = await addMultipleDocuments(COLLECTIONS?.BUSES, updatedBusData)
            console.log({buswithseats});
            

        }
        getRouteBuses(routeId)

        
    }, [routeId])


    return {
        route,
        handleRouteChange,
        journeyDate,
        selectJourneyDate,
        addRoutes,
        searchRoutes,
        currentRouteData,
        routeId
    }
}