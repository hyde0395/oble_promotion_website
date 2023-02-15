import React, { useState } from "react";
import Data from "../../components/Survey2/Data";
import * as Styled from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { select, many_select } from "../Redux/Set";
import reducer from "../Redux/Set";
import { Multiple_Selections } from "../Redux/Set";
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

  const question_list = data[props.num].answer.map((value, idx) => {
    const multiple_selections = () =>
      dispatch(Multiple_Selections(value.content, data[props.num].question));
    const Many_select = (e) =>
      dispatch(many_select(data[props.num].id, e.target.value));
    const Select = (e) => dispatch(select(data[props.num].id, e.target.value));
    // const onCheckedElement = (checked, item) => {
    //   if (checked) {
    //     Select();
    //   }
    //   // else if (!checked) {
    //   //   setCheckedList(checkedList.filter(el => el !== item));
    //   // }
    // };
    // <form onChange={handleClickRadioButton2}> </form>;
    return data[props.num].isduplicate === true ? (
      <>
        {/* 복수 선택 : 체크박스 */}
        <Styled.FormCheckLeft
          type="checkbox"
          value={`${value.content}`}
          id={`${props.num}${idx}`}
          // onChange={multiple_select`ions}
          onChange={(e) => {
            if (e.target.checked) {
              Many_select(e);
            } else if (!e.target.checked) {
            }
            // onCheckedElement(e.target.checked, e.target.value);
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
            // multiple_selections();
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
          placeholder={`${value.content}`}
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
