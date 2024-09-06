import { useEffect, useState } from "react"
import getDocumentData from "../../utils/getDocumentData"
import { COLLECTIONS } from "../../constants"
import { addMultipleDocuments } from "../../utils/addDocuments"
import { documentsToRoutes } from "../../constants/constant.data"

const INITIAL_ROUTE_DATA = {
    source: '',
    destination: '',
}

export const useLandingPageController = () => {
    const [route, setRoute] = useState(INITIAL_ROUTE_DATA)
    const [journeyDate, setJourneyDate] = useState('')
    const handleRouteChange = (option, actionMeta) => {
        setRoute(prevState => ({
            ...prevState,
            [actionMeta.name]: option
        }));
    };

    const selectJourneyDate = (e) => {
        const dateValue = e.target.value;

        const dateObj = new Date(dateValue);
        const isoString = dateObj.toISOString();

        setJourneyDate(isoString)
    }

    const getRouteBuses = async () => {
        const res = await getDocumentData(COLLECTIONS?.ROUTES, 'delhi-kanpur')
        console.log({ res });
    }


    const addRoutes = async () => {
        const res = await addMultipleDocuments(COLLECTIONS?.ROUTES, documentsToRoutes)
        console.log({ res });

    }

    useEffect(() => {
        getRouteBuses()

    }, [])


    return {
        route,
        handleRouteChange,
        journeyDate,
        selectJourneyDate,
        addRoutes
    }
}