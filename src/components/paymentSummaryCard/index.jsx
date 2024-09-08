import React from 'react';
// import { CreditCard, Check } from 'lucide-react';

const PaymentSummaryCard = ({
    selectedSeats = [3, 4, 5], // Dummy data: 3 seats selected by default
    pricePerSeat = 25, // Dummy data: $25 per seat
    currency = '$',
    taxes = 7.50, // Dummy data: $7.50 in taxes
    onProceedToPayment = () => console.log('Proceeding to payment...') // Dummy function
}) => {
    const subtotal = selectedSeats.length * pricePerSeat;
    const total = subtotal + taxes;

    return (
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-md ">
            <h2 className="text-2xl font-bold mb-4">Payment Summary</h2>
<div>
            <div className="space-y-2 mb-4 min-h-full">
                <div className="flex justify-between">
                    <span>Selected Seats:</span>
                    <span className="font-semibold">{selectedSeats.join(', ')}</span>
                </div>
                <div className="flex justify-between">
                    <span>Number of Seats:</span>
                    <span className="font-semibold">{selectedSeats.length}</span>
                </div>
                <div className="flex justify-between">
                    <span>Price per Seat:</span>
                    <span className="font-semibold">{currency}{pricePerSeat.toFixed(2)}</span>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-semibold">{currency}{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Taxes & Fees:</span>
                    <span className="font-semibold">{currency}{taxes.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold mt-2">
                    <span>Total:</span>
                    <span>{currency}{total.toFixed(2)}</span>
                </div>
            </div>
</div>
            <button
                className="w-full bg-red-500 text-white py-3 rounded-full font-bold hover:bg-red-600 transition duration-300 flex items-center justify-center self-end"
                onClick={onProceedToPayment}
                disabled={selectedSeats.length === 0}
            >
                {/* <CreditCard className="mr-2" size={20} /> */}
                Proceed to Payment
            </button>

            {/* <div className="mt-4 text-sm text-gray-600 flex items-start">
                <Check className="mr-2 flex-shrink-0 mt-1" size={16} />
                <p>By proceeding, you agree to our terms of service and cancellation policy.</p>
            </div> */}
        </div>
    );
};

export default PaymentSummaryCard;