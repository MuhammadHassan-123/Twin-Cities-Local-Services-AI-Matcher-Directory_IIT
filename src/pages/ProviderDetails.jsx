import { useState, useEffect } from "react";
import { FaWhatsapp, FaArrowLeft } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ReviewForm from "../components/ReviewForm";
import "./ProviderDetails.css";

function ProviderDetails() {
  const { id } = useParams();

  const [provider, setProvider] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProvider = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/providers/${id}`
      );

      setProvider(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchReviews = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/reviews/${id}`
      );

      setReviews(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      await Promise.all([
        fetchProvider(),
        fetchReviews(),
      ]);

      setLoading(false);
    };

    loadData();
  }, [id]);

  if (loading) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        Loading Provider...
      </h2>
    );
  }

  if (!provider) {
    return (
      <div className="provider-details">

        <h2>Provider Not Found</h2>

        <Link to="/providers">
          <button>
            Back to Providers
          </button>
        </Link>

      </div>
    );
  }

  const message = `Hello ${provider.name},

I found your profile on Twin Cities Local Services.

I need ${provider.category} services in ${provider.area}.

Please let me know your availability.

Thank you.`;

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
            <strong>Area:</strong> {provider.area}
          </p>

          <p>
            <strong>Experience:</strong> {provider.experience}
          </p>

          <p>
            <strong>Rating:</strong> ⭐ {provider.rating}
          </p>

          <p>
            <strong>Reviews:</strong> {provider.reviews}
          </p>

          <p>
            <strong>Starting Price:</strong> Rs. {provider.price}
          </p>

          <p>
            <strong>Availability:</strong> {provider.availability}
          </p>

          <p>
            <strong>Response Time:</strong> {provider.responseTime}
          </p>

          <p>
            <strong>Phone:</strong> {provider.phone}
          </p>

          <p>
            <strong>Description:</strong> {provider.description}
          </p>

        </div>

        <div className="details-buttons">

          <a
            href={`https://wa.me/${provider.whatsapp}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noreferrer"
          >
           <button className="whatsapp-btn">
  <FaWhatsapp />
  Contact on WhatsApp
</button>
          </a>

          <Link to="/providers">
            <button className="back-btn">
  <FaArrowLeft />
  Back to Providers
</button>
          </Link>

        </div>

        <hr />

        <ReviewForm
          providerId={provider._id}
          onReviewAdded={fetchReviews}
        />

        <hr />

        <h2>Customer Reviews</h2>

        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((review) => (
            <div
              key={review._id}
              className="review-card"
            >
              <h4>{review.name}</h4>

              <p>
                ⭐ {review.rating}/5
              </p>

              <p>{review.comment}</p>

              <hr />
            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default ProviderDetails;