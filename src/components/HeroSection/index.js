import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button, MobileButton } from "../ButtonElements";
import {
  HeroContainer,
  HeroContent,
  HeroTextBox,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  HeroVideo,
  HeroVideoBox,
  IconBox,
} from "./HeroElements";
import { SurveyLink } from "../Navbar/NavbarElements";
import { FacebookIcon } from "react-share";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="HeroSection">
      <HeroContent>
        <HeroTextBox>
          <IconBox>
            <FacebookIcon size={35} round={true}></FacebookIcon>
            <FacebookIcon size={35} round={true}></FacebookIcon>
            <FacebookIcon size={35} round={true}></FacebookIcon>
            <FacebookIcon size={35} round={true}></FacebookIcon>
          </IconBox>
          <HeroH1>
            내 매장에 적합한
            <p />
            맞춤 인플루언서 찾고 계시나요?
          </HeroH1>
          {/* <HeroP>처음하는 사람도 누구나 쉽게, 오블 마켓팅!</HeroP> */}
          <HeroBtnWrapper>
            <Button
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              <SurveyLink to="/Test">
                60초 자동상담 받기 {hover ? <ArrowForward /> : <ArrowRight />}
              </SurveyLink>
            </Button>
          </HeroBtnWrapper>
        </HeroTextBox>

        <HeroVideoBox>
          <HeroVideo
            autoPlay
            muted
            width="100%"
            height="100%"
            src={Video}
            controls
          />
        </HeroVideoBox>

        <HeroBtnWrapper>
          <MobileButton
            to="dkjad"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            60초 자동상담 받기 {hover ? <ArrowForward /> : <ArrowRight />}
          </MobileButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};
export default HeroSection;
