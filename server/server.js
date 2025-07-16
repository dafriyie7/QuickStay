import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebHooks from "./controllers/clerkWebhooks.js";
import userRouter from "./routes/userRoutes.js";
import hotelRouter from "./routes/hotelRoutes.js";
import cloudinary from "./configs/cloudinary.js";
import roomRouter from "./routes/roomRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

// Connect DB and Cloudinary
connectDB();
cloudinary;

const app = express();
app.use(cors());
app.use(express.json()); // Enable JSON parsing

// Webhooks should be handled before Clerk middleware
app.use("/api/clerk", clerkWebHooks);

// Clerk auth middleware (for protected routes)
app.use(clerkMiddleware());

// Application routes
app.use("/api/user", userRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/rooms", roomRouter);
app.use("/api/bookings", bookingRouter);

// Root route
app.get("/", (req, res) => {
	res.send("API is working");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
