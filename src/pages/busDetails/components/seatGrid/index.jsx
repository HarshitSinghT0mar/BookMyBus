import SeatButton from "../../../../components/seatButton";

const SeatGrid = ({ seats }) => {
    return (
        <div className="grid grid-cols-4 gap-2">
            {seats?.map((seat) => (
                <SeatButton key={seat?.seatId} {...seat}  />
            ))}
        </div>
    );
};

export default SeatGrid;
