// import User from "../models/User.js";

// export const protect = async (req, res, next) => {
// 	try {
// 		const { userId } = req.auth(); // use as function
// 		if (!userId) {
// 			return res
// 				.status(401)
// 				.json({ success: false, message: "not authenticated" });
// 		}

// 		const user = await User.findById(userId);
// 		if (!user) {
// 			return res
// 				.status(404)
// 				.json({ success: false, message: "User not found" });
// 		}

// 		req.user = user;
// 		next();
// 	} catch (error) {
// 		console.error("Auth middleware error:", error);
// 		res.status(500).json({ success: false, message: "Server error" });
// 	}
// };


import { getAuth } from "@clerk/express";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
	try {
		const { userId } = getAuth(req); // this is the correct usage

		if (!userId) {
			return res
				.status(401)
				.json({ success: false, message: "Not authenticated" });
		}

		const user = await User.findById(userId);
		if (!user) {
			return res
				.status(404)
				.json({ success: false, message: "User not found" });
		}

		req.user = user;
		next();
	} catch (error) {
		console.error("Auth middleware error:", error);
		res.status(500).json({ success: false, message: "Server error" });
	}
};
