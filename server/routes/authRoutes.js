const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const { test } = require('../controllers/authController');

const router = express.Router(); // Create an instance of the Express Router

// Middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
);

// Route
router.get('/', test); // Assuming `test` is a function defined in '../controllers/authController'

module.exports = router;
