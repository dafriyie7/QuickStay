import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
	checkAvailabilityAPI,
	createBooking,
	getHotelBookings,
	getUserBookings,
} from "../controllers/bookingController.js";
import { requireAuth } from "@clerk/express";

const bookingRouter = express.Router();

bookingRouter.post("/check-availability", protect, checkAvailabilityAPI);
bookingRouter.post("/book", protect, createBooking);
// bookingRouter.post("/book", requireAuth(), createBooking);

bookingRouter.get("/user", protect, getUserBookings);
bookingRouter.get("/hotel", protect, getHotelBookings);

export default bookingRouter