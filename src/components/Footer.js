export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-4">

      <div className="container text-center">

        <h5 className="fw-bold">TravelPro ✈️</h5>

        <p className="text-muted small mb-0">
          Explore the world. Book instantly. Travel smarter.
        </p>

        <p className="mt-2 small">
          © {new Date().getFullYear()} TravelPro. All rights reserved.
        </p>

      </div>

    </footer>
  );
}