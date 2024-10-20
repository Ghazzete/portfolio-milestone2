import React from "react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/picture.jpg.png')" }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)] items-center">
        <div className="hidden lg:block text-3xl" data-aos="zoom-in">
        </div>
        <div className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-bold leading-tight flex justify-center items-center flex-col text-center">
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
