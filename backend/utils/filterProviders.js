const filterProviders = (providers, userRequest) => {
  const query = userRequest.toLowerCase();

  return providers
    .map((provider) => {
      let score = 0;

      // Category Match
      if (
        provider.category &&
        query.includes(provider.category.toLowerCase())
      ) {
        score += 40;
      }

      // Location Match
      if (
        provider.location &&
        query.includes(provider.location.toLowerCase())
      ) {
        score += 30;
      }

      // Verified Provider
      if (provider.verified) {
        score += 15;
      }

      // Available Today
      if (
        provider.availability &&
        provider.availability.toLowerCase().includes("today")
      ) {
        score += 10;
      }

      // High Rating
      if (provider.rating >= 4.5) {
        score += provider.rating;
      }

      return {
        ...provider.toObject(),
        score,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
};

module.exports = filterProviders;