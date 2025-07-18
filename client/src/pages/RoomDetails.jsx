import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, facilityIcons, roomCommonData } from "../assets/assets";
import StarRating from "../components/StarRating";
import { useAppContext } from "../context/Appcontext";
import toast from "react-hot-toast";

const RoomDetails = () => {
	const { id } = useParams();
	const { rooms, getToken, axios, navigate } = useAppContext();
	const [room, setRoom] = useState(null);
	const [mainImage, setMainImage] = useState(null);
	const [checkInDate, setCheckInDate] = useState(null);
	const [checkOutDate, setCheckOutDate] = useState(null);
	const [guests, setGuests] = useState(1);
	const [isAvailable, setIsAvailable] = useState(false);



	// check room availability
	const checkAvailability = async (token) => {
		try {
			// check if check-in date is greater than checkout date
			if (checkInDate >= checkOutDate) {
				toast.error("check-in date should be less than check-out date");
				return;
			}
			const { data } = await axios.post(
				"/api/bookings/check-availability",
				{ room: id, checkInDate, checkOutDate },
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			if (data.success) {
				if (data.isAvailable) {
					setIsAvailable(true);
					toast.success("room is available");
				} else {
					setIsAvailable(false);
					toast.error("room is not available");
				}
			} else {
				toast.error(data.message);
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	// submit handler to check availability & book the room
	const onSubmitHandler = async (e) => {
		try {
			const token = await getToken();
			if (!token) {
				toast.error("You must be logged in to make a booking.");
				return;
			}

			e.preventDefault();
			if (!isAvailable) {
				return checkAvailability(token);
			} else {
				const { data } = await axios.post(
					"/api/bookings/book",
					{
						room: id,
						checkInDate,
						checkOutDate,
						guests,
						paymentMethod: "Pay At Hotel",
					},
					{
						headers: {
							Authorization: `Bearer ${token}`
						},
					}
				);
				if (data.success) {
					toast.success(data.message)
					navigate("/my-bookings")
					scrollTo(0, 0)
				} else {
					toast.error(data.message)
				}
			}
		} catch (error) {
			toast.error(error.message)
		}
	};

	useEffect(() => {
		const foundRoom = rooms.find((room) => room._id === id);
		if (foundRoom) {
			setRoom(foundRoom);
			setMainImage(foundRoom.images[0]);
		}
	}, [id,rooms]);

	if (!room) return null;

	return (
		<div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
			{/* Header */}
			<div className="flex flex-col md:flex-row items-start md:items-center gap-2">
				<h1 className="text-3xl md:text-4xl font-playfair">
					{room.hotel.name}{" "}
					<span className="font-inter text-sm">
						({room.roomType})
					</span>
				</h1>
				<p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">
					20% OFF
				</p>
			</div>

			{/* Rating */}
			<div className="flex items-center gap-1 mt-2">
				<StarRating rating={room.rating || 4} />
				<p className="ml-2">200+ reviews</p>
			</div>

			{/* Address */}
			<div className="flex items-center gap-2 text-gray-500 mt-2">
				<img
					src={assets.locationIcon}
					alt="location-icon"
					className="w-4 h-4"
				/>
				<span>{room.hotel.address}</span>
			</div>

			{/* Room Images */}
			<div className="flex flex-col lg:flex-row mt-6 gap-6">
				<div className="lg:w-1/2 w-full">
					<img
						src={mainImage}
						alt="room-image"
						className="w-full rounded-xl shadow-lg object-cover"
					/>
				</div>
				<div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
					{room.images.map((image, index) => (
						<img
							key={index}
							src={image}
							alt="room-thumb"
							onClick={() => setMainImage(image)}
							className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${
								mainImage === image &&
								" outline-3 outline-orange-500"
							}`}
						/>
					))}
				</div>
			</div>

			{/* Highlights + Price */}
			<div className="flex flex-col md:flex-row md:justify-between mt-10">
				<div className="flex flex-col">
					<h1 className="text-3xl md:text-4xl font-playfair">
						Experience Luxury Like Never Before
					</h1>
					<div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
						{room.amenities.map((item, index) => (
							<div
								key={index}
								className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
							>
								<img
									src={facilityIcons[item]}
									alt={item}
									className="w-5 h-5"
								/>
								<p className="text-xs">{item}</p>
							</div>
						))}
					</div>
				</div>
				<p className="text-2xl font-medium">
					GH₵ {room.pricePerNight}/night
				</p>
			</div>

			{/* Booking Form */}
			<form onSubmit={onSubmitHandler} className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl">
				<div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500">
					<div className="flex flex-col">
						<label htmlFor="checkInDate" className="font-medium">
							Check-In
						</label>
						<input
							type="date"
							id="checkInDate"
							onChange={(e) => setCheckInDate(e.target.value)}
							min={new Date().toISOString().split("T")[0]}
							className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
							required
						/>
					</div>

					<div className="w-px h-15 bg-gray-300/70 max-md:hidden" />

					<div className="flex flex-col">
						<label htmlFor="checkOutDate" className="font-medium">
							Check-Out
						</label>
						<input
							type="date"
							id="checkOutDate"
							onChange={(e) => setCheckOutDate(e.target.value)}
							min={checkInDate}
							disabled={!checkInDate}
							className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
							required
						/>
					</div>

					<div className="w-px h-15 bg-gray-300/70 max-md:hidden" />

					<div className="flex flex-col">
						<label htmlFor="guests" className="font-medium">
							Guests
						</label>
						<input
							type="number"
							id="guests"
							onChange={(e) => setGuests(e.target.value)}
							value={guests}
							placeholder="1"
							className="max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
							required
						/>
					</div>
				</div>

				<button
					type="submit"
					className="bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-52 py-3 md:py-4 text-base cursor-pointer"
				>
					{isAvailable ? "Book Now" : "Check Availability"}
				</button>
			</form>

			{/* Specifications */}
			<div className="mt-20 space-y-4">
				{roomCommonData.map((spec, index) => (
					<div key={index} className="flex items-start gap-2">
						<img
							src={spec.icon}
							alt={`${spec.title}-icon`}
							className="w-6.5"
						/>
						<div>
							<p className="text-base">{spec.title}</p>
							<p className="text-gray-500">{spec.description}</p>
						</div>
					</div>
				))}
			</div>

			{/* Description */}
			<div className="max-w-3xl border-y border-gray-300 my-14 py-10 text-gray-500">
				<p>
					Guests will be allocated on the ground floor according to
					availability. You get a comfortable two-bedroom apartment
					that has a true city feeling. The price quoted is for two
					guests. At the guest slot, please mark the number of guests
					to get the exact price for groups.
				</p>
			</div>

			{/* Host Section */}
			<div className="flex flex-col items-start gap-4">
				<div className="flex gap-4 items-center">
					<img
						src={room.hotel.owner?.image}
						alt="host"
						className="h-14 w-14 md:h-18 md:w-18 rounded-full object-cover"
					/>
					<div>
						<p className="text-lg md:text-xl">
							Hosted by {room.hotel.name}
						</p>
						<div className="flex items-center mt-1">
							<StarRating />
							<p className="ml-2">200+ reviews</p>
						</div>
					</div>
				</div>
				<button className="px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer">
					Contact Now
				</button>
			</div>
		</div>
	);
};

export default RoomDetails;
