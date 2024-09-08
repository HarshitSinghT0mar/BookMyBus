import { FaLock } from "react-icons/fa";

const PaymentSummaryCard = ({
    selectedSeats = [3, 4, 5],
    pricePerSeat = 25,
    currency = '₹ ',
    handlePayment=()=>{console.log('Paid');
    },
}) => {
    const subtotal = selectedSeats.length * pricePerSeat;
    const taxes = subtotal * (0.75)
    const total = subtotal + taxes;

    return (
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-md ">
            <h2 className="text-2xl font-bold mb-4">Payment Summary</h2>
            <div>
                <div className="space-y-2 mb-4 min-h-full">
                    <div className="flex justify-between">
                        <span>Seats Selected:</span>
                        <span className="font-semibold">{selectedSeats?.length}</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Price per Seat:</span>
                        <span className="font-semibold">{currency}{Number(pricePerSeat)?.toFixed(2)}</span>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span className="font-semibold">{currency}{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Taxes & Fees:</span>
                        <span className="font-semibold">{currency}{taxes?.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold mt-2">
                        <span>Total:</span>
                        <span>{currency}{total.toFixed(2)}</span>
                    </div>
                </div>
            </div>
            <button
                className="w-full bg-primary text-white py-3 rounded-full font-bold hover:bg-primaryDark transition duration-300 flex items-center justify-center self-end cursor-pointer"
                onClick={handlePayment}
                disabled={selectedSeats?.length === 0}
            >
                <FaLock className="mr-2" />  {`Pay Securely  ${currency}${total?.toFixed(2)} `}

            </button>


        </div>
    );
};

export default PaymentSummaryCard;