import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebHooks from "./controllers/clerkWebhooks.js";
import userRouter from "./routes/userRoutes.js";
import hotelRouter from "./routes/hotelRoutes.js";
import connectCloudinary from "./configs/cloudinary.js";
import roomRouter from "./routes/roomRoutes.js";

connectDB();
connectCloudinary();

const app = express();
app.use(cors()); // enable cross-origin resource sharing

// middleware
app.use(express.json());
app.use(clerkMiddleware());

// API to listen to clerk webhook
app.use("/api/clerk", clerkWebHooks);
app.use("/api/user", userRouter);
app.use("/api/hotels", hotelRouter);
app.use('/api/rooms', roomRouter)

app.get("/", (req, res) => {
	res.send("API is working");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// import express from "express";
// import "dotenv/config";
// import cors from "cors";
// import connectDB from "./configs/db.js";
// import { clerkMiddleware } from "@clerk/express";
// import clerkWebHooks from "./controllers/clerkWebhooks.js";

// connectDB();

// const app = express();
// app.use(cors()); // enable cross-origin resource sharing
// app.use(clerkMiddleware());

// // Use express.json for general routes
// app.use(express.json());

// // Use express.raw ONLY for the Clerk webhook route
// app.post(
// 	"/api/clerk",
// 	express.raw({ type: "application/json" }),
// 	clerkWebHooks
// );

// // Test route
// app.get("/", (req, res) => {
// 	res.send("API is working");
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
