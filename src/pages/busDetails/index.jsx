import { useState } from 'react';

const BusDetailsAndSeatSelection = ({ busData=[] }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);

    const toggleSeatSelection = (seatId) => {
        setSelectedSeats(prev =>
            prev.includes(seatId)
                ? prev.filter(id => id !== seatId)
                : [...prev, seatId]
        );
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Bus Details and Seat Selection</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <img
                        src={'https://picsum/300'}
                        alt="Bus"
                        className="w-full h-64 object-cover rounded-lg"
                    />
                </div>

                <div>
                    <h2 className="text-xl font-semibold">{busData?.name || 'Bus Name'}</h2>
                    <p>Bus Number: {busData?.busNumber}</p>
                    <p>Capacity: {busData?.capacity} seats</p>
                    <p>Contact: {busData?.contact}</p>
                    <div className="flex space-x-2 mt-2">
                        {/* {busData?.amenities.includes('AC') && <Wind className="text-blue-500" />} */}
                        {/* {busData?.amenities.includes('WiFi') && <Wifi className="text-blue-500" />} */}
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Route Information</h2>
                {busData?.routes?.map((route) => (
                    <div key={route.routeId} className="border p-4 rounded-lg mb-4">
                        <p>From: {route.source} To: {route.destination}</p>
                        <p>Departure: {new Date(route.departureTime).toLocaleString()}</p>
                        <p>Arrival: {new Date(route.arrivalTIme).toLocaleString()}</p>
                        <p>Price: ${route.price}</p>

                        <h3 className="text-lg font-semibold mt-4 mb-2">Seat Selection</h3>
                        <div className="grid grid-cols-4 gap-2">
                            {route.seats.map((seat) => (
                                <button
                                    key={seat.seatId}
                                    className={`p-2 rounded ${seat.isBooked
                                        ? 'bg-gray-300 cursor-not-allowed'
                                        : selectedSeats.includes(seat.seatId)
                                            ? 'bg-green-500 text-white'
                                            : 'bg-blue-100 hover:bg-blue-200'
                                        }`}
                                    onClick={() => !seat.isBooked && toggleSeatSelection(seat.seatId)}
                                    disabled={seat.isBooked}
                                >
                                    {seat.seatId}
                                    {seat.reservation.isReserved && (
                                        {/* <User className="inline ml-1" size={16} /> */}
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4">
                <h3 className="text-lg font-semibold">Selected Seats: {selectedSeats.join(', ')}</h3>
                <button
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    disabled={selectedSeats.length === 0}
                >
                    Proceed to Booking
                </button>
            </div>
        </div>
    );
};

export default BusDetailsAndSeatSelection;