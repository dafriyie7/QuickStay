// import { v2 as cloudinary } from "cloudinary";

// const connectCloudinary = async () => {
// 	cloudinary.config({
// 		cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// 		api_key: process.envCLOUDINARY_API_KEY,
// 		api_secret: process.envCLOUDINARY_API_SECRET,
// 	});
// };

// export default connectCloudinary;


import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
