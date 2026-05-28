import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const placesData = [
  { id: 1, name: "Paris", price: 120, country: "France", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34" },
  { id: 2, name: "Dubai", price: 200, country: "UAE", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c" },
  { id: 3, name: "Tokyo", price: 180, country: "Japan", image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26" },
  { id: 4, name: "New York", price: 210, country: "USA", image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59" },
  { id: 5, name: "Rome", price: 140, country: "Italy", image: "https://images.unsplash.com/photo-1529260830199-42c24126f198" },
  { id: 6, name: "London", price: 170, country: "UK", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad" },
  { id: 7, name: "Maldives", price: 300, country: "Maldives", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { id: 8, name: "Bali", price: 160, country: "Indonesia", image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21" },
];

export default function Home() {
  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("All");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [favorites, setFavorites] = useState([]);

  const location = useLocation();

  useEffect(() => {
    setPlaces(placesData);
    const saved = JSON.parse(localStorage.getItem("fav")) || [];
    setFavorites(saved);
  }, []);

  // ✅ SCROLL SYSTEM (IDEA 1)
  useEffect(() => {
    if (location.hash === "#listings") {
      const el = document.getElementById("listings");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const filtered = places.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (country === "All" || p.country === country) &&
      p.price <= maxPrice
    );
  });

  const toggleFavorite = (place) => {
    let updated = [...favorites];
    const exists = updated.find((f) => f.id === place.id);

    if (exists) {
      updated = updated.filter((f) => f.id !== place.id);
    } else {
      updated.push(place);
    }

    setFavorites(updated);
    localStorage.setItem("fav", JSON.stringify(updated));
  };

  const isFav = (id) => favorites.some((f) => f.id === id);

  return (
    <div className="container py-5">

      {/* HERO */}
      <div className="hero-banner text-center d-flex align-items-center justify-content-center mb-5">
        <div className="hero-overlay"></div>

        <div className="hero-content text-white">
          <h1 className="fw-bold display-5">Find your next stay ✈️</h1>
          <p className="lead">Explore luxury destinations worldwide</p>
        </div>
      </div>

      {/* FILTER */}
      <div className="card shadow-sm border-0 mb-4 p-3">
        <div className="row g-2">
          <div className="col-md-4">
            <input className="form-control" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>

          <div className="col-md-3">
            <select className="form-select" value={country} onChange={(e) => setCountry(e.target.value)}>
              <option>All</option>
              <option>France</option>
              <option>UAE</option>
              <option>Japan</option>
              <option>USA</option>
              <option>Italy</option>
              <option>UK</option>
              <option>Maldives</option>
              <option>Indonesia</option>
            </select>
          </div>

          <div className="col-md-3">
            <input type="range" className="form-range" min="50" max="500" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
          </div>
        </div>
      </div>

      {/* LISTINGS (ANCHOR FOR SCROLL) */}
      <div id="listings" className="row g-4">

        {filtered.map((place) => (
          <div className="col-md-3" key={place.id}>
            <div className="card travel-card">
              <div className="img-wrapper">
                <img src={place.image} alt={place.name} />
              </div>

              <div className="card-body">
                <h5>{place.name}</h5>
                <p>{place.country}</p>
                <p className="text-danger">${place.price}</p>

                <div className="d-flex justify-content-between">
                  <Link
                    to={`/booking/${place.name}`}
                    state={place}
                    className="btn btn-dark"
                  >
                    Book Now
                  </Link>

                  <button onClick={() => toggleFavorite(place)} className="btn btn-outline-danger">
                    {isFav(place.id) ? "❤️" : "🤍"}
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