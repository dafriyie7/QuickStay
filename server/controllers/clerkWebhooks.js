import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebHooks = async (req, res) => {
	try {
		// svix instance with clerk webhook secret
		const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
		// getting headers
		const headers = {
			"svix-id": req.headers["sxiv-id"],
			"svix-timestamp": req.headers["svix-timestamp"],
			"svix-signature": req.headers["svix-signature"],
		};
		// verify headers
		await whook.verify(JSON.stringify(req.body), headers);
		//getting data from request body
		const { data, type } = req.body;

		const userData = {
			_id: data.id,
			email: data.email_addresses[0].email.email_addresses,
			username: data.first_name + " " + data.last_name,
			image: data.image_url,
		};
		// cases for different events
		switch (type) {
			case "user.created":
				{
					await User.create(userData);
				}
				break;
			case "user.updated":
				{
					await User.findByInAndUpdate(data.id, userData);
				}
				break;
			case "user.deleted":
				{
					await User.findByInAndDelete(data.id);
				}
				break;

			default:
				break;
		}
		res.json({ success: true, message: "Webhook Received" });
	} catch (error) {
		console.log(error.message);
		res.json({ success: false, message: error.message });
	}
};

export default clerkWebHooks;
