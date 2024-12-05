import React from 'react';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import City from "../components/City";
import ServiceImg from "../assets/5.jpg";
import CityData from "../components/CityData";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Service"
        btnClass="hide"
      />
      <City />
      <Footer />
    </>
  );
}

export default Service;
