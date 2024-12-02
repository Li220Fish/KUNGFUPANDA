import React from 'react';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceImg from "../assets/5.jpg";
import ApplyBar from "../components/ApplyBar";//1119 xin

function Service() {
  return (
    <>
      <ApplyBar />
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        btnClass="hide"
      />
      <Footer />
    </>
  );
}

export default Service;
