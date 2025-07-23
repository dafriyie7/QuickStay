// import React, { useState } from "react";
// import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
// import { useNavigate } from "react-router-dom";
// import StarRating from "../components/StarRating";

// const CheckBox = ({ label, selected = false, onChange = () => {} }) => (
// 	<label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
// 		<input
// 			type="checkbox"
// 			checked={selected}
// 			onChange={(e) => onChange(e.target.checked, label)}
// 		/>
// 		<span className="font-light select-none">{label}</span>
// 	</label>
// );

// const RadioButton = ({ label, selected = false, onChange = () => {} }) => (
// 	<label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
// 		<input
// 			type="radio"
// 			name="sortOption"
// 			checked={selected}
// 			onChange={() => onChange(label)}
// 		/>
// 		<span className="font-light select-none">{label}</span>
// 	</label>
// );

// const AllRooms = () => {
// 	const navigate = useNavigate();
// 	const [openFilters, setOpenFilters] = useState(false);

// 	const roomTypes = [
// 		"Single Bed",
// 		"Double Bed",
// 		"Luxury Room",
// 		"Family Suite",
// 	];
// 	const priceRanges = [
// 		"0 to 500",
// 		"500 to 1000",
// 		"1000 to 2000",
// 		"2000 to 3000",
// 	];
// 	const sortOptions = ["Price: Low to High", "Price: High to Low", "Newest"];

// 	return (
// 		<div className="flex flex-col-reverse lg:flex-row justify-between pt-28 md:pt-36 px-4 md:px-16 lg:px-24">
// 			{/* Main Room Listing */}
// 			<div className="flex-1">
// 				<div className="flex flex-col items-start text-left mb-6">
// 					<h1 className="font-playfair text-4xl md:text-[40px]">
// 						Hotel Rooms
// 					</h1>
// 					<p className="text-sm md:text-base text-gray-500/90 mt-2">
// 						Take advantage of our limited-time offers and special
// 						packages to enhance your stay and create unforgettable
// 						memories.
// 					</p>
// 				</div>

// 				{roomsDummyData.map((room, index) => (
// 					<div
// 						className="flex flex-col md:flex-row gap-6 py-10 border-b border-gray-300 last:border-0"
// 						key={index}
// 					>
// 						<img
// 							src={room.images[0]}
// 							alt="hotel-img"
// 							title="View Room Details"
// 							className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
// 							onClick={() => {
// 								navigate(`/rooms/${room._id}`);
// 								window.scrollTo(0, 0);
// 							}}
// 						/>
// 						<div className="md:w-1/2 flex flex-col gap-2">
// 							<p className="text-gray-500">{room.hotel.city}</p>
// 							<p
// 								onClick={() => {
// 									navigate(`/rooms/${room._id}`);
// 									window.scrollTo(0, 0);
// 								}}
// 								className="text-gray-800 text-3xl font-playfair cursor-pointer"
// 							>
// 								{room.hotel.name}
// 							</p>
// 							<div className="flex items-center">
// 								<StarRating rating={room.rating || 4} />
// 								<p className="ml-2">200+ reviews</p>
// 							</div>
// 							<div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
// 								<img
// 									src={assets.locationFilledIcon}
// 									alt="location-icon"
// 									className="w-4"
// 								/>
// 								<span>{room.hotel.address}</span>
// 							</div>
// 							<div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
// 								{room.amenities.map((item, index) => (
// 									<div
// 										key={index}
// 										className="flex items-center gap-2 px-3 py-1 rounded-lg bg-[#f5f5ff]/70"
// 									>
// 										<img
// 											src={facilityIcons[item]}
// 											alt={item}
// 											className="w-5 h-5"
// 										/>
// 										<p className="text-xs">{item}</p>
// 									</div>
// 								))}
// 							</div>
// 							<p className="text-xl font-medium text-gray-700">
// 								GH₵ {room.pricePerNight} /night
// 							</p>
// 						</div>
// 					</div>
// 				))}
// 			</div>

