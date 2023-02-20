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
import { Link } from "react-scroll";

const SectionOne = () => {
  return (
    <HeroContainer>
      <TextWrapper>
        <HeroTextBox>
          <Subtitle>광고는 재밌고 리얼해야</Subtitle>
          <HeadLine>성공한다!</HeadLine>
        </HeroTextBox>
      </TextWrapper>
      <Link to="HeroSection" spy={true} smooth={true}>
        <BtnBox>
          <ScrollButton></ScrollButton>
        </BtnBox>
      </Link>

      <BtnText></BtnText>
    </HeroContainer>
  );
};

export default SectionOne;
