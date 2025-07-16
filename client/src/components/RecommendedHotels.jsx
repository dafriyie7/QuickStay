import HotelCard from "./HotelCard";
import Title from "./Title";
import { useAppContext } from "../context/Appcontext";
import { useMemo } from "react";

const RecommendedHotels = () => {
	const { rooms, searchedCities } = useAppContext();

	const recommended = useMemo(() => {
		if (!Array.isArray(rooms) || !Array.isArray(searchedCities)) return [];

		return rooms.filter(
			(room) =>
				room?.hotel?.city && searchedCities.includes(room.hotel.city)
		);
	}, [rooms, searchedCities]);

	if (!Array.isArray(recommended) || recommended.length === 0) return null;

	return (
		<div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
			<Title
				title="Recommended Hotels"
				subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences."
			/>
			<div className="flex flex-wrap items-center justify-center gap-6 mt-20">
				{recommended.slice(0, 4).map((room, index) => (
					<HotelCard
						key={room._id || index}
						room={room}
						index={index}
					/>
				))}
			</div>
		</div>
	);
};

export default RecommendedHotels;
