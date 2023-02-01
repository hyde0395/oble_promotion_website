import React, { useState, useRef, useCallback } from "react";

import Slider from "react-slick";
import Survey from "./Survey";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import * as Styled from "./Survey/styled";

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,

    draggable: false,
  };

  // 숫자 표시해주는 기능

  const [currentPage, setCurrentPage] = useState(1);
  const pageCounter = 22;
  // const slider = useRef(null);
  const handlePrevSlide = () => {
    // slider.current.slickPrev();
    currentPage > 1 && setCurrentPage(currentPage - 1);
  };
  const handleNextSlide = () => {
    // slider.current.slickNext();
    currentPage < pageCounter && setCurrentPage(currentPage + 1);
  };

  // 옆으로 넘어가는 슬라이더 기능
  const slickRef = useRef(null);
  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  // var status = ".pagingInfo";
  // var slickElement = ".slideshow";

  // slickElement.on(
  //   "init reInit afterChange",
  //   function (event, slick, currentSlide, nextSlide) {
  //     //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  //     var i = (currentSlide ? currentSlide : 0) + 1;
  //     status.text(i + "/" + slick.slideCount);
  //   }
  // );

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Slider ref={slickRef} {...settings}>
        <Survey num="0"></Survey>
        <Survey num="1"></Survey>
        <Survey num="2"></Survey>
        <Survey num="3"></Survey>
        <Survey num="4"></Survey>
        <Survey num="5"></Survey>
        <Survey num="6"></Survey>
        <Survey num="7"></Survey>
        <Survey num="8"></Survey>
        <Survey num="9"></Survey>
        <Survey num="10"></Survey>
        <Survey num="11"></Survey>
        <Survey num="12"></Survey>
        <Survey num="13"></Survey>
        <Survey num="14"></Survey>
        <Survey num="15"></Survey>
      </Slider>
      <Styled.Flex>
        <Styled.ButtonFlex>
          <Styled.ButtonStyled2
            onClick={() => {
              handlePrevSlide();
              previous();
            }}
          >
            <div>이전</div>
          </Styled.ButtonStyled2>
          <p>
            {currentPage} / {pageCounter}
          </p>
          <Styled.ButtonStyled2
            onClick={() => {
              handleNextSlide();
              next();
            }}
          >
            <div>다음</div>
          </Styled.ButtonStyled2>
        </Styled.ButtonFlex>
      </Styled.Flex>
    </>
  );
};

export default Test;
