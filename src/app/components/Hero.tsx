import React from "react";
import hero from "../images/shop-hero-1-product-slide-1.jpg";
import Button from "./Button";
function Hero() {
  return (
    <>
      <section className="relative bg-[#23A6F0] max-w-[1440px] h-[716px] py-20 flex items-center justify-between px-8 lg:px-24">
        {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${hero.src})` }}
        >
          {/* Image as background */}
        </div>

        <div className="relative z-10 flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left">
          {/* Small Heading */}
          <h3 className="text-white text-base mb-4 font-bold">SUMMER 2020</h3>

          {/* Big Heading */}
          <h1 className="text-white lg:text-[58px] text-[40px]  font-black mb-4">NEW COLLECTION</h1>

          {/* Paragraph */}
          <p className="text-white lg:text-xl md:text-lg sm:text-md font-light mb-6 leading-relaxed">
            We know how large objects will act,
            <br className="lg:block" />
            but things on a
            <br className="block lg:hidden" />
            small scale
          </p>

          {/* Button */}
          <Button text="SHOP NOW"/>
         
        </div>
      </section>
    </>
  );
}

export default Hero;
