// server.js
const express = require("express");
const connectDB = require("./Config/db");

// Initialize express app
const app = express();

// Connect to database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/userRoutes"));

// Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Define PORT
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
