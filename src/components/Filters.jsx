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

      <div className="filter-group">

        <label>Search</label>

        <input
          type="text"
          placeholder="Search provider..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

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
          <option value="Painter">Painter</option>
          <option value="AC Technician">AC Technician</option>
          <option value="Computer Repair">Computer Repair</option>
          <option value="Locksmith">Locksmith</option>
        </select>

      </div>

      <div className="filter-group">

        <label>Location</label>

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="All">All Locations</option>
          <option value="G-9, Islamabad">G-9 Islamabad</option>
          <option value="F-10, Islamabad">F-10 Islamabad</option>
          <option value="I-8, Islamabad">I-8 Islamabad</option>
          <option value="Blue Area">Blue Area</option>
          <option value="Bahria Town, Rawalpindi">
            Bahria Town
          </option>
          <option value="DHA Phase 2">
            DHA Phase 2
          </option>
          <option value="Gulberg Greens">
            Gulberg Greens
          </option>
          <option value="Saddar, Rawalpindi">
            Saddar
          </option>
        </select>

      </div>

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