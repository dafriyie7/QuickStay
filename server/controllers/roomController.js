// import cloudinary from "../configs/cloudinary.js"
// import Hotel from "../models/hotel.js"
// import Room from "../models/room.js"

// // API to create a new room for a hotel
// export const createRoom = async (req, res) => {
//     try {
//         const { roomType, pricePerNight, amenities } = req.body
//         const hotel = await Hotel.findOne({ owner: req.auth.userId })
        
//         if (!hotel) {
//             return res.json({success: false, message: "no hotel found"})
//         }

//         // upload image to cloudinary
//         const uploadImages = req.files.map(async (file) => {
//             const response = await cloudinary.uploader.upload(file.path)
//             return response.secure_url;
//         })

//         // wait for all uploads to complete
//         const images = await Promise.all(uploadImages)

//         await Room.create({
//             hotel: hotel._id,
//             roomType,
//             pricePerNight: +pricePerNight,
//             amenities: JSON.parse(amenities)
//         })
//         res.json({success: true, message: "room created successfully"})
//     } catch (error) {
//         res.json({success: false, message: error.message})
//     }
// }

// // API to get all rooms
// export const getRooms = async (req, res) => {
//     try {
//         await Room.find({ isAvailable: true }).populate({
//             path: 'hotel',
//             populate: {
//                 path: 'owner',
//                 select: 'image'
//             }
//         }).sort({ createdAt: -1 })
//         res.json({ success: true, rooms });
//     } catch (error) {
//         res.json({ success: false, message: error.message})
//     }
// }

// // API to get all rooms for a specific hotel
// export const getOwnerRooms = async (req, res) => {
//     try {
//         const hotelData = await Hotel({ owner: req.auth.userId })
//         const rooms = await Room.find({ hotel: hotelData._id.toString() }).populate("hotel")
//         res.json({success: true, rooms})
//     } catch (error) {
//         res.json({success: false, message: error.message})
//     }
// }

// // API to toggle availability of a room
// export const toggleRoomAvailability = async (req, res) => {
//     try {
//         const { roomId } = req.body;
//         const roomData = await Room.findById(roomId)
//         roomData.isAvailable = !roomData.isAvailable
//         res.json({success: true, message: "room availability updated"})
//     } catch (error) {
        
//     }
// }


import cloudinary from "../configs/cloudinary.js";
import Hotel from "../models/hotel.js";
import Room from "../models/room.js";

// API to create a new room for a hotel
export const createRoom = async (req, res) => {
	try {
		const { roomType, pricePerNight, amenities } = req.body;

        // const hotel = await Hotel.findOne({ owner: req.auth.userId });
		const hotel = await Hotel.findOne({ owner: req.auth().userId }); 
		if (!hotel) {
			return res.json({ success: false, message: "No hotel found" });
		}

		// Upload images to Cloudinary
		const uploadImages = req.files.map(async (file) => {
			const result = await cloudinary.uploader.upload(file.path);
			return result.secure_url;
		});
		const images = await Promise.all(uploadImages);

		await Room.create({
			hotel: hotel._id,
			roomType,
			pricePerNight: Number(pricePerNight),
			amenities: JSON.parse(amenities),
			images, // ADD: store image URLs
		});

		res.json({ success: true, message: "Room created successfully" });
	} catch (error) {
		res.json({ success: false, message: error.message });
	}
};

// API to get all available rooms
export const getRooms = async (req, res) => {
	try {
		const rooms = await Room.find({ isAvailable: true })
			.populate({
				path: "hotel",
				populate: {
					path: "owner",
					select: "image",
				},
			})
			.sort({ createdAt: -1 });

		res.json({ success: true, rooms });
	} catch (error) {
		res.json({ success: false, message: error.message });
	}
};

// API to get all rooms for a specific hotel owner
export const getOwnerRooms = async (req, res) => {
	try {
        // const hotelData = await Hotel.findOne({ owner: req.auth.userId });
		const hotelData = await Hotel.findOne({ owner: req.auth().userId });
		if (!hotelData) {
			return res.json({ success: false, message: "Hotel not found" });
		}

		const rooms = await Room.find({ hotel: hotelData._id }).populate(
			"hotel"
		);
		res.json({ success: true, rooms });
	} catch (error) {
		res.json({ success: false, message: error.message });
	}
};

// API to toggle availability of a room
export const toggleRoomAvailability = async (req, res) => {
	try {
		const { roomId } = req.body;
		const roomData = await Room.findById(roomId);
		if (!roomData) {
			return res.json({ success: false, message: "Room not found" });
		}

		roomData.isAvailable = !roomData.isAvailable;
		await roomData.save();

		res.json({ success: true, message: "Room availability updated" });
	} catch (error) {
		res.json({ success: false, message: error.message });
	}
};
