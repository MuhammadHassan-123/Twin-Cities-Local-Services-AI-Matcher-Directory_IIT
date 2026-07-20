const Provider = require("../models/Provider");

const filterProviders = require("../utils/filterProviders");
const { getRecommendation } = require("../services/groqService");

const recommendProvider = async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({
        success: false,
        message: "Please enter your request.",
      });
    }

    // Get all providers
    const providers = await Provider.find();

    // Apply filtering
    const filteredProviders = filterProviders(providers, query);

    if (filteredProviders.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No matching providers found.",
      });
    }

    // Get AI Recommendation
    const aiResult = await getRecommendation(query, filteredProviders);

    // Find provider by returned ID
    const recommendedProvider = filteredProviders.find(
      (provider) =>
        provider._id.toString() === aiResult.recommendedProviderId
    );

    if (!recommendedProvider) {
      return res.status(404).json({
        success: false,
        message: "AI could not recommend any provider.",
      });
    }

    res.status(200).json({
      success: true,
      provider: recommendedProvider,
      reason: aiResult.reason,
    });

  } catch (error) {
    console.error("Recommendation Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  recommendProvider,
};