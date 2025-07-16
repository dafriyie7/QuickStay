// GET /api/user
export const getUserData = async (req, res) => {
	try {
		const role = req.user.role;
		const recentSearchedCities = req.user.recentSearchedCities; // corrected key
		res.json({ success: true, role, recentSearchedCities });
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};

// store user recent searched cities
export const storerecentSearchedCities = async (req, res) => {
	try {
		const { recentSearchedCity } = req.body;
		const user = req.user; // no need for await

		// Ensure recentSearchedCities exists as an array
		if (!Array.isArray(user.recentSearchedCities)) {
			user.recentSearchedCities = [];
		}

		// Push or rotate cities
		if (user.recentSearchedCities.length < 3) {
			user.recentSearchedCities.push(recentSearchedCity);
		} else {
			user.recentSearchedCities.shift(); // remove oldest
			user.recentSearchedCities.push(recentSearchedCity);
		}

		await user.save();

		res.json({ success: true, message: "City added" });
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
};
