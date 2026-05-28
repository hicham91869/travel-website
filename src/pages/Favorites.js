import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("fav")) || [];
    setFavorites(saved);
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter((item) => item.id !== id);
    setFavorites(updated);
    localStorage.setItem("fav", JSON.stringify(updated));
  };

  if (favorites.length === 0) {
    return (
      <div className="text-center mt-5">
        <h3>No favorites yet ❤️</h3>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <h2 className="fw-bold mb-4">Your Favorites ❤️</h2>

      <div className="row">

        {favorites.map((place) => (
          <div className="col-md-3 mb-4" key={place.id}>

            <div className="travel-card">

              <div className="img-wrapper">
                <img src={place.image} alt={place.name} />
              </div>

              <div className="card-body">

                <h5 className="fw-bold">{place.name}</h5>

                <p className="text-muted small">{place.country}</p>

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
                    onClick={() => removeFavorite(place.id)}
                    className="btn btn-sm btn-outline-danger"
                  >
                    Remove
                  </button>

                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}