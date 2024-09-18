import React from "react";
import Card from "../components/cards";
import Carousals from "../components/carousals"; // Ensure the component name matches exactly

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousals /> {/* Properly call the Carousel component */}
      <div className="m-3"></div>
      <Card />
      <Footer />
    </div>
  );
}
