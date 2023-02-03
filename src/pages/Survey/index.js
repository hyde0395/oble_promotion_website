import React, { useState } from "react";
import Data from "../../components/Survey2/Data";
import * as Styled from "./styled";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Slider from "react-slick";
import Data2 from "../../components/Survey2/Data2";
const Survey = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };
  {
    /* Data[props.i] 넣고 Test.js에서 i= map함수 써서 넣기 */
  }

  //  이중 map 으로 Data.answer의 개수만큼 질문개수가 만들어지게 설정
  // map : Data[i]의 개수만큼 map ( porp에서 갯수를 가져올 수 있음)

  const question_list = Data[props.num].answer.map((number, idx) => {
    return (
      <Styled.ButtonStyled>
        <div>{Data[props.num].answer[idx]}</div>
      </Styled.ButtonStyled>
    );
  });

  //  이 값은 단답형 설문조사 하기 위해

  // const question_list2 = Data2[props.num].answer.map((number, idx) => {
  //   return (
  //     <Styled.ButtonStyled>
  //       <div>{Data2[props.num].answer[idx]}</div>
  //     </Styled.ButtonStyled>
  //   );
  // });

  return (
    <>
      <div>
        {/* <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} /> */}
        <Styled.BoxStyled>
          <p>{Data[props.num].question}</p>
        </Styled.BoxStyled>
        <Styled.Flex>{question_list}</Styled.Flex>
      </div>
    </>
  );
};

export default Survey;
