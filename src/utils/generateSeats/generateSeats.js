function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function generateSeats(totalSeats, availableSeats) {
    const seatTypes = ["Sleeper", "Regular"];
    const categories = ["general", "woman", "disabled"];

    // Create an array to track which seats are booked
    const bookedIndices = new Set();
    while (bookedIndices.size < totalSeats - availableSeats) {
        bookedIndices.add(Math.floor(Math.random() * totalSeats));
    }

    const seats = [];
    for (let i = 1; i <= totalSeats; i++) {
        const isBooked = bookedIndices.has(i - 1);  // Mark seat as booked if its index is in bookedIndices
        const seat = {
            seatId: `A${i}`,  // Unique seat ID
            type: getRandomElement(seatTypes),  // Random seat type
            isBooked: isBooked,  // Set based on bookedIndices
            bookedBy: isBooked ? `user${i}` : null,  // Assign a user if booked
            reservation: {
                category: isBooked ? getRandomElement(categories) : null,  // Assign random category if booked
                isReserved: isBooked ? Math.random() < 0.5 : false  // Randomly set isReserved if booked
            }
        };
        seats.push(seat);
    }
    return seats;
}



export function addSeatsToRoutes(busData) {
    return busData.map(bus => {
        return {
            ...bus,
            routes: bus.routes.map(route => {
                const totalSeats = bus.totalSeats;  // Get the total seats for the bus
                const availableSeats = bus.availableSeats;  // Get the available seats for the bus

                // Generate seats based on the totalSeats and availableSeats
                const seats = generateSeats(totalSeats, availableSeats);

                // Return the route with the seats array added
                return {
                    ...route,
                    seats: seats
                };
            })
        };
    });
}