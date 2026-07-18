const express = require("express");

const router = express.Router();

const {
  addReview,
  getReviewsByProvider,
} = require("../controllers/reviewController");

// Add Review
router.post("/", addReview);

// Get Reviews of a Provider
router.get("/:providerId", getReviewsByProvider);

module.exports = router;