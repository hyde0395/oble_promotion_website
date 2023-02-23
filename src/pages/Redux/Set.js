import { type } from "@testing-library/user-event/dist/type";

/* 초기 상태 선언 */
const initialState = [
  { id: 0, question: "participantId", answer: "1" },
  {
    id: 1,
    question: " 광고주님! 반갑습니다!  어떤 사업을 하고 계시나요? ",

    answer: "",
  },
  {
    id: 2,
    question: "광고주님! 반갑습니다!  어떤 사업을 하고 계시나요? ",
    answer: "",
  },
  {
    id: 3,
    question:
      "공공기관 및 프렌차이즈 본사의 문의는 연락처를 남겨주시면 유선연락 드리겠습니다 ",
    answer: "",
  },
  { id: 4, question: "광고주님이 운영하시는 업종은 무엇인가요? ", answer: "" },

  {
    id: 5,
    question: " 광고주님이 운영하시는 업종은 무엇인가요?",
    answer: "",
  },

  {
    id: 6,
    question: "어떤 인플루언서[체험단]이 우리 매장을 홍보해주셨으면 좋겠나요? ",
    answer: "",
  },
  { id: 7, question: "어떤 방식을 통해 매체에 노출시키고 싶나요?", answer: "" },
  { id: 8, question: "어떤 방식의 홍보 전략을 원하시나요?", answer: "" },
  { id: 9, question: "자사의 핵심 타겟 성별은 무엇입니까?", answer: "" },
  { id: 10, question: "광고하고자 하는 특정 연령은 무엇입니까?", answer: "" },

  { id: 11, question: " 자사의 핵심 타겟의 직업군은 무엇입니까?", answer: "" },

  { id: 12, question: "자사의 핵심 타겟의 직업군은 무엇입니까?", answer: "" },
  {
    id: 13,
    question: "자사의 오프라인 매장 주소 혹은 제품 온라인 구매처를 남겨주세요",
    answer: "",
  },
  { id: 14, question: "광고주님의 연락처는 무엇입니까?", answer: "" },
  { id: 15, question: "", answer: "1" },
];

// 액션 함수

const DELETE_SELECTIONS = "DELETE_SELECTIONS";
const SELECT = "SELECT";
const MANY_SELECT = "MANY_SELECT";
const DESCRIPTION = "DISCRIPTION";
const INSERT = "INSERT";

export const insert = (value) => ({
  type: INSERT,
  value,
});
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

    // case INSERT:
    //   return state.map((user) => {

    //   });

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
