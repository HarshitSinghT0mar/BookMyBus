import { FaChargingStation, FaRegClock, FaWifi } from 'react-icons/fa';
import { getTimeWithAmPm } from '../../utils/getTime';

const BusDetailsCard = ({
    departureTime,
    arrivalTime,
    busName='',
    route='',
    price=0,
    availableSeats
}) => {
    
    return (
        <div className="max-w-sm rounded-lg border border-gray-200 p-4 shadow-sm">
            <div className="flex justify-between mb-4">
                <TimeDisplay time={departureTime} />
                <TimeDisplay time={arrivalTime} />
            </div>

            <div className="mb-4">
                <h2 className="text-xl font-bold">{busName}</h2>
                <p className="text-gray-600">{route}</p>
            </div>

            <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold">INR {price}</span>
                <span className="text-gray-600">{availableSeats} seats available</span>
            </div>

            <div className="flex space-x-2 mb-4">
                <FaWifi className="text-gray-500" size={20} />
                <FaChargingStation className="text-gray-500" size={20} />
            </div>

            <button className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
                Book Now
            </button>
        </div>
    );
};

const TimeDisplay = ({ time }) => {

console.log({time});

  return  <div className="flex items-center gap-2">
        <FaRegClock />
        <span>{getTimeWithAmPm(time)}</span>
    </div>
}

export default BusDetailsCard;