import classNames from 'classnames';
import { useState } from 'react';

const SeatButton = ({ seatId, isBooked, reservation = {}, onClick = () => { } }) => {
    const [isSelected, setIsSelected] = useState(false)
    const { isReserved, category } = reservation
    const seatClass = classNames(
        'p-2 rounded text-center',
        {
            'bg-gray-400 cursor-not-allowed': isBooked, // Booked seats
            'bg-blue-100 hover:bg-blue-200': !isBooked && !isReserved && !isSelected, // Available seats
            'bg-green-500 text-white': isSelected, // Selected seat
            'border-2 border-solid border-primary text-white cursor-not-allowed': category === 'woman' && isBooked, // Reserved (Woman)
            'border-pink-400 text-white': category === 'woman' && !isBooked, // Reserved (Woman)
            'border-solid border-2 border-yellow-500 text-white cursor-not-allowed': category === 'disabled' && isBooked, // Reserved (Disabled)
            'bg-yellow-500 text-white': category === 'disabled' && !isBooked, // Reserved (Disabled)
        }
    );

    return (
        <button
            title={category ?? 'Regular'}
            className={seatClass}
            onClick={(e) => { onClick({e,seatId}); setIsSelected(prev=>!prev) }}
            disabled={isBooked || isReserved}
        >
            {seatId}
        </button>
    );
};

export default SeatButton;
