import styled from "styled-components";

// 전체 컨테이너
export const EightContainer = styled.div`
  height: 1000px;
  background-color: #3b68d9;
`;
// 위쪽 메인 텍스트 감싸는 div
export const EightTextWrap = styled.div`
  text-align: center;
  /* background-color: #474747; */
  padding-top: 70px;
  margin-bottom: 40px;
`;
export const EightContent = styled.div``;

export const EightH1 = styled.h1`
  font-size: 54px;
  display: inline;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 468px) {
    font-size: 2rem;
  }
`;

export const EightH1Line = styled.h1`
  font-size: 54px;
  box-shadow: inset 0 -30px 0 #eaff2f; //-값을 높이면 두께가 더 두꺼워짐
  line-height: 21px;
  display: inline;
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 468px) {
    font-size: 2rem;
  }
`;

export const EightH2 = styled.h2`
  font-size: 40px;
  display: inline;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 468px) {
    font-size: 2rem;
  }
`;

export const EightH2Line = styled.h2`
  font-size: 40px;
  text-decoration: underline;
  text-underline-offset: 5px;
  display: inline;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 468px) {
    font-size: 2rem;
  }
`;
export const HeadNav = styled.div`
  top: 0;
  height: 60px;
  /* background-color: #818181; */
  display: flex;
`;

// 사장님들 후기 슬라이드 카드
export const HeadCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 447px;
  width: 270px;
  background-color: #ffffff;
  border-radius: 10px;

  @media (max-width: 400px) {
    width: 300px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const HeadTitleText = styled.p`
  font-size: 18px;
  font-weight: 300;
  padding: 15px 5px 10px 10px;
  color: #56a2d5;
`;

export const MaintextWrapper = styled.div`
  display: flex;
  max-width: 250px;
  justify-content: center;
`;

export const HeadMainText = styled.p`
  font-size: 14px;
  padding: 7px 7px 30px 13px;
`;

export const HeadP = styled.p`
  font-size: 18px;
  margin: auto 0;
  text-align: center;
  padding-top: 15px;
`;

// 광고주 기업 로고 이미지
export const SlideImg = styled.img`
  width: 240px;
  height: 140px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 400px) {
    width: 200px;
    height: 100px;
  }
`;
export const HeadSlideWrap = styled.div`
  max-width: 1780px;
  margin: 0 auto;
`;

export const SubSlideWrap = styled.div`
  margin-top: 200px;
`;

export const Inline = styled.p`
  display: inline;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MainImgs = styled.img`
  height: 220px;
  width: 240px;
  margin: auto;
  display: block;
`;
