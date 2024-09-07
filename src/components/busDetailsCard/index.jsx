import { FaLongArrowAltRight, FaRegClock, } from 'react-icons/fa';
import { getTimeWithAmPm } from '../../utils/getTime';
import PrimaryButton from '../ui/button/primaryButton';
import { Link } from 'react-router-dom';

const BusDetailsCard = ({
    departureTime,
    arrivalTime,
    busName = '',
    route = '',
    price = 0,
    availableSeats,
    amenities,
    source,
    destination,
    routeId,
    busId
}) => {

    return (
        <div className="max-w-[20rem] rounded-lg border border-gray-200 p-4 shadow-sm">
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
            <div className='flex justify-between w-full items-center mb-4'>
                <div className="flex space-x-1  items-center">
                    {/* <FaWifi className="text-gray-500" size={20} />
                <FaChargingStation className="text-gray-500" size={20} /> */}
                    {amenities?.map((amenity) => {
                        return <span className='text-gray-500 text-xs' key={amenity}>{amenity}</span>
                    })}
                </div>
                <div className="text-gray-600 text-xs flex gap-1 space-x-1 items-center">
                    <span>{source}</span>
                    <FaLongArrowAltRight />
                    <span >{destination}</span>
                </div>
            </div>
            <PrimaryButton to={`/${routeId}/${busId}`} className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
                {`Book Now`}
            </PrimaryButton>
        </div>
    );
};

const TimeDisplay = ({ time }) => {

    return <div className="flex items-center space-x-2">
        <FaRegClock />
        <span>{getTimeWithAmPm(time)}</span>
    </div>
}

export default BusDetailsCard;