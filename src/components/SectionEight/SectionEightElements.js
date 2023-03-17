import styled from "styled-components";

// 전체 컨테이너
export const EightContainer = styled.div`
  height: 1000px;
  background-color: #3d85c1;
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
`;

export const EightH1Line = styled.h1`
  font-size: 54px;
  box-shadow: inset 0 -30px 0 #eaff2f; //-값을 높이면 두께가 더 두꺼워짐
  line-height: 21px;
  display: inline;
`;

export const EightH2 = styled.h2`
  font-size: 40px;
  display: inline;
`;

export const EightH2Line = styled.h2`
  font-size: 40px;
  text-decoration: underline;
  text-underline-offset: 5px;
  display: inline;
`;
export const HeadNav = styled.div`
  top: 0;
  height: 60px;
  /* background-color: #818181; */
  display: flex;
`;

// 사장님들 후기 슬라이드 카드
export const HeadCard = styled.div`
  height: 300px;
  width: 270px;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
`;

export const HeadTitleText = styled.p`
  font-size: 18px;
  font-weight: 300;
  padding: 5px 5px 10px 10px;
  color: #56a2d5;
`;

export const MaintextWrapper = styled.div`
  display: flex;
  max-width: 250px;
  justify-content: center;
`;

export const HeadMainText = styled.p`
  font-size: 14px;
  padding: 7px 7px 13px 13px;
`;
// headcard Nav부분의 아이콘
export const HeadIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  margin-top: 9px;
`;

export const HeadP = styled.p`
  font-size: 18px;
  margin: auto 0;
  padding-left: 18px;
`;

// 광고주 기업 로고 이미지
export const SlideImg = styled.img`
  width: 240px;
  height: 140px;
  border-radius: 10px;
  overflow: hidden;
`;
export const HeadSlideWrap = styled.div`
  max-width: 1780px;
  margin: 0 auto;
`;

export const SubSlideWrap = styled.div`
  margin-top: 170px;
`;