// 			{/* Filters */}
// 			<div className="bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 lg:ml-8">
// 				<div className="flex items-center justify-between px-5 py-2.5 border-b border-gray-300">
// 					<p className="text-base font-medium text-gray-800">
// 						FILTERS
// 					</p>
// 					<div className="text-xs cursor-pointer">
// 						<span
// 							onClick={() => setOpenFilters(!openFilters)}
// 							className="lg:hidden"
// 						>
// 							{openFilters ? "HIDE" : "SHOW"}
// 						</span>
// 						<span className="hidden lg:block">CLEAR</span>
// 					</div>
// 				</div>
// 				<div
// 					className={`${
// 						openFilters ? "h-auto" : "h-0 lg:h-auto"
// 					} overflow-hidden transition-all duration-500`}
// 				>
// 					{/* Room Types */}
// 					<div className="px-5 pt-5">
// 						<p className="font-medium text-gray-800 pb-2">
// 							Popular Filters
// 						</p>
// 						{roomTypes.map((room, index) => (
// 							<CheckBox key={index} label={room} />
// 						))}
// 					</div>
// 					{/* Price Ranges */}
// 					<div className="px-5 pt-5">
// 						<p className="font-medium text-gray-800 pb-2">
// 							Price Range
// 						</p>
// 						{priceRanges.map((range, index) => (
// 							<CheckBox key={index} label={`GH₵ ${range}`} />
// 						))}
// 					</div>
// 					{/* Sort Options */}
// 					<div className="px-5 pt-5 pb-7">
// 						<p className="font-medium text-gray-800 pb-2">
// 							Sort By
// 						</p>
// 						{sortOptions.map((option, index) => (
// 							<RadioButton key={index} label={option} />
// 						))}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default AllRooms;

import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/Appcontext";
import toast from "react-hot-toast";

const MyBookings = () => {
	const { axios, getToken, user } = useAppContext();
	const [bookings, setBookings] = useState([]);

	const fetchUserBookings = async () => {
		const token = await getToken()
		// console.log(token)
		try {
			const { data } = await axios.get("/api/bookings/user", {
				headers: { Authorization: `Bearer ${token}` },
			});

			console.log(data)

			if (data.success) {
				setBookings(data.bookings);
			} else {
				toast.error(data.message);
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	useEffect(() => {
		if (user) {
			fetchUserBookings();
		}
	}, [user]);

	return (
		<div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
			<Title
				title="My Bookings"
				subTitle="Easily manage your past, current and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks"
				align="left"
			/>
			<div className="max-w-6xl mt-8 w-full text-gray-800">
				<div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3">
					<div className="w-1/3">Hotels</div>
					<div className="w-1/3">Date & Timings</div>
					<div className="w-1/3">Payment</div>
				</div>
				{bookings.map((booking) => (
					<div
						key={booking._id}
						className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t"
					>
						{/* hotel details */}
						<div className="flex flex-col md:flex-row">
							<img
								src={booking.room.images[0]}
								alt="hotel-img"
								className="min-md:w-44 rounded shadow object-cover"
							/>
							<div className="flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4">
								<p className="font-playfair text-2xl">
									{booking.hotel.name}
									<span className="font-inter text-sm">
										({booking.room.roomType})
									</span>
								</p>
								<div className="flex items-center gap-1 text-sm text-gray-500">
									<img
										src={assets.locationIcon}
										alt="location-icon"
									/>
									<span>{booking.hotel.address}</span>
								</div>

								<div className="flex items-center gap-1 text-sm text-gray-500">
									<img
										src={assets.guestsIcon}
										alt="guests-icon"
									/>
									<span>{booking.guests}</span>
								</div>
								<p className="text-base">
									Total: GH₵ {booking.totalPrice}
								</p>
							</div>
						</div>
						{/* date and timings */}
						<div className="flex flex-row md:items-center md:gap-12 mt-3 gap-8">
							<div>
								<p>Check-In:</p>
								<p className="text-gray-500 text-sm">
									{new Date(
										booking.checkInDate
									).toDateString()}
								</p>
							</div>
							<div>
								<p>Check-Out:</p>
								<p className="text-gray-500 text-sm">
									{new Date(
										booking.checkOutDate
									).toDateString()}
								</p>
							</div>
						</div>
						{/* payment status */}
						<div className="flex flex-col items-start justify-center pt-3">
							<div className="flex items-center gap-2">
								<div
									className={`h-3 w-3 rounded-full ${
										booking.isPaid
											? "bg-green-500"
											: "bg-red-500"
									}`}
								></div>
								<p
									className={`text-sm ${
										booking.isPaid
											? "text-green-500"
											: "text-red-500"
									}`}
								>
									{booking.isPaid ? "Paid" : "Unpaid"}
								</p>
							</div>
							{!booking.isPaid && (
								<button className="px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-gray-50 transition-all cursor-pointer">
									Pay Now
								</button>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyBookings;
