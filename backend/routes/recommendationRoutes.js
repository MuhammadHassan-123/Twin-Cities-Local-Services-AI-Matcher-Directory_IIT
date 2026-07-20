const express = require("express");

const router = express.Router();

const {
  recommendProvider,
} = require("../controllers/recommendationController");

// AI Recommendation
router.post("/", recommendProvider);

module.exports = router;