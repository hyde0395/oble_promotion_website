/* 초기 상태 선언 */
const initialState = {
  selected: [
    [false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
  ],
};

const SET_TRUE = "SET_TRUE";
const SET_FALSE = "SET_FALSE";

export const set_true = (index, index2) => ({ type: SET_TRUE, index, index2 });
export const set_false = (num1, num2) => ({ type: SET_FALSE, num1, num2 });

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TRUE:
      return state.map((state2, index) => {
        if (index !== action.index) {
          // 이는 관심없는 요소입니다 - 그대로 유지하세요
          return state2;
        }
        return state2.map((item, index2) => {
          if (index2 !== action.index2) {
            // 이는 관심없는 요소입니다 - 그대로 유지하세요
            return item;
          }

          // 그게 아니면, 우리가 원하는것입니다. - 업데이트된 값을 반환하세요
          return {
            ...item,
            ...action.item,
            item: !item,
          };
        });
      });

    // case SET_FALSE:
    //   return {
    //     ...state,
    //     trash: selected[num1].splice(num2, 1, false),
    //     // selected: selected,
    //   };

    default:
      return state;
  }
}
