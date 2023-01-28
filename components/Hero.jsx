import React from "react";

function Hero() {
  return (
    <>
      <div className="custom_image h-screen bg-slate-50 bg-fixed" id="Home">
        <div className="flex justify-center items-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl">Capture Photos</h1>
            <h3 className="my-10">I Capture every Monments that important for Your Life</h3>
            <button className="border border-white hover:bg-white ease-linear duration-200 hover:text-black px-6 py-3 rounded-full">Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
