import User from "../models/User.js";

// // middleware to check if user is authenticated
// export const protect = async (req, res, next) => {
// 	const { userId } = req.auth();
// 	if (!userId) {
// 		res.json({ success: false, message: "not authenticated" });
// 	} else {
// 		const user = await User.findById(userId);
// 		req.user = user;
// 		next();
// 	}
// };


export const protect = async (req, res, next) => {
	try {
		const { userId } = req.auth(); // use as function
		if (!userId) {
			return res
				.status(401)
				.json({ success: false, message: "not authenticated" });
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
