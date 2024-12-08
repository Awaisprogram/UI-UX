import React from "react";
import Topbar from "../components/Top-black";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Pick from "../components/Pick";
import Features from "../components/Features";
import Banner from "../components/Banner";
import Post from "../components/Post";

function Main() {
  return (
    <>
      <Topbar  className="black1"/>
      <Navbar />
      <Hero />
      <Pick/>
      <Features/>
      <Banner/>
      <Post/>
    </>
  );
}

export default Main;
