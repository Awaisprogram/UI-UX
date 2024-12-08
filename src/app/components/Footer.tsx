import React from 'react'
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'; 
import Link from 'next/link';

function Footer() {
  return (
    <div> 
      <div className='bg-gray-100 border-b py-16 px-8 flex justify-between items-center'>
        <Link href="/" className="text-2xl font-black text-black">
          Bandage
        </Link>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href="https://twitter.com" className="text-Color">
            <FaTwitter className="w-5 h-5" />
          </Link>
          <Link href="https://instagram.com" className="ml-3 text-Color">
            <FaInstagram className="w-5 h-5" />
          </Link>
          <Link href="https://github.com" className="ml-3 text-Color">
            <FaGithub className="w-5 h-5" />
          </Link>
          
        </span>
      </div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* First Column */}
            <div className="px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-3">
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  First Link
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Second Link
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Third Link
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Fourth Link
                </Link>
              </nav>
            </div>

            {/* Second Column */}
            <div className="px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-3">
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  First Link
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Second Link
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Third Link
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Fourth Link
                </Link>
              </nav>
            </div>

            {/* Third Column */}
            <div className="px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-3">
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  First Link
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Second Link
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Third Link
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Fourth Link
                </Link>
              </nav>
            </div>

            {/* Fourth Column */}
            <div className=" w-full px-4">
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">
                   Get in Touch
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-Color border-0 py-2 px-6 focus:outline-none hover:bg-Dark rounded">
                  Button
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
               Lore imp sum dolor Amit
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="bg-gray-100">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              Made With Love By
              <Link
                href="https://twitter.com/knyttneve"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                Finland All Rights Reserved
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
