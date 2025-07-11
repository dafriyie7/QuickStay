import { timeStamp } from "console";
import mongoose from "mongoose";

const userSchema = mongoose.Schema(
	{
		_id: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			requied: true,
		},
		image: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			enum: ["user", "hotelOwner"],
			default: "user",
		},
		recentSearchCities: [
			{
				type: String,
				required: true,
			},
		],
	},
	{ timeStamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
