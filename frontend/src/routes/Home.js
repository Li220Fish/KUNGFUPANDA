import React from 'react';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Delivery from "../components/Delivery";
import City from "../components/City";
import Footer from "../components/Footer";
import HeroImg from "../assets/hero.jpeg";
import ApplyBar from "../components/ApplyBar";//1119 xin
import StoreJoin from "../components/StoreJoin";//1119 xin

function Home() {
  return (
    <>
      <ApplyBar />
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
      <StoreJoin />
      <Delivery />
      <City />
      <Footer />
    </>
  );
}

export default Home;
