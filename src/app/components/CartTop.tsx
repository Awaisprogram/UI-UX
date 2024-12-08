'use client'

import React, { useState } from 'react';
import { FaStar, FaHeart, FaShoppingCart, FaEye, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import p1 from '../images2/p5.png';
import p2 from '../images/prosuct2.png'; 
import Link from 'next/link';

function CartTop() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [p1, p2]; // Array of images

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <>
      <section className="text-gray-600 body-font bg-gray-100 overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full flex flex-col items-center relative">
              <Image
                alt="ecommerce"
                className="lg:w-full w-full lg:h-auto h-72 object-cover object-center rounded"
                src={images[currentImage]} // 
                width={500}
                height={500}
              />
              <div className="absolute top-[150px] lg:top-1/2 left-0 transform -translate-y-1/2 px-4">
                <button
                  onClick={prevImage}
                  className=""
                >
                  <FaChevronLeft className="w-6 h-6" />
                </button>
              </div>
              <div className="absolute top-[150px] lg:top-1/2 right-0 transform -translate-y-1/2 px-4">
                <button
                  onClick={nextImage}
                  className="p-2 "
                >
                  <FaChevronRight className="w-6 h-6" />
                </button>
              </div>
              {/* Small image previews */}
              <div className="flex mt-4 space-x-4">
                <Image
                  alt="small preview"
                  className="w-20 h-20 object-cover rounded border cursor-pointer"
                  src={p2}
                  width={500}
                  height={500}
                  onClick={() => setCurrentImage(1)}
                />
                <Image
                  alt="small preview"
                  className="w-20 h-20 object-cover rounded border cursor-pointer"
                  src={p1}
                  width={500}
                  height={500}
                  onClick={() => setCurrentImage(0)}
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <FaStar className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
              </div>
              <div className="py-4">
                <span className="font-bold text-2xl">$1,139.33</span>
                <div className="font-bold mt-5 text-xl">
                  Availability : <span className="text-green-500">In Stock</span>
                </div>
              </div>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing
                tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan
                poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo
                tattooed umami cardigan.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex items-center">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-10 h-10 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-10 h-10 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-10 h-10 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-1 bg-orange-500 rounded-full w-10 h-10 focus:outline-none" />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Select Options
                </button>
                <div className="flex items-center space-x-4 ml-6">
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                    <FaHeart className="w-5 h-5" />
                  </button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                    <FaShoppingCart className="w-5 h-5" />
                  </button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                    <FaEye className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links */}
      <div>
        <nav className="flex items-center gap-5 cursor-pointer mt-10 justify-center">
          <Link href="">Description</Link>
          <Link href="">Additional Information</Link>
          <Link href="">
            Review <span className="text-dark">0</span>
          </Link>
        </nav>
      </div>
    </>
  );
}

export default CartTop;
