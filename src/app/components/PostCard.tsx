import React from "react";
import Image from "next/image";


function PostCard({
  imageSrc,
  title,
  description,
  date,
  comments,
  likes,
}: any) {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Image
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={imageSrc}
          alt="blog"
          width={500}
          height={500}
        />
        <div className="p-6">
          <h1 className="text-sm flex gap-5 pb-3 cursor-pointer">
            <span className="text-Color">Google</span>
            <span className="hover:text-Color">Trending</span>
            <span className="hover:text-Color">News</span>{" "}
          </h1>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-3">{description}</p>
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-400 text-sm">{date}</span>
            <span className="text-gray-400 text-sm">{comments} Comments</span>
          </div>
          <div className="flex items-center flex-wrap">
            <a className=" inline-flex items-center md:mb-2 lg:mb-0">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
