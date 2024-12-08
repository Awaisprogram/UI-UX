import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image, { StaticImageData } from 'next/image';
import i1 from '../images/team-1-user-1.jpg';
import i2 from '../images/team-1-user-2.jpg';
import i3 from '../images/team-1-user-3.jpg';

interface type{
  image:StaticImageData, 
  name:string, 
  role:string
}

function Members() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 max-w-[1050px] mx-auto">
          <div className="flex flex-col text-center items-center justify-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
              MEET OUR TEAM
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Meet our amazing team of professionals dedicated to delivering
              excellence and innovation in every project.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Card 1 */}
            <TeamCard
              image={i1}
              name="Alper Kamu"
              role="UI Developer"
            />
            {/* Card 2 */}
            <TeamCard
              image={i2}
              name="Holden Caulfield"
              role="Backend Developer"
            />
            {/* Card 3 */}
            <TeamCard
              image={i3}
              name="Jane Doe"
              role="Project Manager"
            />
            {/* Card 4 */}
            <TeamCard
              image={i1}
              name="John Smith"
              role="Data Scientist"
            />
            {/* Card 5 */}
            <TeamCard
              image={i2}
              name="Sarah Connor"
              role="Marketing Specialist"
            />
            {/* Card 6 */}
            <TeamCard
              image={i3}
              name="Alex Johnson"
              role="Frontend Engineer"
            />
            {/* Card 7 */}
            <TeamCard
              image={i1}
              name="Emma Brown"
              role="Content Creator"
            />
            {/* Card 8 */}
            <TeamCard
              image={i2}
              name="Michael Lee"
              role="DevOps Engineer"
            />
            {/* Card 9 */}
            <TeamCard
              image={i3}
              name="Sophia Taylor"
              role="UX Designer"
            />
          </div>
        </div>
      </section>
    </>
  );
}


function TeamCard({ image, name, role }:type) {
  return (
    <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full flex flex-col items-center text-center">
        <Image
          alt="team"
          className="flex-shrink-0 w-full h-96 lg:h-56 object-cover object-center mb-4"
          src={image}
          width={500}
          height={500}
        />
        <div className="w-full">
          <h2 className="title-font font-medium text-lg text-gray-900">{name}</h2>
          <h3 className="text-gray-500 mb-3">{role}</h3>
          <div className="flex justify-center gap-4 mt-2">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-blue-400 text-white rounded-full"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
