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

  const page1_previous = () => {
    if (
      (state.activeSlide === 4 &&
        (set[1].answer === Data[0].answer[0].content ||
          set[1].answer === Data[0].answer[1].content ||
          set[1].answer === Data[0].answer[3].content)) ||
      (state.activeSlide === 3 &&
        (set[1].answer === Data[0].answer[2].content ||
          set[1].answer === Data[0].answer[4].content))
    ) {
      warp(1);
    } else if (
      (state.activeSlide === 15 &&
        set[1].answer === Data[0].answer[2].content) ||
      set[1].answer === Data[0].answer[4].content
    ) {
      warp(3);
    } else if (
      state.activeSlide === 4 &&
      set[1].answer === Data[0].answer[5].content
    ) {
      warp(2);
    } else {
      previous();
    }
  };

  const page1_next = () => {
    if (
      state.activeSlide === 1 &&
      (set[1].answer === Data[0].answer[0].content ||
        set[1].answer === Data[0].answer[1].content ||
        set[1].answer === Data[0].answer[3].content)
    ) {
      warp(4);
    } else if (
      state.activeSlide === 1 &&
      (set[1].answer === Data[0].answer[2].content ||
        set[1].answer === Data[0].answer[4].content)
    ) {
      warp(3);
    } else if (state.activeSlide === 2) {
      warp(4);
    } else if (state.activeSlide === 3) {
      warp(15);
    } else {
      next();
    }
  };

  const page4_next = () => {
    if (
      state.activeSlide === 4 &&
      set[4].answer !== Data[3].answer[6].content
    ) {
      warp(6);
    } else if (
      state.activeSlide === 4 &&
      set[4].answer === Data[3].answer[6].content
    ) {
      warp(5);
    }
  };

  const page4_prev = () => {
    if (
      state.activeSlide === 6 &&
      set[4].answer !== Data[3].answer[6].content
    ) {
      warp(4);
    } else if (
      state.activeSlide === 6 &&
      set[4].answer === Data[3].answer[6].content
    ) {
      warp(5);
    }
  };

  const page11_next = () => {
    if (
      state.activeSlide === 11 &&
      set[11].answer !== Data[10].answer[4].content
    ) {
      warp(13);
    } else if (
      state.activeSlide === 11 &&
      set[11].answer === Data[10].answer[4].content
    ) {
      warp(12);
    }
  };

  const page11_prev = () => {
    if (
      state.activeSlide === 13 &&
      set[11].answer !== Data[10].answer[4].content
    ) {
      warp(11);
    } else if (
      state.activeSlide === 13 &&
      set[11].answer === Data[10].answer[4].content
    ) {
      warp(12);
    }
  };
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
              page1_previous();
              page4_prev();
              page11_prev();
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
              page1_next();
              page4_next();
              page11_next();
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
