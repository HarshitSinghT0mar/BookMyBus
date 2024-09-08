import { FaBed, FaLightbulb, FaMedkit, FaSnowflake } from "react-icons/fa";
import { FaBottleWater, FaMattressPillow } from "react-icons/fa6";
import { GiStoneStack } from "react-icons/gi";
import { MdPower, MdTv, MdWifi } from "react-icons/md";

export const documentsToRoutes = [
    {
        "routeId": "delhi-mumbai",
        "source": "Delhi",
        "destination": "Mumbai",
        "buses": [
            {
                "rating": "4.2",
                "busId": "bus201",
                "amenities": ["WiFi", "AC"],
                "availableSeats": "32",
                "departureTime": "2024-09-01T10:00:00Z",
                "arrivalTime": "2024-09-02T08:00:00Z",
                "price": "1200",
                "totalSeats": "40",
                "busName": "Superfast Express"
            },
            {
                "rating": "4.0",
                "busId": "bus202",
                "amenities": ["AC", "Snack"],
                "availableSeats": "20",
                "departureTime": "2024-09-01T13:00:00Z",
                "arrivalTime": "2024-09-02T10:00:00Z",
                "price": "1100",
                "totalSeats": "25",
                "busName": "Comfort Bus"
            },
            {
                "rating": "4.5",
                "busId": "bus203",
                "amenities": ["WiFi", "Snack", "Charging Point"],
                "availableSeats": "28",
                "departureTime": "2024-09-01T18:00:00Z",
                "arrivalTime": "2024-09-02T14:00:00Z",
                "price": "1300",
                "totalSeats": "30",
                "busName": "Luxury Shuttle"
            },
            {
                "rating": "3.9",
                "busId": "bus204",
                "amenities": ["AC"],
                "availableSeats": "35",
                "departureTime": "2024-09-01T21:00:00Z",
                "arrivalTime": "2024-09-02T17:00:00Z",
                "price": "1000",
                "totalSeats": "40",
                "busName": "Economy Express"
            }
        ]
    },
    {
        "routeId": "mumbai-bangalore",
        "source": "Mumbai",
        "destination": "Bangalore",
        "buses": [
            {
                "rating": "4.5",
                "busId": "bus205",
                "amenities": ["WiFi", "Snack"],
                "availableSeats": "25",
                "departureTime": "2024-09-02T15:00:00Z",
                "arrivalTime": "2024-09-03T07:00:00Z",
                "price": "1000",
                "totalSeats": "30",
                "busName": "Comfort Ride"
            },
            {
                "rating": "4.2",
                "busId": "bus206",
                "amenities": ["AC", "Charging Point"],
                "availableSeats": "20",
                "departureTime": "2024-09-02T17:00:00Z",
                "arrivalTime": "2024-09-03T09:00:00Z",
                "price": "950",
                "totalSeats": "25",
                "busName": "Deluxe Bus"
            },
            {
                "rating": "4.0",
                "busId": "bus207",
                "amenities": ["WiFi", "Blanket"],
                "availableSeats": "18",
                "departureTime": "2024-09-02T20:00:00Z",
                "arrivalTime": "2024-09-03T11:00:00Z",
                "price": "900",
                "totalSeats": "20",
                "busName": "Premium Coach"
            },
            {
                "rating": "4.4",
                "busId": "bus208",
                "amenities": ["AC", "Snack", "Charging Point"],
                "availableSeats": "22",
                "departureTime": "2024-09-02T22:00:00Z",
                "arrivalTime": "2024-09-03T13:00:00Z",
                "price": "1050",
                "totalSeats": "25",
                "busName": "Luxury Express"
            }
        ]
    },
    {
        "routeId": "bangalore-chennai",
        "source": "Bangalore",
        "destination": "Chennai",
        "buses": [
            {
                "rating": "4.0",
                "busId": "bus209",
                "amenities": ["AC", "Charging Point"],
                "availableSeats": "28",
                "departureTime": "2024-09-03T11:00:00Z",
                "arrivalTime": "2024-09-03T23:00:00Z",
                "price": "800",
                "totalSeats": "35",
                "busName": "South Express"
            },
            {
                "rating": "4.1",
                "busId": "bus210",
                "amenities": ["WiFi"],
                "availableSeats": "30",
                "departureTime": "2024-09-03T13:00:00Z",
                "arrivalTime": "2024-09-03T23:30:00Z",
                "price": "850",
                "totalSeats": "35",
                "busName": "Fast Track"
            },
            {
                "rating": "4.2",
                "busId": "bus211",
                "amenities": ["AC", "Snack"],
                "availableSeats": "24",
                "departureTime": "2024-09-03T15:00:00Z",
                "arrivalTime": "2024-09-03T22:00:00Z",
                "price": "780",
                "totalSeats": "25",
                "busName": "Comfort Ride"
            },
            {
                "rating": "4.3",
                "busId": "bus212",
                "amenities": ["WiFi", "Charging Point"],
                "availableSeats": "26",
                "departureTime": "2024-09-03T17:00:00Z",
                "arrivalTime": "2024-09-03T23:00:00Z",
                "price": "820",
                "totalSeats": "30",
                "busName": "Luxury Express"
            }
        ]
    },
    {
        "routeId": "chennai-hyderabad",
        "source": "Chennai",
        "destination": "Hyderabad",
        "buses": [
            {
                "rating": "4.1",
                "busId": "bus213",
                "amenities": ["WiFi", "AC"],
                "availableSeats": "22",
                "departureTime": "2024-09-04T09:00:00Z",
                "arrivalTime": "2024-09-04T18:00:00Z",
                "price": "750",
                "totalSeats": "30",
                "busName": "South Express"
            },
            {
                "rating": "4.2",
                "busId": "bus214",
                "amenities": ["AC", "Blanket"],
                "availableSeats": "25",
                "departureTime": "2024-09-04T12:00:00Z",
                "arrivalTime": "2024-09-04T20:00:00Z",
                "price": "780",
                "totalSeats": "30",
                "busName": "Premium Coach"
            },
            {
                "rating": "4.0",
                "busId": "bus215",
                "amenities": ["WiFi"],
                "availableSeats": "20",
                "departureTime": "2024-09-04T14:00:00Z",
                "arrivalTime": "2024-09-04T23:00:00Z",
                "price": "700",
                "totalSeats": "25",
                "busName": "Comfort Bus"
            },
            {
                "rating": "4.3",
                "busId": "bus216",
                "amenities": ["AC", "Snack"],
                "availableSeats": "26",
                "departureTime": "2024-09-04T16:00:00Z",
                "arrivalTime": "2024-09-04T23:00:00Z",
                "price": "760",
                "totalSeats": "30",
                "busName": "Luxury Shuttle"
            }
        ]
    },
    {
        "routeId": "hyderabad-delhi",
        "source": "Hyderabad",
        "destination": "Delhi",
        "buses": [
            {
                "rating": "4.4",
                "busId": "bus217",
                "amenities": ["WiFi", "Snack"],
                "availableSeats": "15",
                "departureTime": "2024-09-05T07:00:00Z",
                "arrivalTime": "2024-09-05T21:00:00Z",
                "price": "1300",
                "totalSeats": "20",
                "busName": "Express Shuttle"
            },
            {
                "rating": "4.1",
                "busId": "bus218",
                "amenities": ["AC", "Charging Point"],
                "availableSeats": "18",
                "departureTime": "2024-09-05T11:00:00Z",
                "arrivalTime": "2024-09-05T22:00:00Z",
                "price": "1200",
                "totalSeats": "20",
                "busName": "Deluxe Express"
            },
            {
                "rating": "4.0",
                "busId": "bus219",
                "amenities": ["WiFi", "AC", "Snack"],
                "availableSeats": "20",
                "departureTime": "2024-09-05T14:00:00Z",
                "arrivalTime": "2024-09-05T23:00:00Z",
                "price": "1150",
                "totalSeats": "25",
                "busName": "Super Comfort"
            },
            {
                "rating": "4.2",
                "busId": "bus220",
                "amenities": ["AC"],
                "availableSeats": "25",
                "departureTime": "2024-09-05T16:00:00Z",
                "arrivalTime": "2024-09-06T01:00:00Z",
                "price": "1100",
                "totalSeats": "30",
                "busName": "Comfort Shuttle"
            }
        ]
    },
    {
        "routeId": "kolkata-delhi",
        "source": "Kolkata",
        "destination": "Delhi",
        "buses": [
            {
                "rating": "4.3",
                "busId": "bus221",
                "amenities": ["WiFi", "AC", "Snack"],
                "availableSeats": "22",
                "departureTime": "2024-09-06T08:00:00Z",
                "arrivalTime": "2024-09-07T06:00:00Z",
                "price": "1400",
                "totalSeats": "30",
                "busName": "Golden Express"
            },
            {
                "rating": "4.0",
                "busId": "bus222",
                "amenities": ["AC", "Charging Point"],
                "availableSeats": "18",
                "departureTime": "2024-09-06T11:00:00Z",
                "arrivalTime": "2024-09-07T08:00:00Z",
                "price": "1300",
                "totalSeats": "20",
                "busName": "Elite Coach"
            },
            {
                "rating": "4.5",
                "busId": "bus223",
                "amenities": ["WiFi", "Snack", "Blanket"],
                "availableSeats": "25",
                "departureTime": "2024-09-06T15:00:00Z",
                "arrivalTime": "2024-09-07T12:00:00Z",
                "price": "1500",
                "totalSeats": "28",
                "busName": "Luxury Travel"
            }
        ]
    },
    {
        "routeId": "delhi-jaipur",
        "source": "Delhi",
        "destination": "Jaipur",
        "buses": [
            {
                "rating": "4.2",
                "busId": "bus224",
                "amenities": ["AC", "WiFi"],
                "availableSeats": "30",
                "departureTime": "2024-09-07T09:00:00Z",
                "arrivalTime": "2024-09-07T14:00:00Z",
                "price": "600",
                "totalSeats": "35",
                "busName": "Royal Journey"
            },
            {
                "rating": "4.1",
                "busId": "bus225",
                "amenities": ["Snack", "Charging Point"],
                "availableSeats": "20",
                "departureTime": "2024-09-07T11:00:00Z",
                "arrivalTime": "2024-09-07T16:00:00Z",
                "price": "550",
                "totalSeats": "25",
                "busName": "Express Travel"
            },
            {
                "rating": "4.3",
                "busId": "bus226",
                "amenities": ["WiFi", "AC", "Blanket"],
                "availableSeats": "28",
                "departureTime": "2024-09-07T13:00:00Z",
                "arrivalTime": "2024-09-07T18:00:00Z",
                "price": "620",
                "totalSeats": "30",
                "busName": "Comfort Express"
            }
        ]
    },
    {
        "routeId": "mumbai-pune",
        "source": "Mumbai",
        "destination": "Pune",
        "buses": [
            {
                "rating": "4.4",
                "busId": "bus227",
                "amenities": ["AC", "Snack", "WiFi"],
                "availableSeats": "15",
                "departureTime": "2024-09-08T07:00:00Z",
                "arrivalTime": "2024-09-08T10:00:00Z",
                "price": "500",
                "totalSeats": "20",
                "busName": "City Express"
            },
            {
                "rating": "4.2",
                "busId": "bus228",
                "amenities": ["WiFi", "Charging Point"],
                "availableSeats": "20",
                "departureTime": "2024-09-08T10:00:00Z",
                "arrivalTime": "2024-09-08T13:00:00Z",
                "price": "480",
                "totalSeats": "25",
                "busName": "Fast Ride"
            },
            {
                "rating": "4.1",
                "busId": "bus229",
                "amenities": ["AC", "Snack"],
                "availableSeats": "25",
                "departureTime": "2024-09-08T12:00:00Z",
                "arrivalTime": "2024-09-08T15:00:00Z",
                "price": "490",
                "totalSeats": "30",
                "busName": "Comfort Bus"
            }
        ]
    },
    {
        "routeId": "noida-delhi",
        "source": "Noida",
        "destination": "Delhi",
        "buses": [
            {
                "rating": "4.1",
                "busId": "bus230",
                "amenities": ["AC", "WiFi"],
                "availableSeats": "22",
                "departureTime": "2024-09-09T08:00:00Z",
                "arrivalTime": "2024-09-09T09:00:00Z",
                "price": "300",
                "totalSeats": "25",
                "busName": "Express Shuttle"
            },
            {
                "rating": "4.3",
                "busId": "bus231",
                "amenities": ["WiFi", "Snack"],
                "availableSeats": "18",
                "departureTime": "2024-09-09T10:00:00Z",
                "arrivalTime": "2024-09-09T11:00:00Z",
                "price": "350",
                "totalSeats": "20",
                "busName": "Comfort Ride"
            },
            {
                "rating": "4.0",
                "busId": "bus232",
                "amenities": ["AC", "Charging Point"],
                "availableSeats": "20",
                "departureTime": "2024-09-09T12:00:00Z",
                "arrivalTime": "2024-09-09T13:00:00Z",
                "price": "320",
                "totalSeats": "25",
                "busName": "Deluxe Coach"
            }
        ]
    },
    {
        "routeId": "bengaluru-hyderabad",
        "source": "Bengaluru",
        "destination": "Hyderabad",
        "buses": [
            {
                "rating": "4.4",
                "busId": "bus233",
                "amenities": ["WiFi", "Snack", "Charging Point"],
                "availableSeats": "24",
                "departureTime": "2024-09-10T06:00:00Z",
                "arrivalTime": "2024-09-10T14:00:00Z",
                "price": "950",
                "totalSeats": "30",
                "busName": "Luxury Express"
            },
            {
                "rating": "4.1",
                "busId": "bus234",
                "amenities": ["AC", "Charging Point"],
                "availableSeats": "20",
                "departureTime": "2024-09-10T08:00:00Z",
                "arrivalTime": "2024-09-10T16:00:00Z",
                "price": "900",
                "totalSeats": "25",
                "busName": "Premium Coach"
            },
            {
                "rating": "4.2",
                "busId": "bus235",
                "amenities": ["WiFi", "Snack"],
                "availableSeats": "22",
                "departureTime": "2024-09-10T11:00:00Z",
                "arrivalTime": "2024-09-10T19:00:00Z",
                "price": "920",
                "totalSeats": "28",
                "busName": "Comfort Shuttle"
            }
        ]
    },
    {
        "routeId": "delhi-jaipur",
        "source": "Delhi",
        "destination": "Jaipur",
        "buses": [
            {
                "rating": "4.0",
                "busId": "bus236",
                "amenities": ["AC", "WiFi"],
                "availableSeats": "30",
                "departureTime": "2024-09-11T07:00:00Z",
                "arrivalTime": "2024-09-11T12:00:00Z",
                "price": "600",
                "totalSeats": "35",
                "busName": "Royal Express"
            },
            {
                "rating": "4.3",
                "busId": "bus237",
                "amenities": ["Snack", "Charging Point"],
                "availableSeats": "18",
                "departureTime": "2024-09-11T10:00:00Z",
                "arrivalTime": "2024-09-11T15:00:00Z",
                "price": "650",
                "totalSeats": "20",
                "busName": "Comfort Ride"
            },
            {
                "rating": "4.1",
                "busId": "bus238",
                "amenities": ["WiFi", "Blanket"],
                "availableSeats": "25",
                "departureTime": "2024-09-11T13:00:00Z",
                "arrivalTime": "2024-09-11T18:00:00Z",
                "price": "620",
                "totalSeats": "30",
                "busName": "Express Shuttle"
            }
        ]
    },
    {
        "routeId": "indore-mumbai",
        "source": "Indore",
        "destination": "Mumbai",
        "buses": [
            {
                "rating": "4.2",
                "busId": "bus239",
                "amenities": ["WiFi", "AC", "Snack"],
                "availableSeats": "20",
                "departureTime": "2024-09-12T08:00:00Z",
                "arrivalTime": "2024-09-12T18:00:00Z",
                "price": "1300",
                "totalSeats": "25",
                "busName": "Super Deluxe"
            },
            {
                "rating": "4.0",
                "busId": "bus240",
                "amenities": ["AC", "Charging Point"],
                "availableSeats": "18",
                "departureTime": "2024-09-12T11:00:00Z",
                "arrivalTime": "2024-09-12T21:00:00Z",
                "price": "1200",
                "totalSeats": "20",
                "busName": "Comfort Express"
            },
            {
                "rating": "4.3",
                "busId": "bus241",
                "amenities": ["WiFi", "Snack", "Blanket"],
                "availableSeats": "22",
                "departureTime": "2024-09-12T15:00:00Z",
                "arrivalTime": "2024-09-12T23:00:00Z",
                "price": "1400",
                "totalSeats": "25",
                "busName": "Luxury Travel"
            },
            {
                "rating": "4.1",
                "busId": "bus242",
                "amenities": ["AC"],
                "availableSeats": "25",
                "departureTime": "2024-09-12T19:00:00Z",
                "arrivalTime": "2024-09-13T05:00:00Z",
                "price": "1100",
                "totalSeats": "30",
                "busName": "Economy Shuttle"
            }
        ]
    },
    {
        "routeId": "bangalore-hyderabad",
        "source": "Bangalore",
        "destination": "Hyderabad",
        "buses": [
            {
                "rating": "4.3",
                "busId": "bus301",
                "amenities": ["WiFi", "AC", "Charging Point"],
                "availableSeats": "30",
                "departureTime": "2024-09-01T08:30:00Z",
                "arrivalTime": "2024-09-01T16:30:00Z",
                "price": "1500",
                "totalSeats": "45",
                "busName": "Velocity Travel"
            },
            {
                "rating": "4.1",
                "busId": "bus302",
                "amenities": ["AC", "Snack", "Blanket"],
                "availableSeats": "18",
                "departureTime": "2024-09-01T12:00:00Z",
                "arrivalTime": "2024-09-01T20:00:00Z",
                "price": "1400",
                "totalSeats": "35",
                "busName": "Comfort Cruiser"
            },
            {
                "rating": "4.6",
                "busId": "bus303",
                "amenities": ["WiFi", "Snack", "Blanket", "Charging Point"],
                "availableSeats": "22",
                "departureTime": "2024-09-01T17:00:00Z",
                "arrivalTime": "2024-09-02T01:00:00Z",
                "price": "1600",
                "totalSeats": "40",
                "busName": "Elite Shuttle"
            },
            {
                "rating": "3.8",
                "busId": "bus304",
                "amenities": ["AC", "Water Bottle"],
                "availableSeats": "28",
                "departureTime": "2024-09-01T21:30:00Z",
                "arrivalTime": "2024-09-02T05:30:00Z",
                "price": "1300",
                "totalSeats": "50",
                "busName": "Budget Ride"
            }
        ]
    },
    {
        "routeId": "jaipur-delhi",
        "source": "Jaipur",
        "destination": "Delhi",
        "buses": [
            {
                "rating": "4.3",
                "busId": "bus301",
                "amenities": ["WiFi", "AC"],
                "availableSeats": "30",
                "departureTime": "2024-09-01T09:00:00Z",
                "arrivalTime": "2024-09-01T18:00:00Z",
                "price": "1150",
                "totalSeats": "35",
                "busName": "Royal Express"
            },
            {
                "rating": "4.1",
                "busId": "bus302",
                "amenities": ["AC", "Snack"],
                "availableSeats": "18",
                "departureTime": "2024-09-01T14:00:00Z",
                "arrivalTime": "2024-09-01T23:00:00Z",
                "price": "1050",
                "totalSeats": "22",
                "busName": "Comfort Line"
            },
            {
                "rating": "4.6",
                "busId": "bus303",
                "amenities": ["WiFi", "Snack", "Charging Point"],
                "availableSeats": "25",
                "departureTime": "2024-09-01T17:00:00Z",
                "arrivalTime": "2024-09-01T02:00:00Z",
                "price": "1250",
                "totalSeats": "30",
                "busName": "Premium Shuttle"
            },
            {
                "rating": "4.0",
                "busId": "bus304",
                "amenities": ["AC"],
                "availableSeats": "32",
                "departureTime": "2024-09-01T20:00:00Z",
                "arrivalTime": "2024-09-01T05:00:00Z",
                "price": "980",
                "totalSeats": "35",
                "busName": "Standard Express"
            }
        ]
    },
    {
        "routeId": "bangalore-mumbai",
        "source": "Bangalore",
        "destination": "Mumbai",
        "buses": [
            {
                "rating": "4.4",
                "busId": "bus401",
                "amenities": ["WiFi", "AC"],
                "availableSeats": "28",
                "departureTime": "2024-09-01T08:00:00Z",
                "arrivalTime": "2024-09-02T08:00:00Z",
                "price": "1250",
                "totalSeats": "32",
                "busName": "City Express"
            },
            {
                "rating": "4.2",
                "busId": "bus402",
                "amenities": ["AC", "Snack"],
                "availableSeats": "22",
                "departureTime": "2024-09-01T12:00:00Z",
                "arrivalTime": "2024-09-02T14:00:00Z",
                "price": "1150",
                "totalSeats": "25",
                "busName": "Comfort Ride"
            },
            {
                "rating": "4.7",
                "busId": "bus403",
                "amenities": ["WiFi", "Snack", "Charging Point"],
                "availableSeats": "26",
                "departureTime": "2024-09-01T15:00:00Z",
                "arrivalTime": "2024-09-02T18:00:00Z",
                "price": "1350",
                "totalSeats": "30",
                "busName": "Luxury Express"
            },
            {
                "rating": "4.1",
                "busId": "bus404",
                "amenities": ["AC"],
                "availableSeats": "30",
                "departureTime": "2024-09-01T19:00:00Z",
                "arrivalTime": "2024-09-02T22:00:00Z",
                "price": "1050",
                "totalSeats": "35",
                "busName": "Economy Shuttle"
            }
        ]
    },
    {
        "routeId": "chennai-bangalore",
        "source": "Chennai",
        "destination": "Bangalore",
        "buses": [
            {
                "rating": "4.3",
                "busId": "bus501",
                "amenities": ["WiFi", "AC"],
                "availableSeats": "32",
                "departureTime": "2024-09-01T07:00:00Z",
                "arrivalTime": "2024-09-01T14:00:00Z",
                "price": "1200",
                "totalSeats": "35",
                "busName": "Fast Express"
            },
            {
                "rating": "4.0",
                "busId": "bus502",
                "amenities": ["AC", "Snack"],
                "availableSeats": "20",
                "departureTime": "2024-09-01T11:00:00Z",
                "arrivalTime": "2024-09-01T18:00:00Z",
                "price": "1100",
                "totalSeats": "22",
                "busName": "Comfort Bus"
            },
            {
                "rating": "4.5",
                "busId": "bus503",
                "amenities": ["WiFi", "Snack", "Charging Point"],
                "availableSeats": "30",
                "departureTime": "2024-09-01T16:00:00Z",
                "arrivalTime": "2024-09-01T23:00:00Z",
                "price": "1300",
                "totalSeats": "32",
                "busName": "Luxury Express"
            },
            {
                "rating": "4.2",
                "busId": "bus504",
                "amenities": ["AC"],
                "availableSeats": "28",
                "departureTime": "2024-09-01T20:00:00Z",
                "arrivalTime": "2024-09-02T03:00:00Z",
                "price": "1050",
                "totalSeats": "30",
                "busName": "Economy Line"
            }
        ]
    },
    {
        "routeId": "hyderabad-chennai",
        "source": "Hyderabad",
        "destination": "Chennai",
        "buses": [
            {
                "rating": "4.3",
                "busId": "bus601",
                "amenities": ["WiFi", "AC"],
                "availableSeats": "30",
                "departureTime": "2024-09-01T08:00:00Z",
                "arrivalTime": "2024-09-01T16:00:00Z",
                "price": "1150",
                "totalSeats": "32",
                "busName": "Express Shuttle"
            },
            {
                "rating": "4.1",
                "busId": "bus602",
                "amenities": ["AC", "Snack"],
                "availableSeats": "25",
                "departureTime": "2024-09-01T13:00:00Z",
                "arrivalTime": "2024-09-01T21:00:00Z",
                "price": "1050",
                "totalSeats": "28",
                "busName": "Comfort Express"
            },
            {
                "rating": "4.6",
                "busId": "bus603",
                "amenities": ["WiFi", "Snack", "Charging Point"],
                "availableSeats": "28",
                "departureTime": "2024-09-01T17:00:00Z",
                "arrivalTime": "2024-09-01T01:00:00Z",
                "price": "1250",
                "totalSeats": "30",
                "busName": "Luxury Shuttle"
            },
            {
                "rating": "4.2",
                "busId": "bus604",
                "amenities": ["AC"],
                "availableSeats": "32",
                "departureTime": "2024-09-01T21:00:00Z",
                "arrivalTime": "2024-09-02T05:00:00Z",
                "price": "1000",
                "totalSeats": "35",
                "busName": "Standard Express"
            }
        ]
    },
    {
        "routeId": "delhi-hyderabad",
        "source": "Delhi",
        "destination": "Hyderabad",
        "buses": [
            {
                "rating": "4.4",
                "busId": "bus701",
                "amenities": ["WiFi", "AC"],
                "availableSeats": "28",
                "departureTime": "2024-09-01T07:00:00Z",
                "arrivalTime": "2024-09-02T06:00:00Z",
                "price": "1300",
                "totalSeats": "32",
                "busName": "Delhi Express"
            },
            {
                "rating": "4.1",
                "busId": "bus702",
                "amenities": ["AC", "Snack"],
                "availableSeats": "20",
                "departureTime": "2024-09-01T12:00:00Z",
                "arrivalTime": "2024-09-02T11:00:00Z",
                "price": "1200",
                "totalSeats": "22",
                "busName": "Comfort Shuttle"
            },
            {
                "rating": "4.7",
                "busId": "bus703",
                "amenities": ["WiFi", "Snack", "Charging Point"],
                "availableSeats": "30",
                "departureTime": "2024-09-01T15:00:00Z",
                "arrivalTime": "2024-09-02T14:00:00Z",
                "price": "1400",
                "totalSeats": "32",
                "busName": "Luxury Line"
            },
            {
                "rating": "4.0",
                "busId": "bus704",
                "amenities": ["AC"],
                "availableSeats": "32",
                "departureTime": "2024-09-01T18:00:00Z",
                "arrivalTime": "2024-09-02T17:00:00Z",
                "price": "1100",
                "totalSeats": "35",
                "busName": "Economy Shuttle"
            }
        ]
    },
    {
        "routeId": "delhi-kolkata",
        "source": "Delhi",
        "destination": "Kolkata",
        "buses": [
            {
                "rating": "4.3",
                "busId": "bus801",
                "amenities": ["WiFi", "AC"],
                "availableSeats": "30",
                "departureTime": "2024-09-01T09:00:00Z",
                "arrivalTime": "2024-09-02T09:00:00Z",
                "price": "1400",
                "totalSeats": "35",
                "busName": "Delhi-Kolkata Express"
            },
            {
                "rating": "4.0",
                "busId": "bus802",
                "amenities": ["AC", "Snack"],
                "availableSeats": "22",
                "departureTime": "2024-09-01T14:00:00Z",
                "arrivalTime": "2024-09-02T14:00:00Z",
                "price": "1300",
                "totalSeats": "25",
                "busName": "Comfort Line"
            },
            {
                "rating": "4.6",
                "busId": "bus803",
                "amenities": ["WiFi", "Snack", "Charging Point"],
                "availableSeats": "26",
                "departureTime": "2024-09-01T17:00:00Z",
                "arrivalTime": "2024-09-02T17:00:00Z",
                "price": "1500",
                "totalSeats": "30",
                "busName": "Luxury Shuttle"
            },
            {
                "rating": "4.2",
                "busId": "bus804",
                "amenities": ["AC"],
                "availableSeats": "28",
                "departureTime": "2024-09-01T20:00:00Z",
                "arrivalTime": "2024-09-02T20:00:00Z",
                "price": "1200",
                "totalSeats": "30",
                "busName": "Economy Express"
            }
        ]
    },
    {
        "routeId": "pune-mumbai",
        "source": "Pune",
        "destination": "Mumbai",
        "buses": [
            {
                "rating": "4.2",
                "busId": "bus901",
                "amenities": ["WiFi", "AC"],
                "availableSeats": "30",
                "departureTime": "2024-09-01T09:00:00Z",
                "arrivalTime": "2024-09-01T12:00:00Z",
                "price": "900",
                "totalSeats": "32",
                "busName": "Pune-Mumbai Express"
            },
            {
                "rating": "4.0",
                "busId": "bus902",
                "amenities": ["AC", "Snack"],
                "availableSeats": "25",
                "departureTime": "2024-09-01T13:00:00Z",
                "arrivalTime": "2024-09-01T16:00:00Z",
                "price": "850",
                "totalSeats": "28",
                "busName": "Comfort Line"
            },
            {
                "rating": "4.5",
                "busId": "bus903",
                "amenities": ["WiFi", "Snack", "Charging Point"],
                "availableSeats": "28",
                "departureTime": "2024-09-01T15:00:00Z",
                "arrivalTime": "2024-09-01T18:00:00Z",
                "price": "1000",
                "totalSeats": "30",
                "busName": "Luxury Shuttle"
            },
            {
                "rating": "4.1",
                "busId": "bus904",
                "amenities": ["AC"],
                "availableSeats": "32",
                "departureTime": "2024-09-01T18:00:00Z",
                "arrivalTime": "2024-09-01T21:00:00Z",
                "price": "850",
                "totalSeats": "35",
                "busName": "Economy Express"
            }
        ]
    },
    {
        "routeId": "delhi-noida",
        "source": "Delhi",
        "destination": "Noida",
        "buses": [
            {
                "rating": "4.2",
                "busId": "bus1001",
                "amenities": ["WiFi", "AC"],
                "availableSeats": "32",
                "departureTime": "2024-09-01T10:00:00Z",
                "arrivalTime": "2024-09-01T12:00:00Z",
                "price": "600",
                "totalSeats": "35",
                "busName": "Delhi-Noida Express"
            },
            {
                "rating": "4.0",
                "busId": "bus1002",
                "amenities": ["AC", "Snack"],
                "availableSeats": "20",
                "departureTime": "2024-09-01T13:00:00Z",
                "arrivalTime": "2024-09-01T15:00:00Z",
                "price": "550",
                "totalSeats": "22",
                "busName": "Comfort Shuttle"
            },
            {
                "rating": "4.5",
                "busId": "bus1003",
                "amenities": ["WiFi", "Snack", "Charging Point"],
                "availableSeats": "25",
                "departureTime": "2024-09-01T16:00:00Z",
                "arrivalTime": "2024-09-01T18:00:00Z",
                "price": "700",
                "totalSeats": "28",
                "busName": "Luxury Line"
            },
            {
                "rating": "4.1",
                "busId": "bus1004",
                "amenities": ["AC"],
                "availableSeats": "30",
                "departureTime": "2024-09-01T19:00:00Z",
                "arrivalTime": "2024-09-01T21:00:00Z",
                "price": "500",
                "totalSeats": "32",
                "busName": "Economy Shuttle"
            }
        ]
    },
    {
        "routeId": "bengaluru-hyderabad",
        "source": "Bengaluru",
        "destination": "Hyderabad",
        "buses": [
            {
                "rating": "4.3",
                "busId": "bus1101",
                "amenities": ["WiFi", "AC"],
                "availableSeats": "30",
                "departureTime": "2024-09-01T08:00:00Z",
                "arrivalTime": "2024-09-01T14:00:00Z",
                "price": "1150",
                "totalSeats": "32",
                "busName": "Bengaluru-Hyderabad Express"
            },
            {
                "rating": "4.0",
                "busId": "bus1102",
                "amenities": ["AC", "Snack"],
                "availableSeats": "22",
                "departureTime": "2024-09-01T13:00:00Z",
                "arrivalTime": "2024-09-01T19:00:00Z",
                "price": "1050",
                "totalSeats": "25",
                "busName": "Comfort Shuttle"
            },
            {
                "rating": "4.6",
                "busId": "bus1103",
                "amenities": ["WiFi", "Snack", "Charging Point"],
                "availableSeats": "28",
                "departureTime": "2024-09-01T16:00:00Z",
                "arrivalTime": "2024-09-01T22:00:00Z",
                "price": "1250",
                "totalSeats": "30",
                "busName": "Luxury Shuttle"
            },
            {
                "rating": "4.1",
                "busId": "bus1104",
                "amenities": ["AC"],
                "availableSeats": "25",
                "departureTime": "2024-09-01T19:00:00Z",
                "arrivalTime": "2024-09-01T01:00:00Z",
                "price": "1000",
                "totalSeats": "28",
                "busName": "Economy Express"
            }
        ]
    },
    {
        "routeId": "ahmedabad-bangalore",
        "source": "Ahmedabad",
        "destination": "Bangalore",
        "buses": [
            {
                "rating": "4.4",
                "busId": "bus1201",
                "amenities": ["WiFi", "AC"],
                "availableSeats": "28",
                "departureTime": "2024-09-01T08:00:00Z",
                "arrivalTime": "2024-09-02T06:00:00Z",
                "price": "1400",
                "totalSeats": "30",
                "busName": "Ahmedabad-Bangalore Express"
            },
            {
                "rating": "4.2",
                "busId": "bus1202",
                "amenities": ["AC", "Snack"],
                "availableSeats": "22",
                "departureTime": "2024-09-01T11:00:00Z",
                "arrivalTime": "2024-09-02T09:00:00Z",
                "price": "1300",
                "totalSeats": "25",
                "busName": "Comfort Line"
            },
            {
                "rating": "4.6",
                "busId": "bus1203",
                "amenities": ["WiFi", "Snack", "Charging Point"],
                "availableSeats": "24",
                "departureTime": "2024-09-01T15:00:00Z",
                "arrivalTime": "2024-09-02T13:00:00Z",
                "price": "1500",
                "totalSeats": "26",
                "busName": "Luxury Shuttle"
            },
            {
                "rating": "4.1",
                "busId": "bus1204",
                "amenities": ["AC"],
                "availableSeats": "30",
                "departureTime": "2024-09-01T20:00:00Z",
                "arrivalTime": "2024-09-02T18:00:00Z",
                "price": "1200",
                "totalSeats": "32",
                "busName": "Economy Express"
            }
        ]
    },
    {
        "routeId": "delhi-bangalore",
        "source": "Delhi",
        "destination": "Bangalore",
        "buses": [
            {
                "rating": "4.3",
                "busId": "bus1301",
                "amenities": ["WiFi", "AC"],
                "availableSeats": "30",
                "departureTime": "2024-09-01T09:00:00Z",
                "arrivalTime": "2024-09-02T07:00:00Z",
                "price": "1500",
                "totalSeats": "35",
                "busName": "Delhi-Bangalore Express"
            },
            {
                "rating": "4.0",
                "busId": "bus1302",
                "amenities": ["AC", "Snack"],
                "availableSeats": "25",
                "departureTime": "2024-09-01T12:00:00Z",
                "arrivalTime": "2024-09-02T10:00:00Z",
                "price": "1400",
                "totalSeats": "28",
                "busName": "Comfort Shuttle"
            },
            {
                "rating": "4.5",
                "busId": "bus1303",
                "amenities": ["WiFi", "Snack", "Charging Point"],
                "availableSeats": "22",
                "departureTime": "2024-09-01T16:00:00Z",
                "arrivalTime": "2024-09-02T14:00:00Z",
                "price": "1600",
                "totalSeats": "24",
                "busName": "Luxury Express"
            },
            {
                "rating": "3.8",
                "busId": "bus1304",
                "amenities": ["AC"],
                "availableSeats": "28",
                "departureTime": "2024-09-01T21:00:00Z",
                "arrivalTime": "2024-09-02T19:00:00Z",
                "price": "1300",
                "totalSeats": "30",
                "busName": "Economy Shuttle"
            }
        ]
    }


]




