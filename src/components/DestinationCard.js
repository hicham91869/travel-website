import { Link } from "react-router-dom";

export default function Destination({ place, onFavorite, isFav }) {
  return (
    <div className="col-md-3 mb-4">

      <div className="card travel-card h-100">

        <div className="img-wrapper">
          <img src={place.image} alt={place.name} />
        </div>

        <div className="card-body">

          <h5 className="fw-bold">{place.name}</h5>

          <p className="text-muted small">
            {place.country}
          </p>

          <p className="fw-bold text-danger">
            ${place.price} / night
          </p>

          <div className="d-flex justify-content-between">

            <Link
              to={`/booking/${place.name}`}
              className="btn btn-sm btn-dark"
            >
              Book
            </Link>

            <button
              onClick={() => onFavorite(place)}
              className="btn btn-sm btn-outline-danger"
            >
              {isFav ? "❤️" : "🤍"}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}