import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
import { ClerkProvider } from "@clerk/clerk-react";
import { AppProvider } from "./context/Appcontext.jsx";

if (!PUBLISHABLE_KEY) {
	throw new Error("Add your Clerk Publishable Key to the .env file");
}

createRoot(document.getElementById("root")).render(
	<ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
		<BrowserRouter>
			<AppProvider>
				<App />
			</AppProvider>
		</BrowserRouter>
	</ClerkProvider>
);
