const initialState = "";

//액션 함수

const ADDHEADER = "ADDHEADER";

export const insert = (value) => ({
  type: ADDHEADER,
  value,
});

//리듀서

export default function header(state = initialState, action) {
  switch (action.type) {
    case ADDHEADER:
      return (state = action.value);
    default:
      return state;
  }
}
