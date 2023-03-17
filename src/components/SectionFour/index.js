import React from "react";
import {
  FourContainer,
  FourContent,
  FourTextBox,
  FourH1,
  FourP,
  FourImg,
  FourImgBox,
  FourUl,
  FourList,
  FourListBox,
} from "./SectionFourElements";
import img from "../../images/AppScreen.png";

const SectionFour = () => {
  return (
    <FourContainer id="intro">
      <FourTextBox>
        <FourH1>정답은 오블의 우리동네 인플루언서입니다</FourH1>
        <FourP>100% 개인화 마케팅 시대,</FourP>
        <FourP>전문성을 갖춘 지역기반 인플루언서를 배정해드립니다</FourP>
      </FourTextBox>
      <FourContent>
        <FourImgBox>
          <FourImg src={img}></FourImg>
        </FourImgBox>
        <FourListBox>
          <FourUl>
            <FourList>실제 지역기반 전문 인플루언서 보유</FourList>
            <FourList>지역/카테고리 별 인플루언서 마케팅</FourList>
            <FourList>업종별 맞춤 솔루션 제공</FourList>
            <FourList>신뢰할 수 밖에 없는 후불결제 시스템</FourList>
            <FourList>인플루언서 등급 별 칭호 부여</FourList>
            <FourList>데이터 기반 결과 보고서 제공</FourList>
          </FourUl>
        </FourListBox>
      </FourContent>
    </FourContainer>
  );
};

export default SectionFour;
