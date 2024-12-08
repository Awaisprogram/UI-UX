import React from 'react';
import Heading from './Heading';
import PostCard from './PostCard';
import b1 from "../images/b1.png"
import b2 from "../images/b2.png"
import b3 from "../images/b3.png"

function Post() {
  return (
    <>
      <div className="flex justify-center">
        <Heading
          title="Featured Posts"
          paragraph="Problems trying to resolve the conflict between"
          subtitle="Practice Advice"
          className="Color"
        />
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 items-center justify-center max-w-[1050px] mx-auto">
            <PostCard
              imageSrc={b1}
              title=" The Catalyzer"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
              date="21 April 2021"
              comments={10}
            />
            <PostCard
              imageSrc={b2}
              title=" The 400 Blows"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
              date="21 April 2021"
              comments={10}
            />
            <PostCard
              imageSrc={b3}
              title="Shooting Stars"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
              date="21 April 2021"
              comments={10}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Post;
