import React from "react";
import Heading from "./Heading";
import Navigation from "./Navigation";
import Image from "next/image";
import u1 from "../images/u1.png";
import u2 from "../images/u1.png";
import u3 from "../images/u3.png";
import u4 from "../images/u4.png";
import Members from "./Members";
import Trial from "./Trial";


function AllTeam() {
  return (
    <>
      <div className="flex flex-col items-center ">
        <Heading
          subtitle="WHAT WE DO"
          title="Innovation tailored for you"
          className=""
        />
        <Navigation current="Team" />
      </div>
      <div className="flex justify-center items-center gap-3 flex-col lg:flex-row py-7">
        <div>
          <Image src={u3} alt=""></Image>
        </div>
        <div className="flex lg:flex-col flex-row gap-3">
          <Image src={u1} alt=""></Image>
          <Image src={u2} alt=""></Image>
        </div>
        <div className="flex lg:flex-col flex-row gap-3">
          <Image src={u4} alt=""></Image>
          <Image src={u4} alt=""></Image>
        </div>
      </div>

      {/* All team */}
      <Members />

      {/* Laasssst */}

      <Trial/>
    </>
  );
}

export default AllTeam;
