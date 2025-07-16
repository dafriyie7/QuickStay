import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
	getUserData,
	storerecentSearchedCities,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", protect, getUserData);
userRouter.post("/store-recent-search", protect, storerecentSearchedCities);

export default userRouter;
