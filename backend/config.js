// config.js
require("dotenv").config(); // Import dotenv

module.exports = {
  mongoURI: process.env.MONGO_URI, // Use MONGO_URI from .env
  port: process.env.PORT || 5000,  // Default port to 5000 if not specified in .env
};
