import React from "react";
import {
  HeroContainer,
  TextWrapper,
  HeroTextBox,
  HeadLine,
  Subtitle,
  BtnBox,
  BtnText,
  ArrowDown,
  ScrollText,
  Inline,
} from "./SectionOneElements";
import { Link } from "react-scroll";

const SectionOne = () => {
  return (
    <HeroContainer>
      <TextWrapper>
        <HeroTextBox>
          <Subtitle>홍보의 가장 근본이자 확실한 방법을 아시나요?</Subtitle>
          <Subtitle>
            단언컨대 <HeadLine>입소문</HeadLine>입니다.
          </Subtitle>
          <Subtitle>
            <Inline>
              오블은 <HeadLine>입소문</HeadLine>을 효과적으로{" "}
            </Inline>
            활용하는 마케팅을 추구합니다.
          </Subtitle>
        </HeroTextBox>
      </TextWrapper>
      <ScrollText>
        <div style={{ color: "#3d85c1", display: "inline" }}>
          입소문으로 무장한 합리적인 마케팅 방법 확인하기
        </div>
      </ScrollText>
      <Link to="HeroSection" spy={true} smooth={true}>
        <BtnBox>
          <ArrowDown></ArrowDown>
        </BtnBox>
      </Link>
      <BtnText>scroll</BtnText>
    </HeroContainer>
  );
};

export default SectionOne;
