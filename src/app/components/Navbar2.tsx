"use client";

import {
  FaUser,
  FaSearch,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";


const Navbar2 = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-Background max-w-[1437px] lg:h-[78px] flex justify-between items-center relative z-20">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Brand Name */}
        <div className="flex justify-center items-center gap-20">
          <Link href="/" className="text-2xl font-black text-black">
            Bandage
          </Link>

          {/* Navbar Links - Desktop Version */}
          <div className="hidden lg:flex text-sm space-x-8">
            <Link href="/" className="font-bold hover:text-Color transition ease duration-500">
              Home
            </Link>
            <Link
              href="/shop"
              className="hover:text-Color font-bold flex justify-center items-center gap-4 transition ease duration-500"
            >
              Product
            </Link>
            <Link href="/pricing" className="hover:text-Color font-bold transition ease duration-500">
              Pricing
            </Link>
            
            <Link href="/contact" className="hover:text-Color font-bold transition ease duration-500">
              Contact
            </Link>
            
           
          </div>
        </div>

       {/* Right Section: Buttons */}
      <div className="flex items-center gap-4 hidden lg:block">
        <button className="px-4 py-2 border border-white rounded-md ">
          Login
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Become a Member
        </button>
      </div>


        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="lg:hidden flex items-center space-x-4">
          <FaSearch className="text-xl cursor-pointer hover:text-Color" />
          <FaShoppingCart className="text-xl cursor-pointer hover:text-Color" />

          {/* Hamburger Icon */}
          <button className="text-xl" onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with Animation */}
      <div
        className={`lg:hidden absolute top-[60px] left-0 bg-Background text-light text-center w-full p-10 transition-all duration-300 ease-in-out z-30 ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <Link href="/" className="block py-2 font-semibold hover:text-Color">
          Home
        </Link>
        <Link
          href="/shop"
          className="block py-2 font-semibold hover:text-Color transition ease duration-500"
        >
          Product
        </Link>
        <Link
          href="/pricing"
          className="block py-2 font-semibold hover:text-Color transition ease duration-500"
        >
          Pricing
        </Link>
        <Link href="/contact" className="block py-2 font-semibold hover:text-Color transition ease duration-500">
          Contact
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar2;
