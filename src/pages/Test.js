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
import { useSelector } from "react-redux";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
    alert("설문조사가 제출되었습니다!");

    // 새로고침 모든거 제출후 나중에
    // window.location.reload();
  };

  const set1 = useSelector((state) => state.reducer);

  // const dispatch1 = useDispatch();
  // const Insert = () => dispatch1(insert());
  console.log(set1);

  const [A_Data, setA_Data] = useState([]);
  const [B_Data, setB_Data] = useState([]);

  let obj = {};
  const [opj, setOpj] = useState();

  /////////////////////////////////여기 혹시 오류가 날 수도 있음
  const A_Datahandler = () => {
    obj["participantId"] = opj;
    set1.map((value, idx) => {
      if (0 < value.id < 15) {
        // 데이터가 아이디값 순서가 아닌 가나다라 순서로 진행되는오류
        setA_Data(A_Data.push(value.answer));
        setB_Data(B_Data.push(value.question));
      }
      return (
        A_Data.forEach((element, index) => {
          obj[`answer${index}`] = element;
        }),
        B_Data.forEach((element, index) => {
          obj[`question${index}`] = element;
        })
      );
    });
    //////////////////////////////////////////////////////////
    // console.log(A_Data);
    console.log(obj);
  };

  // const fetchUsers = async () => {
  //   try {
  //     const response = await axios.get(`${PROXY}v2/api-docs`);

  //     console.log(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const GetUserId = async () => {
  //   try {
  //     const response = await axios.post("v1/participant");
  //     console.log(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

  const GetUserId = async () => {
    await axios
      .post(`${PROXY}/v1/participant`)
      .then((response) => {
        console.log(response.data.participantId);
        setOpj(response.data.participantId);
        console.log(opj);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  ////
  const SubmitUser = () => {
    axios
      .post(`${PROXY}/v1/survey-result`, obj)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  const set = useSelector((state) => state.reducer);
  // const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // 페이지 숫자 보여주는 기능
  const pageCounter = Data.length + 1;
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

  // const slider = useRef(null);

  // 옆으로 넘어가는 슬라이더 기능
  const slickRef = useRef(null);
  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);
  const warp = useCallback((i) => slickRef.current.slickGoTo(i), []);

  // const Previous_Button = () => {
  //   return <></>;
  // };

  // const Next_Button = () => {};

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

      <Slider
        style={{ "white-space": "pre-wrap" }}
        ref={slickRef}
        {...settings}
      >
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
        {state.activeSlide === 0 ? (
          <Styled.StartButtonFlex>
            <Styled.ButtonStyled3
              disabled={set[state.activeSlide].answer === "" ? true : false}
              onClick={() => {
                page1_next();
                page4_next();
                page11_next();
                // fetchUsers();
              }}
            >
              <div
                onClick={() => {
                  // fetchUsers();
                  GetUserId();
                }}
              >
                시작
              </div>
            </Styled.ButtonStyled3>
          </Styled.StartButtonFlex>
        ) : (
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
              onClick={() => {
                page1_next();
                page4_next();
                page11_next();

                // fetchUsers();
              }}
            >
              {
                // state.activeSlide === 0 ? (
                //   <div onClick={fetchUsers}>시작</div>
                // ) :
                state.activeSlide === 15 ? (
                  <div
                    onClick={() => {
                      navigateToHome();
                      A_Datahandler();
                      SubmitUser();
                    }}
                  >
                    제출
                  </div>
                ) : (
                  <div>다음</div>
                )
              }
            </Styled.ButtonStyled2>
          </Styled.ButtonFlex>
        )}
      </Styled.Flex>
    </>
  );
};

export default Test;
