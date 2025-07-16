import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebHooks = async (req, res) => {
	try {
		const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

		const headers = {
			"svix-id": req.headers["svix-id"],
			"svix-timestamp": req.headers["svix-timestamp"],
			"svix-signature": req.headers["svix-signature"],
		};

		// Verify webhook
		await whook.verify(JSON.stringify(req.body), headers);

		const { data, type } = req.body;

		const userData = {
			_id: data.id,
			email: data.email_addresses[0].email_address,
			username: data.first_name + " " + data.last_name,
			image: data.image_url,
		};

		switch (type) {
			case "user.created":
				await User.create(userData);
				break;

			case "user.updated":
				await User.findByIdAndUpdate(data.id, userData, { new: true });
				break;

			case "user.deleted":
				await User.findByIdAndDelete(data.id);
				break;

			default:
				console.log(`Unhandled webhook type: ${type}`);
				break;
		}

		res.status(200).json({ success: true, message: "Webhook received" });
	} catch (error) {
		console.error("Webhook error:", error.message);
		res.status(400).json({ success: false, message: error.message });
	}
};

export default clerkWebHooks;



// import User from "../models/User.js";
// import { Webhook } from "svix";

// const clerkWebHooks = async (req, res) => {
// 	try {
// 		const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

// 		const headers = {
// 			"svix-id": req.headers["svix-id"],
// 			"svix-timestamp": req.headers["svix-timestamp"],
// 			"svix-signature": req.headers["svix-signature"],
// 		};

// 		const payload = JSON.stringify(req.body);
// 		await whook.verify(payload, headers);

// 		const { data, type } = req.body;

// 		const userData = {
// 			_id: data.id,
// 			email: data.email_addresses[0].email_address,
// 			username: `${data.first_name} ${data.last_name}`,
// 			image: data.image_url,
// 		};

// 		switch (type) {
// 			case "user.created":
// 				await User.create(userData);
// 				break;

// 			case "user.updated":
// 				await User.findByIdAndUpdate(data.id, userData, { new: true });
// 				break;

// 			case "user.deleted":
// 				await User.findByIdAndDelete(data.id);
// 				break;

// 			default:
// 				console.log(`Unhandled webhook type: ${type}`);
// 		}

// 		res.status(200).json({ success: true, message: "Webhook received" });
// 	} catch (err) {
// 		console.error("Webhook error:", err.message);
// 		res.status(400).json({ success: false, message: err.message });
// 	}
// };

// export default clerkWebHooks;
