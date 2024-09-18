import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from "react";
// import "./Carousel.css"; // Custom CSS file for additional styling

export default function Carousel() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"style={{objectFit:"contain !importnt"}}
    >
      <div className="carousel-inner" id="carousel">
        {/* Centered search bar */}
        <div className="carousel-caption search-container">
          <form className="d-flex justify-content-center">
            <input
              className="form-control me-2 search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>

        {/* Carousel Items */}
        <div className="carousel-item active">
          <img src="samosa.png" className="d-block w-100" alt="samosa.png" />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.holidify.com/images/cmsuploads/compressed/8341992509_906d197b80_k_20190912175503.jpg"
            className="d-block w-100"
            alt="Momo"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.T03aJagv5g4JwoG0Di4gFwHaEb&pid=Api&P=0&h=220"
            className="d-block w-100"
            alt="Pizza"
          />
        </div>
      </div>

      {/* Navigation controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
