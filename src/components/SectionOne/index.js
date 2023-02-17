import React from "react";
import {
  HeroContainer,
  TextWrapper,
  HeroTextBox,
  HeadLine,
  Subtitle,
  ScrollButton,
  BtnBox,
  BtnText,
} from "./SectionOneElements";

const SectionOne = () => {
  return (
    <HeroContainer>
      <TextWrapper>
        <HeroTextBox>
          <Subtitle>광고는 재밌고 리얼해야</Subtitle>
          <HeadLine>성공한다!</HeadLine>
        </HeroTextBox>
      </TextWrapper>
      <BtnBox>
        <ScrollButton></ScrollButton>
      </BtnBox>
      <BtnText></BtnText>
    </HeroContainer>
  );
};

export default SectionOne;
