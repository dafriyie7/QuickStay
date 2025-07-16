import logo from "./logo.svg";
import searchIcon from "./searchIcon.svg";
import userIcon from "./userIcon.svg";
import calenderIcon from "./calenderIcon.svg";
import locationIcon from "./locationIcon.svg";
import starIconFilled from "./starIconFilled.svg";
import arrowIcon from "./arrowIcon.svg";
import starIconOutlined from "./starIconOutlined.svg";
import instagramIcon from "./instagramIcon.svg";
import facebookIcon from "./facebookIcon.svg";
import twitterIcon from "./twitterIcon.svg";
import linkendinIcon from "./linkendinIcon.svg";
import freeWifiIcon from "./freeWifiIcon.svg";
import freeBreakfastIcon from "./freeBreakfastIcon.svg";
import roomServiceIcon from "./roomServiceIcon.svg";
import mountainIcon from "./mountainIcon.svg";
import poolIcon from "./poolIcon.svg";
import homeIcon from "./homeIcon.svg";
import closeIcon from "./closeIcon.svg";
import locationFilledIcon from "./locationFilledIcon.svg";
import heartIcon from "./heartIcon.svg";
import badgeIcon from "./badgeIcon.svg";
import menuIcon from "./menuIcon.svg";
import closeMenu from "./closeMenu.svg";
import guestsIcon from "./guestsIcon.svg";
import roomImg1 from "./roomImg1.png";
import roomImg2 from "./roomImg2.png";
import roomImg3 from "./roomImg3.png";
import roomImg4 from "./roomImg4.png";
import regImage from "./regImage.png";
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";

export const assets = {
	logo,
	searchIcon,
	userIcon,
	calenderIcon,
	locationIcon,
	starIconFilled,
	arrowIcon,
	starIconOutlined,
	instagramIcon,
	facebookIcon,
	twitterIcon,
	linkendinIcon,
	freeWifiIcon,
	freeBreakfastIcon,
	roomServiceIcon,
	mountainIcon,
	poolIcon,
	closeIcon,
	homeIcon,
	locationFilledIcon,
	heartIcon,
	badgeIcon,
	menuIcon,
	closeMenu,
	guestsIcon,
	regImage,
	addIcon,
	dashboardIcon,
	listIcon,
	uploadArea,
	totalBookingIcon,
	totalRevenueIcon,
};

// Cities – Ghana edition
export const cities = ["Accra", "Kumasi", "Cape Coast", "Tamale"];

/* ------------------------------------------------------------------
   Exclusive Offers Dummy Data
   ------------------------------------------------------------------*/
export const exclusiveOffers = [
	{
		_id: 1,
		title: "Coastal Weekend Escape",
		description:
			"Stay two nights in a beachfront resort at Cape Coast and enjoy complimentary breakfast for two.",
		priceOff: 25,
		expiryDate: "Aug 31",
		image: exclusiveOfferCardImg1,
	},
	{
		_id: 2,
		title: "Ashanti Cultural Getaway",
		description:
			"Explore the rich heritage of Kumasi with a guided palace tour and kente‑weaving workshop.",
		priceOff: 20,
		expiryDate: "Sep 20",
		image: exclusiveOfferCardImg2,
	},
	{
		_id: 3,
		title: "Savannah Safari Package",
		description:
			"Experience a two‑day safari in Mole National Park with full‑board accommodation.",
		priceOff: 30,
		expiryDate: "Sep 25",
		image: exclusiveOfferCardImg3,
	},
];

/* ------------------------------------------------------------------
   Testimonials Dummy Data
   ------------------------------------------------------------------*/
export const testimonials = [
	{
		id: 1,
		name: "Ama Ofori",
		address: "Accra, Ghana",
		image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200",
		rating: 5,
		review: "QuickStay helped me find a perfect beachfront hotel in Cape Coast. The service was smooth and stress‑free!",
	},
	{
		id: 2,
		name: "Kofi Mensah",
		address: "Kumasi, Ghana",
		image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200",
		rating: 4,
		review: "The booking process was straightforward and the hotel selection in Kumasi was fantastic.",
	},
	{
		id: 3,
		name: "Naa Adjeley",
		address: "Tamale, Ghana",
		image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200",
		rating: 5,
		review: "I loved how easy it was to discover lodges near Mole National Park. Highly recommended!",
	},
];

/* ------------------------------------------------------------------
   Facility Icons (unchanged – still map to the same imported assets)
   ------------------------------------------------------------------*/
export const facilityIcons = {
	"Free WiFi": assets.freeWifiIcon,
	"Free Breakfast": assets.freeBreakfastIcon,
	"Room Service": assets.roomServiceIcon,
	"Mountain View": assets.mountainIcon,
	"Pool Access": assets.poolIcon,
};

/* ------------------------------------------------------------------
   Room Details Page (unchanged copy)
   ------------------------------------------------------------------*/
export const roomCommonData = [
	{
		icon: assets.homeIcon,
		title: "Clean & Safe Stay",
		description: "A well‑maintained and hygienic space just for you.",
	},
	{
		icon: assets.badgeIcon,
		title: "Enhanced Cleaning",
		description: "This host follows Staybnb’s strict cleaning standards.",
	},
	{
		icon: assets.locationFilledIcon,
		title: "Excellent Location",
		description: "90% of guests rated the location 5 stars.",
	},
	{
		icon: assets.heartIcon,
		title: "Smooth Check‑In",
		description: "100% of guests gave check‑in a 5‑star rating.",
	},
];

