import styled from "styled-components";

// 설문 문항 감싸는 컨테이너
export const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// 맨위 제목 스타일
export const TitleStyled = styled.div`
  margin-top: 270px;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 100px;
  text-align: center;
`;
// 질문 스타일
export const BoxStyled = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 100px;
  font-size: 27px;
  font-weight: 700;
  margin-bottom: 10px;
  @media screen and (min-width: 1600px) {
    width: 750px;
    justify-content: flex-start;
    padding-right: 260px;
    margin-left: 750px;
  }
`;

// 중복시 서브 타이틀
export const Subtitle = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 260px;
  color: rgb(75, 94, 237);
  font-size: 1rem;
  font-weight: 600;
  font-style: oblique;
  margin-bottom: 6px;
  @media screen and (min-width: 1600px) {
    justify-content: flex-start;
    padding-right: 260px;
    margin-left: 750px;
  }
`;

//  소제목
export const Subquestion = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  font-size: 1rem;
  font-weight: 600;
  @media screen and (min-width: 1600px) {
    justify-content: flex-start;
    padding-right: 260px;
    margin-left: 750px;
  }
`;
export const Desc = styled.div`
  margin-top: 150px;
  margin-bottom: 5px;
`;

// 설문 문항 스타일
export const ButtonStyled = styled.button`
  width: 350px;
  height: 50px;
  /* #d0dfff; */
  background-color: #d0dfff;
  color: black;
  cursor: pointer;
  display: block;
  margin-top: 10px;
  border: 1.5px solid rgb(75, 94, 237);
  border-radius: 5px;
  color: rgb(49, 61, 154);
  font-weight: 700;
  font-size: 15px;
`;

//설문 답변 스타일
export const FormCheckText = styled.label`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-right: 200px;
  width: 220px;
  height: 40px;
  margin-top: 10px;
  color: rgb(49, 61, 154);
  border: 1.5px solid rgb(75, 94, 237);
  font-weight: 700;
  font-size: 15px;
  padding: 8px;
  background-color: #d0dfff;
  border-radius: 5px;

  cursor: pointer;
`;

export const FormCheckLeft = styled.input`
  &:checked + ${FormCheckText} {
    background-color: #939ef4;
  }
  display: none;
`;

export const FormInput = styled.input`
  width: 400px;
  height: 100px;
  color: black;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  background-color: transparent;
  border: 1.5px solid rgba(0, 0, 0, 0.06666666666666667);
  outline: none;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    text-align: center;
  }
`;

// 전체 felx
export const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
`;

// 이전 다음 버튼 flex
// 반응형일 때 flex 조절 필요
export const ButtonFlex = styled.div`
  margin-top: 40px;
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  @media screen and (max-width: 1024px) {
    width: 40%;
  }
`;

// 이전 다음 버튼 스타일
export const ButtonStyled2 = styled.button`
  border: 1.5px solid rgb(75, 94, 237);
  width: 4rem;
  height: 3rem;
  background-color: rgb(75, 94, 237);
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 10px;

  &:disabled {
    opacity: 1;
    background: rgb(176, 176, 176);
    border: none;
  }
`;

//시작 버튼 flex
export const StartButtonFlex = styled.div`
  margin-top: 40px;
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

// 시작 버튼
export const ButtonStyled3 = styled.button`
  border: 1.5px solid rgb(75, 94, 237);
  background-color: rgb(75, 94, 237);
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 10px;
  width: 6rem;
  height: 3rem;
`;
