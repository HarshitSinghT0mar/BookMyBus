import { useEffect, useState } from "react"
import getDocumentData from "../../utils/getDocumentData"
import { COLLECTIONS } from "../../constants"
import { addMultipleDocuments } from "../../utils/addDocuments"
import { documentsToRoutes } from "../../constants/constant.data"
import { useNavigate, useParams } from "react-router"

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
        console.log('Option:', option);
        console.log('ActionMeta:', actionMeta);

        if (!option || !actionMeta) {
            console.error('Option or actionMeta is missing:', { option, actionMeta });
            return;
        }

        const { name } = actionMeta;

        if (name) {
            setRoute(prevState => ({
                ...prevState,
                [name]: option.value
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
        const res = await addMultipleDocuments(COLLECTIONS?.ROUTES, documentsToRoutes)
        console.log({ res });
    }

    const searchRoutes = () => {
        navigate(`/${route?.source?.toLowerCase()}-${route?.destination?.toLowerCase()}`)
    }


    useEffect(() => {
        const getRouteBuses = async () => {
            const res = await getDocumentData(COLLECTIONS?.ROUTES, routeId)
            setCurrentRouteData(res)
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
        currentRouteData
    }
}