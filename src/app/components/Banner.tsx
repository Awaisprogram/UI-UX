import React from "react";
import Image from "next/image";
import bannerImage from "../images/shop-hero-2-png-picture-1.png"; 
import Button from "./Button";
import Neutral from "./Neutral";

const Banner = () => {
  return (
    <div>
      <div className="text-white bg-dark pt-20 container mx-auto px-10 flex flex-col lg:flex-row items-center justify-around gap-20">
        {/* Left Section: Text Content */}
        <div className="flex flex-col space-y-4 lg:items-start items-center w-full lg:w-1/2">
          <h5 className="text-lg uppercase font-semibold">Summer 2020</h5>
          <h1 className="text-white lg:text-[58px] text-[40px]  font-black mb-4 text-center lg:text-start">Vita Classic
            <br/>
            Product
             </h1>
             <p className="text-white lg:text-lg md:text-md sm:text-md text-center lg:text-start font-light mb-6 ">
            We know how large objects will act,
            <br className="lg:block" />
            but things on a
            <br className="block lg:hidden" />
            small scale
          </p>
         
          <div className="flex items-center gap-4">
            <span className="text-2xl font-semibold">$16.48</span>
            <Button text="ADD TO CART"/>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className=" relative  ">
          <Image
            src={bannerImage}
            alt="Vita Classic Product"
            objectFit="cover"
            className="rounded-lg"

          />
        </div>
      </div>
      <Neutral/>
      
    </div>
  );
};

export default Banner;
