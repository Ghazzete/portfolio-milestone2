import React from "react"
import Navbar from "./Navbar"

export default function Hero () {
  return (
   <div id="hero" className="min-h-screen bg-no-repeat bg-[url('/picture.jpg.png')] bg-cover "
   style={{backgroundSize: "30%", backgroundPosition:"left 100px top 160px"}}
   >
     <Navbar />
     <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
      <div className="hidden lg:block text-3xl text-yellow-500"data-aos="zoom-in">Welcome to my Portfolio!</div>
      <div className="text-[60px] sm:text-[100px] font-bold leading-tight flex justify-center items-center">
        <div>
          <p data-aos="zoom-in">I&apos;m</p>
          <p data-aos="zoom-in">Fizzat</p>
          <p data-aos="zoom-in">Fatima</p>
        </div>
      </div>
     </div>
   </div>
  )
}