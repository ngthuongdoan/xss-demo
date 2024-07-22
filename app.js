// Import necessary modules
const express = require("express");
const path = require("node:path");
const cookieParser = require("cookie-parser");

const cors = require("cors");
// Initialize express app
const app = express();
const PORT = 3000;
// Serve static files from 'public' directory
app.use(cors("*"));
app.use(cookieParser());

app.use(express.static("public"));

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle GET request for username search
app.get("/get-cookie", (req, res) => {
	// Get the cookie from the request
	const cookies = req.query.cookies;
	console.log({ cookies, path: req.path, url: req.url, req });
	// TODO: Implement logic to extract the desired cookie value
	// For demonstration, return the cookie value
	res.status(200).send();
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
