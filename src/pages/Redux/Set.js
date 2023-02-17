import { type } from "@testing-library/user-event/dist/type";

/* 초기 상태 선언 */
const initialState = [
  { id: 0, answer: "1" },
  { id: 1, answer: "" },
  { id: 2, answer: "" },
  { id: 3, answer: "" },
  { id: 4, answer: "" },
  { id: 5, answer: "" },
  { id: 6, answer: "" },
  { id: 7, answer: "" },
  { id: 8, answer: "" },
  { id: 9, answer: "" },
  { id: 10, answer: "" },
  { id: 11, answer: "" },
  { id: 12, answer: "" },
  { id: 13, answer: "" },
  { id: 14, answer: "" },
  { id: 14, answer: "1" },
];

// 액션 함수

const DELETE_SELECTIONS = "DELETE_SELECTIONS";
const SELECT = "SELECT";
const MANY_SELECT = "MANY_SELECT";
const DESCRIPTION = "DISCRIPTION";

export const description = (id, value) => ({
  type: DESCRIPTION,
  id,
  value,
});
export const many_select = (id, value) => ({
  type: MANY_SELECT,
  id,
  value,
});
export const select = (id, value) => ({
  type: SELECT,
  id,
  value,
});
export const Delete_Selections = (id, value) => ({
  type: DELETE_SELECTIONS,
  id,
  value,
});

// 리듀서
export default function reducer(state = initialState, action) {
  switch (action.type) {
    // 단일선택 답변
    case SELECT:
      return state.map((user) =>
        user.id === action.id ? { ...user, answer: action.value } : user
      );
    // 복수선택 답변
    case MANY_SELECT:
      return state.map((user) =>
        user.id === action.id
          ? {
              ...user,
              answer: "",
              answer: user.answer.concat(
                "/",
                action.value
                // state[user.id].answer,
              ),
            }
          : user
      );
    //복수 선택 삭제시 답변
    case DELETE_SELECTIONS:
      return state.map((user) =>
        user.id === action.id
          ? { ...user, answer: user.answer.replace(`/${action.value}`, "") }
          : user
      );
    //주관식 답변  (마지막 한글자가 입력처리가 안됨!@!@!#!#!!#@#@! 수정 필요)
    case DESCRIPTION:
      return state.map((user) =>
        user.id === action.id ? { ...user, answer: action.value } : user
      );

    // state: state.selected[action.index].push(action.index2),

    // case SET_TRUE:
    //   return state.map((state2, index) => {
    //     if (index !== action.index) {
    //       // 이는 관심없는 요소입니다 - 그대로 유지하세요
    //       return state2;
    //     }
    //     return state2.map((item, index2) => {
    //       if (index2 !== action.index2) {
    //         // 이는 관심없는 요소입니다 - 그대로 유지하세요
    //         return item;
    //       }

    //       // 그게 아니면, 우리가 원하는것입니다. - 업데이트된 값을 반환하세요
    //       return {
    //         ...item,
    //         ...action.item,
    //         item: !item,
    //       };
    //     });
    //   });

    default:
      return state;
  }
}
