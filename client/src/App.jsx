import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDeteails from "./pages/RoomDeteails";
import MyBookings from "./pages/MyBookings";
import HotelReg from "./components/HotelReg";

function App() {
	const isOwnerPath = useLocation().pathname.includes("owner");

	return (
		<>
			<div>
				{!isOwnerPath && <Navbar />}
				{false && <HotelReg />}
				<div className="min-h-[70vh]">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/rooms" element={<AllRooms />} />
						<Route path="/rooms/:id" element={<RoomDeteails />} />
						<Route path="/my-bookings" element={<MyBookings />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default App;
