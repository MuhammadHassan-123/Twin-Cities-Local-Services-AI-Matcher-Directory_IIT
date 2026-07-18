const Review = require("../models/Review");

// Add Review
const addReview = async (req, res) => {
  try {
    const { provider, name, rating, comment } = req.body;

    const review = await Review.create({
      provider,
      name,
      rating,
      comment,
    });

    res.status(201).json(review);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Reviews By Provider
const getReviewsByProvider = async (req, res) => {
  try {
    const reviews = await Review.find({
      provider: req.params.providerId,
    }).sort({ createdAt: -1 });

    res.status(200).json(reviews);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addReview,
  getReviewsByProvider,
};