/* ------------------------------------------------------------------
   User Dummy Data
   ------------------------------------------------------------------*/
export const userDummyData = {
	_id: "user_ghana1",
	username: "Akwaaba Hospitality",
	email: "info@akwaaba.com",
	image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=200",
	role: "hotelOwner",
	createdAt: "2025-03-25T09:29:16.367Z",
	updatedAt: "2025-04-10T06:34:48.719Z",
	__v: 1,
	recentSearchedCities: ["Accra"],
};

/* ------------------------------------------------------------------
   Hotel Dummy Data
   ------------------------------------------------------------------*/
export const hotelDummyData = {
	_id: "ghanaHotel1",
	name: "Labadi Beach Hotel",
	address: "No. 1 La Bypass, Accra",
	contact: "+233 302 772 444",
	owner: userDummyData,
	city: "Accra",
	createdAt: "2025-04-10T06:22:11.663Z",
	updatedAt: "2025-04-10T06:22:11.663Z",
	__v: 0,
};

/* ------------------------------------------------------------------
   Rooms Dummy Data
   ------------------------------------------------------------------*/
export const roomsDummyData = [
	{
		_id: "room1",
		hotel: hotelDummyData,
		roomType: "Deluxe King",
		pricePerNight: 2500,
		amenities: ["Free WiFi", "Free Breakfast", "Pool Access"],
		images: [roomImg1, roomImg2, roomImg3, roomImg4],
		isAvailable: true,
		createdAt: "2025-04-10T06:26:04.013Z",
		updatedAt: "2025-04-10T06:26:04.013Z",
		__v: 0,
	},
	{
		_id: "room2",
		hotel: hotelDummyData,
		roomType: "Deluxe Twin",
		pricePerNight: 2000,
		amenities: ["Room Service", "Mountain View", "Pool Access"],
		images: [roomImg2, roomImg3, roomImg4, roomImg1],
		isAvailable: true,
		createdAt: "2025-04-10T06:25:22.593Z",
		updatedAt: "2025-04-10T06:25:22.593Z",
		__v: 0,
	},
	{
		_id: "room3",
		hotel: hotelDummyData,
		roomType: "Standard Queen",
		pricePerNight: 1500,
		amenities: ["Free WiFi", "Free Breakfast", "Room Service"],
		images: [roomImg3, roomImg4, roomImg1, roomImg2],
		isAvailable: true,
		createdAt: "2025-04-10T06:24:06.285Z",
		updatedAt: "2025-04-10T06:24:06.285Z",
		__v: 0,
	},
	{
		_id: "room4",
		hotel: hotelDummyData,
		roomType: "Standard Single",
		pricePerNight: 1000,
		amenities: ["Free WiFi", "Room Service", "Pool Access"],
		images: [roomImg4, roomImg1, roomImg2, roomImg3],
		isAvailable: true,
		createdAt: "2025-04-10T06:23:20.252Z",
		updatedAt: "2025-04-10T06:23:20.252Z",
		__v: 0,
	},
];

/* ------------------------------------------------------------------
   User Bookings Dummy Data
   ------------------------------------------------------------------*/
export const userBookingsDummyData = [
	{
		_id: "booking1",
		user: userDummyData,
		room: roomsDummyData[1], // Deluxe Twin
		hotel: hotelDummyData,
		checkInDate: "2025-04-30T00:00:00.000Z",
		checkOutDate: "2025-05-01T00:00:00.000Z",
		totalPrice: 2000,
		guests: 1,
		status: "pending",
		paymentMethod: "Stripe",
		isPaid: true,
		createdAt: "2025-04-10T06:42:01.529Z",
		updatedAt: "2025-04-10T06:43:54.520Z",
		__v: 0,
	},
	{
		_id: "booking2",
		user: userDummyData,
		room: roomsDummyData[0], // Deluxe King
		hotel: hotelDummyData,
		checkInDate: "2025-04-27T00:00:00.000Z",
		checkOutDate: "2025-04-28T00:00:00.000Z",
		totalPrice: 2500,
		guests: 1,
		status: "pending",
		paymentMethod: "Pay At Hotel",
		isPaid: false,
		createdAt: "2025-04-10T06:41:45.873Z",
		updatedAt: "2025-04-10T06:41:45.873Z",
		__v: 0,
	},
	{
		_id: "booking3",
		user: userDummyData,
		room: roomsDummyData[3], // Standard Single
		hotel: hotelDummyData,
		checkInDate: "2025-04-11T00:00:00.000Z",
		checkOutDate: "2025-04-12T00:00:00.000Z",
		totalPrice: 1000,
		guests: 1,
		status: "pending",
		paymentMethod: "Pay At Hotel",
		isPaid: false,
		createdAt: "2025-04-10T06:41:20.501Z",
		updatedAt: "2025-04-10T06:41:20.501Z",
		__v: 0,
	},
];

/* ------------------------------------------------------------------
   Dashboard Dummy Data
   ------------------------------------------------------------------*/
export const dashboardDummyData = {
	totalBookings: 3,
	totalRevenue: 5500, // 2500 + 2000 + 1000
	bookings: userBookingsDummyData,
};

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/
