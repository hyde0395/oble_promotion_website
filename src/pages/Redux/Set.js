import { type } from "@testing-library/user-event/dist/type";

/* 초기 상태 선언 */
const initialState = [
  { id: 1, answer: "" },
  { id: 2, answer: "" },
  { id: 3, answer: "" },
  { id: 4, answer: "" },
  { id: 5, answer: "" },
];

// 액션 함수

const MULTIPLE_SELECTIONS = "MULTIPLE_SELECTIONS";
const DELETE_SELECTIONS = "DELETE_SELECTIONS";
const SELECT = "SELECT";
const MANY_SELECT = "MANY_SELECT";

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
export const Delete_Selections = (a, b) => ({
  type: DELETE_SELECTIONS,
  a,
  b,
});
export const Multiple_Selections = (a, b) => ({
  type: MULTIPLE_SELECTIONS,
  a,
  b,
});

// 리듀서
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MULTIPLE_SELECTIONS:
      return [...state, [`"${action.b}" : "${action.a}"`]];

    case DELETE_SELECTIONS:
      return state.filter((item) => item === action.a);

    case SELECT:
      return state.map((user) =>
        user.id === action.id ? { ...user, answer: action.value } : user
      );

    case MANY_SELECT:
      return state.map((user) =>
        user.id === action.id
          ? {
              ...user,

              answer: user.answer.concat(
                state[user.id].answer,
                "/",
                action.value
              ),
            }
          : user
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
