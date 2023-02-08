import React, { useState } from "react";
import Data from "../../components/Survey2/Data";
import * as Styled from "./styled";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Slider from "react-slick";
import { isCursorAtStart } from "@testing-library/user-event/dist/utils";

const Survey = (props) => {
  //  이중 map 으로 Data.answer의 개수만큼 질문개수가 만들어지게 설정
  // map : Data[i]의 개수만큼 map ( porp에서 갯수를 가져올 수 있음)

  //단일 선택 시
  //만약 active값이 다 false라면 하나 지목한거 true로 만들고 아니면 다 false로 만든 뒤
  //하나지목한거 true로 만듦

  // 중복 선택 시
  // active값이 다 false인지와 관련없이 그냥 false면 true , true면 false 처리

  // ---> Data.js에 중복가능여부 ex) isduplicated = false 넣고 true면 중복가능이므로  그냥 진행
  //      false면 단일이므로 모두 fasle 처리한 후 진행

  // data[props.num].active[idx] === false
  //   ? setData((data[props.num].active[idx] = true))
  //   : setData((data[props.num].active[idx] = false));
  const [data, setData] = useState(Data);

  // 배열의 불변성 문제..
  // const question_list = data[props.num].answer.map((number, idx) => {
  //   const onClick = () => {
  //     const data = [...data];
  //     setData((data[props.num].active[idx] = !data[props.num].active[idx]));
  //     console.log(data[props.num].active);
  //   };
  //   return (
  //     <Styled.ButtonStyled>
  //       <div
  //         onClick={onClick}
  //         className={`${data[props.num].active[idx] === true ? "select" : ""}`}
  //       >
  //         {data[props.num].answer[idx]}
  //       </div>
  //     </Styled.ButtonStyled>
  //   );
  // });

  // data[props.num].answer[idx] 랑 value랑 같음

  let [isActive, setisActive] = useState([
    NaN,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  let [Answer, setAnswer] = useState([NaN]);

  const isduplicate = [false];
  const question_list = data[props.num].answer.map((value, idx) => {
    const onClick = () => {
      isActive = [...isActive];
      if (isduplicate[0] === false) {
        return (
          (isActive[value.id] = !isActive[value.id]), setisActive(isActive)
        );
      } else {
        const Mapping = isActive.map((value, idx) => {
          isActive[idx] = false;
        });
        return (
          { Mapping },
          (isActive[value.id] = !isActive[value.id]),
          setisActive(isActive)
        );
      }
      console.log(value);
      console.log(isActive);
    };
    return (
      <Styled.ButtonStyled>
        <div
          onClick={() => onClick()}
          className={`${isActive[value.id] === true ? "select" : ""}`}
        >
          {value.content}
        </div>
      </Styled.ButtonStyled>
    );
  });

  // const question_list = data[props.num].answer.map((value, idx) => {
  //   const onClick = () => {
  //     value.active = !value.active;

  //     setData(data);
  //     console.log(value);
  //   };
  //   return (
  //     <Styled.ButtonStyled>
  //       <div
  //         onClick={() => onClick()}
  //         className={`${value.active === true ? "select" : ""}`}
  //       >
  //         {value.content}
  //       </div>
  //     </Styled.ButtonStyled>
  //   );
  // });

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
