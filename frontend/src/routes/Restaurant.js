import React from 'react';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceImg from "../assets/5.jpg";

function Service() {
  return (
    <>
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
