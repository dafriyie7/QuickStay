import Booking from "../models/bookings.js";
import Hotel from "../models/hotel.js";
import Room from "../models/room.js";

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
		const isAvailable = await checkAvailability({
			checkInDate,
			checkOutDate,
		});
		res.json({ success: true, isAvailable });
	} catch (error) {
		res.json({ success: false, message: error.message });
	}
};

// apit to create a new booking
// POST  /api/bookings/book

export const createBooking = async (req, res) => {
	try {
		const { room, checkInDate, checkOutDate, guest } = req.body;
		const user = req.user._id;

		// before booking, check availability
		const isAvailable = await checkAvailability({
			checkInDate,
			checkOutDate,
			room,
		});
		if (!isAvailable) {
			return res.json({
				success: false,
				message: "room is not available",
			});
		}

		// get totalPrice from Room
		const roomData = await Room.findById(room).populate("hotel");
		let totalPrice = roomData.pricePerNight;

		// calculate totalPrice based on nights
		const checkIn = new Date(checkInDate);
		const checkOut = new Date(checkOutDate);
		const timeDiff = checkOut.getTime() - checkIn.getTime();
		const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));

        totalPrice *= nights;
        
        const booking = await Booking.create({
            user,
            room,
            hotel: roomData.hotel._id,
            guests: +guests,
            checkInDate,
            checkOutDate,
            totalPrice
        })

        res.json({success: true, message: "booking created successfully"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "failed to create booking"})
    }
};

// api to get all bookings for a user
// GET /api/bookings/user
export const getUserBookings = async (req, res) => {
    try {
        const user = req.user._id
        const bookings = await Booking.find({ user }).populate("room hotel").sort({ createdAt: -1 })
        res.json({success: true, bookings})
    } catch (error) {
        res.json({success: false, message: "failed to fetch bookings "})
    }
}

export const getHotelBookings = async (req, res) => {
    try {
		// const hotel = await Hotel.findOne({ owner: req.auth.userId });
        const hotel = await Hotel.findOne({ owner: req.auth().userId });
		
		if (!hotel) {
			return res.json({ success: false, message: "no hotel found" });
		}
		const bookings = await Booking.find({ hotel: hotel._id })
			.populate("room hotel user")
			.sort({ createdAt: -1 });
		// total bookings
		const totalBookings = bookings.length;
		//total reenue
		const totalRevenue = bookings.reduce(
			(acc, booking) => acc + booking.totalPrice,
			0
		);

		res.json({
			success: true,
			dashboardData: { totalBookings, totalRevenue, bookings },
		});
    } catch (error) {
        res.json({success: false, message: "failed to fetch bookings" })
    }
}