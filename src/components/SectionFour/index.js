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
import img from "../../images/part.png";

const SectionFour = () => {
  return (
    <FourContainer>
      <FourTextBox>
        <FourH1>정답은 오블의 우리동네 인플루언서입니다</FourH1>
        <FourP>
          100% 개인화 마케팅 시대, <p /> 전문성을 갖춘 지역기반 인플루언서를
          배정해드립니다
        </FourP>
      </FourTextBox>
      <FourContent>
        <FourImgBox>
          <FourImg src={img}></FourImg>
        </FourImgBox>
        <FourListBox>
          <FourUl>
            <FourList>모집 인원 대비 평균 200% 이상 모집</FourList>
            <FourList>업계 최다 인플루언서 수 보유</FourList>
            <FourList>13년 업계의 업계 최다 캠페인 성공사례</FourList>
            <FourList>블로그 체험단 진행시 플레이스 광고 관리 무료</FourList>
            <FourList>네이버 우수 인플루언서 100% 보장형 체험단</FourList>
            <FourList>인플루언서 직접 선정 시스템</FourList>
          </FourUl>
        </FourListBox>
      </FourContent>
    </FourContainer>
  );
};

export default SectionFour;
