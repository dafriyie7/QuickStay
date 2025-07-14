import Booking from "../models/bookings.js";

// check availability of room
const checkAvailability = async ({ checkInDate, checkOutDate, room }) => {
	try {
		const bookings = await Booking.find({
			room,
			checkInDate: { $lte: checkOutDate },
			checkOutDate: { $gte: checkInDate },
		});
		const isAvailable = bookings.length === 0;
		return isAvailable;
	} catch (error) {
		console.error(error.message);
	}
};


// apit to check availability of room
// POST /api/bookings/check-availability
export const checkAvailabilityAPI = async (req, res) => {
    try {
        const { room, checkInDate, checkOutDate } = req.body;
        const isAvailable = await checkAvailability({ checkInDate, checkOutDate })
        res.json({success: true, isAvailable})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}