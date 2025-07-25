import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails"; // ✅ fixed typo
import MyBookings from "./pages/MyBookings";
import Layout from "./pages/hotelOwner/Layout";
import Dashboard from "./pages/hotelOwner/Dashboard";
import AddRoom from "./pages/hotelOwner/AddRoom";
import ListRoom from "./pages/hotelOwner/ListRoom";
import {Toaster} from "react-hot-toast"
import { useAppContext } from "./context/Appcontext";
import HotelReg from "./components/HotelReg"

function App() {
	const { pathname } = useLocation();
	const isOwnerPath = pathname.includes("/owner");
	const {showHotelReg} = useAppContext()

	return (
		<div>
			<Toaster />
			{!isOwnerPath && <Navbar />}
			{showHotelReg && <HotelReg />}

			<div className="min-h-[70vh]">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/rooms" element={<AllRooms />} />
					<Route path="/rooms/:id" element={<RoomDetails />} />
					<Route path="/my-bookings" element={<MyBookings />} />
					<Route path="/owner" element={<Layout />}>
						<Route index element={<Dashboard />} />
						<Route path="add-room" element={<AddRoom />} />
						<Route path="list-room" element={<ListRoom />} />
					</Route>
				</Routes>
			</div>

			{!isOwnerPath && <Footer />}
		</div>
	);
}

export default App;
