import { useParams, Link } from "react-router-dom";
import providers from "../data/providers";
import "./ProviderDetails.css";

function ProviderDetails() {
  const { id } = useParams();

  const provider = providers.find(
    (item) => item.id === Number(id)
  );

  if (!provider) {
    return (
      <div className="provider-details">
        <h2>Provider Not Found</h2>

        <Link to="/providers">
          <button>Back to Providers</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="provider-details">

      <div className="details-card">

        <div className="details-header">

          <h1>{provider.name}</h1>

          {provider.verified && (
            <span className="verified">
              ✔ Verified
            </span>
          )}

        </div>

        <hr />

        <div className="details-body">

          <p>
            <strong>Category:</strong> {provider.category}
          </p>

          <p>
            <strong>Location:</strong> {provider.location}
          </p>

          <p>
            <strong>Rating:</strong> ⭐ {provider.rating}
          </p>

          <p>
            <strong>Starting Price:</strong> Rs. {provider.price}
          </p>

          <p>
            <strong>Phone:</strong> {provider.phone}
          </p>

          <p>
            <strong>Availability:</strong> Available Today
          </p>

          <p>
            <strong>Description:</strong>
            Professional and trusted {provider.category.toLowerCase()} with
            experience serving customers across Islamabad &
            Rawalpindi.
          </p>

        </div>

        <div className="details-buttons">

          <a
            href={`https://wa.me/92${provider.phone.slice(1)}`}
            target="_blank"
            rel="noreferrer"
          >
            <button className="whatsapp-btn">
              Contact on WhatsApp
            </button>
          </a>

          <Link to="/providers">
            <button className="back-btn">
              Back to Providers
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ProviderDetails;