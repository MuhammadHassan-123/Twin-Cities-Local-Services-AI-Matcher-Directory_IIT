import { Link } from "react-router-dom";
import "./ProviderCard.css";

function ProviderCard({ provider }) {
  return (
    <div className="provider-card">

      <div className="card-top">

        <span className="category">
          {provider.category}
        </span>

        {provider.verified && (
          <span className="verified">
            ✔ Verified
          </span>
        )}

      </div>

      <h2>{provider.name}</h2>

      <div className="provider-info">

        <p>
          📍 {provider.location}
        </p>

        <p>
          ⭐ {provider.rating} / 5
        </p>

        <p className="price">
          Starting From <strong>Rs. {provider.price}</strong>
        </p>

      </div>

      <div className="card-buttons">

        <a
          href={`https://wa.me/92${provider.phone.slice(1)}`}
          target="_blank"
          rel="noreferrer"
        >
          <button className="contact-btn">
            WhatsApp
          </button>
        </a>

        <Link to={`/provider/${provider.id}`}>
          <button className="details-btn">
            View Details
          </button>
        </Link>

      </div>

    </div>
  );
}

export default ProviderCard;