export const AMENITIES_ICONS = {
    "WiFi": <MdWifi />,
    "AC": <FaSnowflake />,
    "Snack": <GiStoneStack />,
    "Charging Point": <MdPower />,
    "Blanket": <FaBed />,
    "Water Bottle": <FaBottleWater />,
    "TV": <MdTv />,
    "Reading Light": <FaLightbulb />,
    "Pillow": <FaMattressPillow />,
    "First Aid": <FaMedkit />
};


export const documentsToBuses1 = [
    {
        "rating": "3.9",
        "busId": "bus105",
        "amenities": ["AC", "Blanket"],
        "availableSeats": "30",
        "departureTime": "2024-09-05T14:00:00Z",
        "arrivalTime": "2024-09-05T22:00:00Z",
        "price": "700",
        "totalSeats": "35",
        "busName": "Western Shuttle",
        "routes": [
            {
                "routeId": "hyderabad-pune",
                "source": "Hyderabad",
                "destination": "Pune",
                "departureTime": "2024-09-05T14:00:00Z",
                "arrivalTime": "2024-09-05T22:00:00Z"
            }
        ]
    },
    {
        "rating": "4.2",
        "busId": "bus239",
        "amenities": ["WiFi", "AC", "Snack"],
        "availableSeats": "20",
        "departureTime": "2024-09-12T08:00:00Z",
        "arrivalTime": "2024-09-12T18:00:00Z",
        "price": "1300",
        "totalSeats": "25",
        "busName": "Super Deluxe",
        "routes": [
            {
                "routeId": "indore-mumbai",
                "source": "Indore",
                "destination": "Mumbai",
                "departureTime": "2024-09-12T08:00:00Z",
                "arrivalTime": "2024-09-12T18:00:00Z"
            }
        ]
    },
    {
        "rating": "4.0",
        "busId": "bus240",
        "amenities": ["AC", "Charging Point"],
        "availableSeats": "18",
        "departureTime": "2024-09-12T11:00:00Z",
        "arrivalTime": "2024-09-12T21:00:00Z",
        "price": "1200",
        "totalSeats": "20",
        "busName": "Comfort Express",
        "routes": [
            {
                "routeId": "indore-mumbai",
                "source": "Indore",
                "destination": "Mumbai",
                "departureTime": "2024-09-12T11:00:00Z",
                "arrivalTime": "2024-09-12T21:00:00Z"
            }
        ]
    },
    {
        "rating": "4.3",
        "busId": "bus241",
        "amenities": ["WiFi", "Snack", "Blanket"],
        "availableSeats": "22",
        "departureTime": "2024-09-12T15:00:00Z",
        "arrivalTime": "2024-09-12T23:00:00Z",
        "price": "1400",
        "totalSeats": "25",
        "busName": "Luxury Travel",
        "routes": [
            {
                "routeId": "indore-mumbai",
                "source": "Indore",
                "destination": "Mumbai",
                "departureTime": "2024-09-12T15:00:00Z",
                "arrivalTime": "2024-09-12T23:00:00Z"
            }
        ]
    },
    {
        "rating": "4.1",
        "busId": "bus242",
        "amenities": ["AC"],
        "availableSeats": "25",
        "departureTime": "2024-09-12T19:00:00Z",
        "arrivalTime": "2024-09-13T05:00:00Z",
        "price": "1100",
        "totalSeats": "30",
        "busName": "Economy Shuttle",
        "routes": [
            {
                "routeId": "indore-mumbai",
                "source": "Indore",
                "destination": "Mumbai",
                "departureTime": "2024-09-12T19:00:00Z",
                "arrivalTime": "2024-09-13T05:00:00Z"
            }
        ]
    },
    {
        "rating": "4.3",
        "busId": "bus301",
        "amenities": ["WiFi", "AC"],
        "availableSeats": "30",
        "departureTime": "2024-09-01T09:00:00Z",
        "arrivalTime": "2024-09-01T18:00:00Z",
        "price": "1150",
        "totalSeats": "35",
        "busName": "Royal Express",
        "routes": [
            {
                "routeId": "jaipur-delhi",
                "source": "Jaipur",
                "destination": "Delhi",
                "departureTime": "2024-09-01T09:00:00Z",
                "arrivalTime": "2024-09-01T18:00:00Z"
            }
        ]
    },
    {
        "rating": "4.1",
        "busId": "bus302",
        "amenities": ["AC", "Snack"],
        "availableSeats": "18",
        "departureTime": "2024-09-01T14:00:00Z",
        "arrivalTime": "2024-09-01T23:00:00Z",
        "price": "1050",
        "totalSeats": "22",
        "busName": "Comfort Line",
        "routes": [
            {
                "routeId": "jaipur-delhi",
                "source": "Jaipur",
                "destination": "Delhi",
                "departureTime": "2024-09-01T14:00:00Z",
                "arrivalTime": "2024-09-01T23:00:00Z"
            }
        ]
    },
    {
        "rating": "4.6",
        "busId": "bus303",
        "amenities": ["WiFi", "Snack", "Charging Point"],
        "availableSeats": "25",
        "departureTime": "2024-09-01T17:00:00Z",
        "arrivalTime": "2024-09-01T02:00:00Z",
        "price": "1250",
        "totalSeats": "30",
        "busName": "Premium Shuttle",
        "routes": [
            {
                "routeId": "jaipur-delhi",
                "source": "Jaipur",
                "destination": "Delhi",
                "departureTime": "2024-09-01T17:00:00Z",
                "arrivalTime": "2024-09-01T02:00:00Z"
            }
        ]
    },
    {
        "rating": "4.0",
        "busId": "bus304",
        "amenities": ["AC"],
        "availableSeats": "32",
        "departureTime": "2024-09-01T20:00:00Z",
        "arrivalTime": "2024-09-01T05:00:00Z",
        "price": "980",
        "totalSeats": "35",
        "busName": "Standard Express",
        "routes": [
            {
                "routeId": "jaipur-delhi",
                "source": "Jaipur",
                "destination": "Delhi",
                "departureTime": "2024-09-01T20:00:00Z",
                "arrivalTime": "2024-09-01T05:00:00Z"
            }
        ]
    },
    {
        "rating": "4.0",
        "busId": "bus111",
        "amenities": ["Charging Point"],
        "availableSeats": "28",
        "departureTime": "2024-09-11T07:00:00Z",
        "arrivalTime": "2024-09-11T11:00:00Z",
        "price": "450",
        "totalSeats": "30",
        "busName": "River Express",
        "routes": [
            {
                "routeId": "kanpur-varanasi",
                "source": "Kanpur",
                "destination": "Varanasi",
                "departureTime": "2024-09-11T07:00:00Z",
                "arrivalTime": "2024-09-11T11:00:00Z"
            }
        ]
    },
    {
        "rating": "4.3",
        "busId": "bus221",
        "amenities": ["WiFi", "AC", "Snack"],
        "availableSeats": "22",
        "departureTime": "2024-09-06T08:00:00Z",
        "arrivalTime": "2024-09-07T06:00:00Z",
        "price": "1400",
        "totalSeats": "30",
        "busName": "Golden Express",
        "routes": [
            {
                "routeId": "kolkata-delhi",
                "source": "Kolkata",
                "destination": "Delhi",
                "departureTime": "2024-09-06T08:00:00Z",
                "arrivalTime": "2024-09-07T06:00:00Z"
            }
        ]
    },
    {
        "rating": "4.2",
        "busId": "bus222",
        "amenities": ["AC", "Snack"],
        "availableSeats": "20",
        "departureTime": "2024-09-08T20:00:00Z",
        "arrivalTime": "2024-09-09T07:00:00Z",
        "price": "1200",
        "totalSeats": "25",
        "busName": "Silver Shuttle",
        "routes": [
            {
                "routeId": "kolkata-delhi",
                "source": "Kolkata",
                "destination": "Delhi",
                "departureTime": "2024-09-08T20:00:00Z",
                "arrivalTime": "2024-09-09T07:00:00Z"
            }
        ]
    },
    {
        "rating": "4.4",
        "busId": "bus223",
        "amenities": ["WiFi", "AC", "Blanket"],
        "availableSeats": "30",
        "departureTime": "2024-09-10T13:00:00Z",
        "arrivalTime": "2024-09-10T23:00:00Z",
        "price": "1300",
        "totalSeats": "35",
        "busName": "Starline Express",
        "routes": [
            {
                "routeId": "kolkata-delhi",
                "source": "Kolkata",
                "destination": "Delhi",
                "departureTime": "2024-09-10T13:00:00Z",
                "arrivalTime": "2024-09-10T23:00:00Z"
            }
        ]
    },
  
]


