import React from "react";
import Navbar from "./Navbar";
import '../app/styles/hero.css'

export default function Hero() {
  return (
    <div
      id="hero"
      className="hero-container"
      style={{ backgroundImage: "url('/picture.jpg.png')" }}
    >
      <Navbar />
      <div className="hero-content">
        <div className="lg-hidden" data-aos="zoom-in">
        </div>
        <div className="hero-text">
          <div>
            <p data-aos="zoom-in">I&apos;m</p>
            <p data-aos="zoom-in">Fizzat</p>
            <p data-aos="zoom-in">Fatima</p>
          </div>
        </div>
      </div>
    </div>
  );
}
