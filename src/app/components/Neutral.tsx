import React from 'react'
import Image from 'next/image'
import img from '../images/col-md-6.png'

function Neutral() {
  return (
    <div>
      <section className="text-gray-600 body-font pt-0"> 
        <div className="container mx-auto flex px-5 md:py-24 lg:p-0 gap-10 md:flex-row flex-col-reverse items-center  max-w-[1050px]">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={img}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center leading-relaxed">
          <h5 className="text-lg uppercase font-semibold my-10">Summer 2020</h5>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-black text-center lg:text-start text-gray-900 ">
              Part of the {" "}
              <br className="lg:hidden inline-block" />Neutral 
              <br />
               Universe
            </h1>
            <p className="mb-8 leading-relaxed">
             We know how large objects will act but things on a small scale
            </p>
            <div className="flex justify-center">
             
              <button className="inline-flex text-white bg-[#2DC071]    py-2 px-6 hover:border transition ease duration-500 rounded ">
              BUY NOW
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-transperent border  py-2 px-6  hover:bg-[#2DC071]  hover:text-white transition ease duration-500 rounded text-lg">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Neutral
