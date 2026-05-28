import React from "react";

export default function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
      <div className="loader-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}