export const documentsToBuses = [
    {
        "rating": "4.4",
        "busId": "bus1201",
        "amenities": ["WiFi", "AC"],
        "availableSeats": "28",
        "departureTime": "2024-09-01T08:00:00Z",
        "arrivalTime": "2024-09-02T06:00:00Z",
        "price": "1400",
        "totalSeats": "30",
        "busName": "Ahmedabad-Bangalore Express",
        "routes": [
            {
                "routeId": "ahmedabad-bangalore",
                "source": "Ahmedabad",
                "destination": "Bangalore",
                "departureTime": "2024-09-01T08:00:00Z",
                "arrivalTime": "2024-09-02T06:00:00Z"
            }
        ]
    },
    {
        "rating": "4.2",
        "busId": "bus1202",
        "amenities": ["AC", "Snack"],
        "availableSeats": "22",
        "departureTime": "2024-09-01T11:00:00Z",
        "arrivalTime": "2024-09-02T09:00:00Z",
        "price": "1300",
        "totalSeats": "25",
        "busName": "Comfort Line",
        "routes": [
            {
                "routeId": "ahmedabad-bangalore",
                "source": "Ahmedabad",
                "destination": "Bangalore",
                "departureTime": "2024-09-01T11:00:00Z",
                "arrivalTime": "2024-09-02T09:00:00Z"
            }
        ]
    },
    {
        "rating": "4.6",
        "busId": "bus1203",
        "amenities": ["WiFi", "Snack", "Charging Point"],
        "availableSeats": "24",
        "departureTime": "2024-09-01T15:00:00Z",
        "arrivalTime": "2024-09-02T13:00:00Z",
        "price": "1500",
        "totalSeats": "26",
        "busName": "Luxury Shuttle",
        "routes": [
            {
                "routeId": "ahmedabad-bangalore",
                "source": "Ahmedabad",
                "destination": "Bangalore",
                "departureTime": "2024-09-01T15:00:00Z",
                "arrivalTime": "2024-09-02T13:00:00Z"
            },
            {
                "routeId": "bengaluru-hyderabad",
                "source": "Bengaluru",
                "destination": "Hyderabad",
                "departureTime": "2024-09-01T16:00:00Z",
                "arrivalTime": "2024-09-01T22:00:00Z"
            }
        ]
    },
    {
        "rating": "4.1",
        "busId": "bus1204",
        "amenities": ["AC"],
        "availableSeats": "30",
        "departureTime": "2024-09-01T20:00:00Z",
        "arrivalTime": "2024-09-02T18:00:00Z",
        "price": "1200",
        "totalSeats": "32",
        "busName": "Economy Express",
        "routes": [
            {
                "routeId": "ahmedabad-bangalore",
                "source": "Ahmedabad",
                "destination": "Bangalore",
                "departureTime": "2024-09-01T20:00:00Z",
                "arrivalTime": "2024-09-02T18:00:00Z"
            }
        ]
    },
    {
        "rating": "4.4",
        "busId": "bus107",
        "amenities": ["AC", "WiFi", "Entertainment"],
        "availableSeats": "27",
        "departureTime": "2024-09-07T16:00:00Z",
        "arrivalTime": "2024-09-08T10:00:00Z",
        "price": "850",
        "totalSeats": "30",
        "busName": "Royal Journey",
        "routes": [
            {
                "routeId": "ahmedabad-jaipur",
                "source": "Ahmedabad",
                "destination": "Jaipur",
                "departureTime": "2024-09-07T16:00:00Z",
                "arrivalTime": "2024-09-08T10:00:00Z"
            }
        ]
    },
    {
        "rating": "4.0",
        "busId": "bus209",
        "amenities": ["AC", "Charging Point"],
        "availableSeats": "28",
        "departureTime": "2024-09-03T11:00:00Z",
        "arrivalTime": "2024-09-03T23:00:00Z",
        "price": "800",
        "totalSeats": "35",
        "busName": "South Express",
        "routes": [
            {
                "routeId": "bangalore-chennai",
                "source": "Bangalore",
                "destination": "Chennai",
                "departureTime": "2024-09-03T11:00:00Z",
                "arrivalTime": "2024-09-03T23:00:00Z"
            }
        ]
    },
    {
        "rating": "4.1",
        "busId": "bus210",
        "amenities": ["WiFi"],
        "availableSeats": "30",
        "departureTime": "2024-09-03T13:00:00Z",
        "arrivalTime": "2024-09-03T23:30:00Z",
        "price": "850",
        "totalSeats": "35",
        "busName": "Fast Track",
        "routes": [
            {
                "routeId": "bangalore-chennai",
                "source": "Bangalore",
                "destination": "Chennai",
                "departureTime": "2024-09-03T13:00:00Z",
                "arrivalTime": "2024-09-03T23:30:00Z"
            }
        ]
    },
    {
        "rating": "4.2",
        "busId": "bus211",
        "amenities": ["AC", "Snack"],
        "availableSeats": "24",
        "departureTime": "2024-09-03T15:00:00Z",
        "arrivalTime": "2024-09-03T22:00:00Z",
        "price": "780",
        "totalSeats": "25",
        "busName": "Comfort Ride",
        "routes": [
            {
                "routeId": "bangalore-chennai",
                "source": "Bangalore",
                "destination": "Chennai",
                "departureTime": "2024-09-03T15:00:00Z",
                "arrivalTime": "2024-09-03T22:00:00Z"
            }
        ]
    },
    {
        "rating": "4.3",
        "busId": "bus212",
        "amenities": ["WiFi", "Charging Point"],
        "availableSeats": "26",
        "departureTime": "2024-09-03T17:00:00Z",
        "arrivalTime": "2024-09-03T23:00:00Z",
        "price": "820",
        "totalSeats": "30",
        "busName": "Luxury Express",
        "routes": [
            {
                "routeId": "bangalore-chennai",
                "source": "Bangalore",
                "destination": "Chennai",
                "departureTime": "2024-09-03T17:00:00Z",
                "arrivalTime": "2024-09-03T23:00:00Z"
            }
        ]
    },
    {
        "rating": "4.3",
        "busId": "bus301",
        "amenities": ["WiFi", "AC", "Charging Point"],
        "availableSeats": "30",
        "departureTime": "2024-09-01T08:30:00Z",
        "arrivalTime": "2024-09-01T16:30:00Z",
        "price": "1500",
        "totalSeats": "45",
        "busName": "Velocity Travel",
        "routes": [
            {
                "routeId": "bangalore-hyderabad",
                "source": "Bangalore",
                "destination": "Hyderabad",
                "departureTime": "2024-09-01T08:30:00Z",
                "arrivalTime": "2024-09-01T16:30:00Z"
            }
        ]
    },
    {
        "rating": "4.1",
        "busId": "bus302",
        "amenities": ["AC", "Snack"],
        "availableSeats": "24",
        "departureTime": "2024-09-01T10:00:00Z",
        "arrivalTime": "2024-09-01T18:00:00Z",
        "price": "1200",
        "totalSeats": "30",
        "busName": "Express Journey",
        "routes": [
            {
                "routeId": "bangalore-hyderabad",
                "source": "Bangalore",
                "destination": "Hyderabad",
                "departureTime": "2024-09-01T10:00:00Z",
                "arrivalTime": "2024-09-01T18:00:00Z"
            }
        ]
    },
    {
        "rating": "4.5",
        "busId": "bus303",
        "amenities": ["WiFi", "Charging Point"],
        "availableSeats": "25",
        "departureTime": "2024-09-01T12:00:00Z",
        "arrivalTime": "2024-09-01T20:00:00Z",
        "price": "1300",
        "totalSeats": "30",
        "busName": "Swift Shuttle",
        "routes": [
            {
                "routeId": "bangalore-hyderabad",
                "source": "Bangalore",
                "destination": "Hyderabad",
                "departureTime": "2024-09-01T12:00:00Z",
                "arrivalTime": "2024-09-01T20:00:00Z"
            }
        ]
    },
    {
        "rating": "4.2",
        "busId": "bus304",
        "amenities": ["AC"],
        "availableSeats": "30",
        "departureTime": "2024-09-01T14:00:00Z",
        "arrivalTime": "2024-09-01T22:00:00Z",
        "price": "1100",
        "totalSeats": "32",
        "busName": "Budget Ride",
        "routes": [
            {
                "routeId": "bangalore-hyderabad",
                "source": "Bangalore",
                "destination": "Hyderabad",
                "departureTime": "2024-09-01T14:00:00Z",
                "arrivalTime": "2024-09-01T22:00:00Z"
            }
        ]
    },
    ...documentsToBuses1
]
