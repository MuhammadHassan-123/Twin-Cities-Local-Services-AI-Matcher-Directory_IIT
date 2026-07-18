const Provider = require("../models/Provider");

// Get All Providers with Search & Filters
const getProviders = async (req, res) => {
  try {
    const { search, category, area, rating } = req.query;

    let filter = {};

    // Search by name or category
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
      ];
    }

    // Filter by category
    if (category) {
      filter.category = category;
    }

    // Filter by area
    if (area) {
      filter.area = area;
    }

    // Filter by minimum rating
    if (rating) {
      filter.rating = { $gte: Number(rating) };
    }

    const providers = await Provider.find(filter);

    res.status(200).json(providers);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Single Provider
const getProviderById = async (req, res) => {
  try {
    const provider = await Provider.findById(req.params.id);

    if (!provider) {
      return res.status(404).json({
        message: "Provider not found",
      });
    }

    res.status(200).json(provider);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getProviders,
  getProviderById,
};