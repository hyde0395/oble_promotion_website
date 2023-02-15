import React, { useEffect, useState } from "react";
import Data from "../../components/Survey2/Data";
import * as Styled from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  select,
  many_select,
  Delete_Selections,
  description,
} from "../Redux/Set";
import reducer from "../Redux/Set";
const Survey = (props) => {
  const [data, setData] = useState(Data);
  const set = useSelector((state) => state.reducer);
  console.log(set);
  const dispatch = useDispatch();

  // const set_true = (index, index2) => dispatch(set_true(index, index2));

  const [x, setX] = useState();
  const handleClickRadioButton2 = (e) => {
    setX(e.target.value);
  };
  const [y, setY] = useState("");
  const handlediscriptrion = (e) => {
    setY(e.target.value);
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

    // 주관식 답변 ( 마지막 한글자가 입력 안되어서 수정 필요!!!!!!!!!!!!!@!@@!)
    const Description = (e) => dispatch(description(data[props.num].id, y));

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
          value={y}
          onChange={(e) => {
            Description(e);
            handlediscriptrion(e);
          }}
        ></Styled.FormInput>
      </>
    ) : null;
  });

  // const question_list = data.map(({ id, type, isduplicate, answer }) => (
  //   <form key={id} id="content" onChange={handleClickRadioButton2}>
  //     {answer.map(({ id: level, content }) => (
  //       <>
  //         <Styled.FormCheckLeft
  //           type={type}
  //           name={id}
  //           id={level}
  //         ></Styled.FormCheckLeft>
  //         <Styled.FormCheckText htmlFor={level}>{content}</Styled.FormCheckText>
  //       </>
  //     ))}
  //   </form>
  // ));

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
