import React, { useState } from "react";
import Data from "../../components/Survey2/Data";
import * as Styled from "./styled";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Slider from "react-slick";

const Survey = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };
  {
    /* Data[props.i] 넣고 Test.js에서 i= map함수 써서 넣기 */
  }

  //  이중 map 으로 Data.answer의 개수만큼 질문개수가 만들어지게 설정

  // 1단계 map : Data[i]의 개수만큼 map
  // 2단계 map : Data[i].answer의 개수만큼 질문 보여줌

  // const question_list = Data[i].answer.map((number, idx) => {
  //   return (
  //     <Styled.ButtonStyled>
  //       <div>{Data[props.num].answer[idx]}</div>
  //     </Styled.ButtonStyled>
  //   );
  // });

  const question_list = Data[0].answer.map((number, idx) => {
    return (
      <Styled.ButtonStyled>
        <div>{Data[props.num].answer[idx]}</div>
      </Styled.ButtonStyled>
    );
  });

  const Data_list = [0, 1, 2, 3, 4, 5, 6].map((number, i) => {
    const question_list = Data[i].answer.map((number, idx) => {
      return (
        <Styled.ButtonStyled>
          <div>{Data[props.num].answer[idx]}</div>
        </Styled.ButtonStyled>
      );
    });
    return { question_list };
  });

  return (
    <>
      <div>
        {/* <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} /> */}
        <Styled.BoxStyled>
          <p>{Data[props.num].question}</p>
        </Styled.BoxStyled>
        <Styled.Flex>
          {question_list}
          {/* <Styled.ButtonStyled>
            <div>{Data[props.num].answer[0]}</div>
          </Styled.ButtonStyled>
          <Styled.ButtonStyled>
            <div>{Data[props.num].answer[1]}</div>
          </Styled.ButtonStyled>
          <Styled.ButtonStyled>
            <div>{Data[props.num].answer[2]}</div>
          </Styled.ButtonStyled>
          <Styled.ButtonStyled>
            <div>{Data[props.num].answer[3]}</div>
          </Styled.ButtonStyled>
          <Styled.ButtonStyled>
            <div>{Data[props.num].answer[4]}</div>
          </Styled.ButtonStyled> */}
          {/* <Styled.ButtonFlex>
            <Styled.ButtonStyled2>
              <div>이전</div>
            </Styled.ButtonStyled2>
            <Styled.ButtonStyled2>
              <div>다음</div>
            </Styled.ButtonStyled2>
          </Styled.ButtonFlex> */}
        </Styled.Flex>
      </div>
    </>
  );
};

export default Survey;
