import React from 'react';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Delivery from "../components/Delivery";
import City from "../components/City";
import Footer from "../components/Footer";
import HeroImg from "../assets/hero.jpeg";
function Home() {
  return (
    <>
      <ApplyBar  />{/* 1119xin-add */}
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HeroImg}
        title="BRING GOOD FOOD INTO"
        title2="YOUR EVERYDAY"
        text="It's the food and groceries you love, delivered"
        buttonText="Get Started"
        url="/"
        btnClass="show"
      />
      <Delivery />
      <City />
      <Footer />
    </>
  );
}

export default Home;
