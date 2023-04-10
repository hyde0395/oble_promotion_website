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
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);
  //스크롤 위치 체크하는 함수
  const handleScroll = () => {
    console.log("scrolled");
    console.log(window.scrollY);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // 스크롤 상태
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const changeBorder = () => {
      if (window.scrollY >= window.innerHeight * 1) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", changeBorder);
    return () => {
      window.removeEventListener("scroll", changeBorder);
    };
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} scroll={scroll} />
      <SectionOne />
      <SectionThree />
      <SectionFour />
      <HeroSection />
      <Reference />
      <SectionSix />
      <SectionSeven />
      <Services />
      <SectionEight />
      <Footer />
      {isOpen || <KakaoButton />}
    </>
  );
};

export default Home;
