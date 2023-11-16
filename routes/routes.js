const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController.js");

// API Routes
router.get("/api/minimum-secure", appController.minimumSecure);
router.get("/api/latest-releases", appController.latestReleases);

module.exports = router;
