import React, { useState, useRef, useCallback } from "react";

import Slider from "react-slick";
import Survey from "./Survey";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import * as Styled from "./Survey/styled";

import Start from "./Start";
import Submit from "./Submit";


import Data from "../components/Survey2/Data";
import { useSelector, useDispatch } from "react-redux";

const Test = () => {
  const set = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // 페이지 숫자 보여주는 기능
  const pageCounter = Data.length;
  //여기 activeSlide 이용해서 원하는 페이지로 워프하게 설정
  const [state, setState] = useState({
    activeSlide: 0,
  });
  // 기본 세팅

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    beforeChange: (current, next) => setState({ activeSlide: next }),

    draggable: false,
  };

  const slider = useRef(null);

  // 옆으로 넘어가는 슬라이더 기능
  const slickRef = useRef(null);
  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);
  const warp = useCallback((i) => slickRef.current.slickGoTo(i), []);
  const survey = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  // const [disable, setDisable] = useState(true);
  // const handleDisable = () => {
  //   setDisable(!disable);
  // };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <Slider ref={slickRef} {...settings}>

        <Start></Start>


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
        <Submit />
      </Slider>
      <Styled.Flex>
        <Styled.ButtonFlex>
          <Styled.ButtonStyled2
            onClick={() => {
              if (
                state.activeSlide === 4 &&
                (set[1].answer === "개인사업자" ||
                  set[1].answer === "B2C제품판매기업" ||
                  set[1].answer === "광고대행사")
              ) {
                warp(1);
              } else {
                previous();
              }
            }}
          >
            <div>이전</div>
          </Styled.ButtonStyled2>
          <p>
            {state.activeSlide} / {pageCounter}
          </p>
          <Styled.ButtonStyled2
            disabled={set[state.activeSlide].answer === "" ? true : false}
            // disabled = {disable}
            onClick={() => {
              if (
                state.activeSlide === 1 &&
                (set[1].answer === "개인사업자" ||
                  set[1].answer === "B2C제품판매기업" ||
                  set[1].answer === "광고대행사")
              ) {
                warp(4);
              } else {
                next();
              }

              // warp();
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
