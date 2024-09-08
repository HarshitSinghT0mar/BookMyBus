import { FaCalendarAlt, FaClock, FaLongArrowAltRight, FaTicketAlt } from 'react-icons/fa';
import { useBusDetailsController } from './busDetails.controller';
import { getDate, getTimeWithAmPm } from '../../utils/getTime';
import SeatGrid from './components/seatGrid';
import PaymentSummaryCard from '../../components/paymentSummaryCard';

const BusDetails = () => {
    const { busData, currentRouteBusData, selectedSeats ,handleSelectedSeats, handlePayment} = useBusDetailsController()
    const { totalSeats, price, amenities, rating, busName, routes } = busData || {}
    const { source, destination, departureTime, arrivalTime } = currentRouteBusData || {}

    return (
        <div className='w-full'>
            <div className="bg-primary text-white p-6 shadow-lg">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl flex space-x-1 items-center font-bold mb-2">{busName}</h1>
                        <h2 className="text-xl flex space-x-1 items-center font-bold mb-2">

                            <span>{source}</span>
                            <FaLongArrowAltRight />
                            <span>{destination}</span>
                        </h2>
                        <p className="text-sm mb-4">
                            Departs at {`${getTimeWithAmPm(departureTime)} , ${getDate(departureTime)}`}
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="flex items-center space-x-2 justify-end mb-2">
                            <FaCalendarAlt />
                            <span>{getDate(departureTime)}</span>
                        </p>
                        <p className="flex items-center space-x-2 justify-end mb-2">
                            <FaClock />
                            <span>{getTimeWithAmPm(departureTime)} - {getTimeWithAmPm(arrivalTime)}</span>
                        </p>
                        <p className="flex items-center space-x-2 justify-end">
                            <FaTicketAlt />
                            <span>{price} Rs.</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 mt-4 space-x-12 p-4'>
                <div className='col-span-2 '>
                    <h2 className='text-2xl font-bold mb-4 text-gray-800 '>Select Seats</h2>
                    <SeatGrid {...currentRouteBusData} handleSelectedSeats={handleSelectedSeats} />
                </div>
                <PaymentSummaryCard selectedSeats={selectedSeats} pricePerSeat={Number(price)} handlePayment={ handlePayment} />
            </div>
        </div>
    );
};

export default BusDetails;