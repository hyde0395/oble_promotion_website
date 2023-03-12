import React, { useState } from "react";
import Data from "../../components/Survey2/Data";
import * as Styled from "./styled";
import { useDispatch } from "react-redux";
import {
  select,
  many_select,
  Delete_Selections,
  description,
} from "../Redux/Set";

const Survey = (props) => {
  const [data] = useState(Data);

  const dispatch = useDispatch();

  const [x, setX] = useState();

  const handleClickRadioButton2 = (e) => {
    setX(e.target.value);
  };

  const question_list = data[props.num].answer.map((value, idx) => {
    // 복수선택
    const Many_select = (e) =>
      dispatch(many_select(data[props.num].id, e.target.value));
    // 단일선택
    const Select = (e) => dispatch(select(data[props.num].id, e.target.value));
    //복수선택 삭제시
    const delete_selections = (e) =>
      dispatch(Delete_Selections(data[props.num].id, e.target.value));

    const Description = (e) =>
      dispatch(description(data[props.num].id, e.target.value));

    return data[props.num].isduplicate === true ? (
      <>
        {/* 복수 선택 : 체크박스 */}
        <Styled.FormCheckLeft
          type="checkbox"
          value={`${value.content}`}
          id={`${props.num}${idx}`}
          onChange={(e) => {
            if (e.target.checked) {
              Many_select(e);
            } else if (!e.target.checked) {
              delete_selections(e);
            }
          }}
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
          value={`${value.content}`}
          id={`${props.num}${idx}`}
          checked={x === `${value.content}`}
          onChange={(e) => {
            handleClickRadioButton2(e);
            Select(e);
          }}
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
          name="id"
          placeholder={`${value.content}`}
          onChange={(e) => {
            // handlediscriptrion(e);
            Description(e);

            value = e.target.value;
          }}
        ></Styled.FormInput>
      </>
    ) : null;
  });

  return (
    <>
      <div>
        <Styled.SurveyContainer>
          <Styled.BoxStyled>{Data[props.num].question}</Styled.BoxStyled>
          {typeof Data[props.num].subquestion !== "undefined" ? (
            <Styled.Subquestion>
              {Data[props.num].subquestion}
            </Styled.Subquestion>
          ) : null}

          {Data[props.num].isduplicate === true ? (
            <Styled.Subtitle>{Data[props.num].subtitle}</Styled.Subtitle>
          ) : null}
          <Styled.Flex>{question_list}</Styled.Flex>
        </Styled.SurveyContainer>
      </div>
    </>
  );
};

export default Survey;
