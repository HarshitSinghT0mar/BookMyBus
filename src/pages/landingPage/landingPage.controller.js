import { useState } from "react"

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
    console.log({journeyDate});
    
    return {
        route,
        handleRouteChange,
        journeyDate,
        selectJourneyDate
    }
}