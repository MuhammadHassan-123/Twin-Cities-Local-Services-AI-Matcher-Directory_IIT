import './SearchBar.css';

function SearchBar() {
  return (
    <section className="searchbar-section">
      <div className="searchbar-container">
        <h2>Find the right service near you</h2>
        <p>Browse trusted providers in Islamabad and Rawalpindi.</p>

        <form className="searchbar-form">
          <input type="text" placeholder="Search for a service or provider" />
          <button type="submit">Search</button>
        </form>
      </div>
    </section>
  );
}

export default SearchBar;
