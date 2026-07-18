import { useState } from "react";
import providers from "../data/providers";
import ProviderCard from "../components/ProviderCard";
import Filters from "../components/Filters";
import "./Providers.css";

function Providers() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("All");
  const [rating, setRating] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  let filteredProviders = providers.filter((provider) => {
    const matchesSearch =
      provider.name.toLowerCase().includes(search.toLowerCase()) ||
      provider.category.toLowerCase().includes(search.toLowerCase()) ||
      provider.location.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || provider.category === category;

    const matchesLocation =
      location === "All" || provider.location === location;

    const matchesRating =
      rating === "All" || provider.rating >= Number(rating);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesLocation &&
      matchesRating
    );
  });

  if (sortBy === "rating") {
    filteredProviders.sort((a, b) => b.rating - a.rating);
  }

  if (sortBy === "lowPrice") {
    filteredProviders.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "highPrice") {
    filteredProviders.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "name") {
    filteredProviders.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  return (
    <div className="providers-page">

      <div className="providers-header">
        <h1>Service Providers</h1>

        <p>
          Find trusted and verified professionals in Islamabad &
          Rawalpindi.
        </p>
      </div>

      <div className="providers-layout">

        <Filters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          location={location}
          setLocation={setLocation}
          rating={rating}
          setRating={setRating}
        />

        <div className="providers-content">

          <div className="results-header">

            <h3>
              {filteredProviders.length} Providers Found
            </h3>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">
                Sort By
              </option>

              <option value="rating">
                Highest Rating
              </option>

              <option value="lowPrice">
                Lowest Price
              </option>

              <option value="highPrice">
                Highest Price
              </option>

              <option value="name">
                A - Z
              </option>

            </select>

          </div>

          <div className="providers-grid">

            {filteredProviders.length > 0 ? (

              filteredProviders.map((provider) => (

                <ProviderCard
                  key={provider.id}
                  provider={provider}
                />

              ))

            ) : (

              <h2 className="no-result">
                No providers found.
              </h2>

            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Providers;