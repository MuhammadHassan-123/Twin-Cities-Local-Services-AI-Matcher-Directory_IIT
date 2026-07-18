import "./Hero.css";
import { Link } from "react-router-dom";
import { FaSearch, FaUsers, FaMapMarkerAlt, FaStar } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <span className="hero-badge">
          Trusted Local Services in Islamabad & Rawalpindi
        </span>

        <h1>
          Find Trusted
          <br />
          Local Service <span>Providers</span>
        </h1>

        <p>
          Discover verified plumbers, electricians, tutors,
          cleaners and many more with transparent pricing,
          verified reviews and quick contact through WhatsApp.
        </p>

        <div className="hero-search">
          <input
            type="text"
            placeholder="Search plumbers, tutors, electricians..."
          />

          <Link to="/providers">
            <button className="search-btn">
              <FaSearch />
              Search Providers
            </button>
          </Link>
        </div>

        <div className="hero-stats">

          <div className="stat-card">
            <FaUsers />
            <h3>500+</h3>
            <p>Verified Providers</p>
          </div>

          <div className="stat-card">
            <FaMapMarkerAlt />
            <h3>50+</h3>
            <p>Areas Covered</p>
          </div>

          <div className="stat-card">
            <FaStar />
            <h3>4.9</h3>
            <p>Average Rating</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;