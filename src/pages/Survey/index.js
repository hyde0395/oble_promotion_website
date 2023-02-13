import React, { useState } from "react";
import Data from "../../components/Survey2/Data";
import * as Styled from "./styled";
import { useSelector, useDispatch } from "react-redux";

import reducer from "../Redux/Set";
import setting from "../Redux/Set";
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

  const set = useSelector((state) => state.reducer.selected);
  // console.log(set);
  const dispatch = useDispatch();

  const set_true = (index, index2) => dispatch(set_true(index, index2));
  const setting = () => dispatch(setting());

  let [Answer, setAnswer] = useState([NaN]);

  const [x, setX] = useState();
  const handleClickRadioButton2 = (e) => {
    setX(e.target.value);
  };
  const question_list = data[props.num].answer.map((value, idx) => {
    return data[props.num].isduplicate === true ? (
      <>
        {/* 복수 선택 : 체크박스 */}
        <Styled.FormCheckLeft
          type="checkbox"
          value={`${props.num}${idx}`}
          id={`${props.num}${idx}`}
        ></Styled.FormCheckLeft>
        <Styled.FormCheckText htmlFor={`${props.num}${idx}`}>
          {value.content}
        </Styled.FormCheckText>
      </>
    ) : data[props.num].isduplicate === false ? (
      <>
        {/* 단일선택 : 라디오버튼 */}
        <Styled.FormCheckLeft
          type="radio"
          value={`${props.num}${idx}`}
          checked={x === `${props.num}${idx}`}
          id={`${props.num}${idx}`}
          onChange={handleClickRadioButton2}
        ></Styled.FormCheckLeft>
        <Styled.FormCheckText htmlFor={`${props.num}${idx}`}>
          {value.content}
        </Styled.FormCheckText>
      </>
    ) : data[props.num].isduplicate === 0 ? (
      <>
        {/* 여기는 주관식 답변 */}
        <Styled.FormInput
          type="text"
          id={`${props.num}${idx}`}
          placeholder={`${value.content}`}
        ></Styled.FormInput>
      </>
    ) : null;
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
        <Styled.BoxStyled>
          <p>{Data[props.num].question}</p>
        </Styled.BoxStyled>

        <Styled.Flex>{question_list}</Styled.Flex>
      </div>
    </>
  );
};

export default Survey;
