import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import KakaoButton from "../components/KakaoButton";
import Footer from "../components/Footer";
import Reference from "../components/Reference";
import SectionOne from "../components/SectionOne";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import SectionSix from "../components/SectionSix";
import SectionSeven from "../components/SectionSeven";
import SectionEight from "../components/SectionEight";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isVisible, setIsVisible] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // const buttonHandler = () => {
  //   setIsVisible(!isVisible);
  // };
  return (
    <>
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
        // isVisible={isVisible}
        // buttonHandler={buttonHandler}
      />
      <Navbar toggle={toggle} />
      <SectionOne />
      <HeroSection />
      <SectionThree />
      <SectionFour />
      <Reference />
      <SectionSix />
      <SectionSeven />
      <Services />
      <SectionEight />
      <Footer />
      <KakaoButton />
    </>
  );
};

export default Home;
