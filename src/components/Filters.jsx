import "./Filters.css";

function Filters({
  search,
  setSearch,
  category,
  setCategory,
  location,
  setLocation,
  rating,
  setRating,
}) {
  return (
    <aside className="filters">
      <h2>Filters</h2>

      {/* Search */}
      <div className="filter-group">
        <label>Search</label>

        <input
          type="text"
          placeholder="Search by name or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Category */}
      <div className="filter-group">
        <label>Category</label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Plumber">Plumber</option>
          <option value="Electrician">Electrician</option>
          <option value="Tutor">Tutor</option>
          <option value="Cleaner">Cleaner</option>
          <option value="AC Technician">AC Technician</option>
        </select>
      </div>

      {/* Area */}
      <div className="filter-group">
        <label>Area</label>

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="All">All Areas</option>
          <option value="G-9 Islamabad">G-9 Islamabad</option>
          <option value="F-10 Islamabad">F-10 Islamabad</option>
          <option value="G-11 Islamabad">G-11 Islamabad</option>
          <option value="Bahria Town">Bahria Town</option>
          <option value="DHA Phase 2">DHA Phase 2</option>
        </select>
      </div>

      {/* Rating */}
      <div className="filter-group">
        <label>Minimum Rating</label>

        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="All">All Ratings</option>
          <option value="4.5">4.5+</option>
          <option value="4.7">4.7+</option>
          <option value="4.8">4.8+</option>
        </select>
      </div>
    </aside>
  );
}

export default Filters;