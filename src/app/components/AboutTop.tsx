import React from 'react'
import Image from 'next/image'
import none from '../images/none.png'
import Button from './Button'
import AboutCenter from './About-center'

function AboutTop() {
  return (
    <>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto max-w-[1050px] flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h3 className="text-black1 text-base mb-4 font-bold">ABOUT COMPANY</h3>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-black text-gray-900">
       ABOUT US
        
      </h1>
      <p className="text-black1 lg:text-xl md:text-lg sm:text-md font-light mb-6 leading-relaxed">
            We know how large objects will actbut things,
            <br className="lg:block" />
             on a small scale just do
            <br className="block lg:hidden" />
            not act that way
            
            
          </p>
      <Button text="Get Qoute Now"/>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={none}
      />
    </div>
  </div>
</section>

<AboutCenter/>
    </>
  )
}

export default AboutTop
