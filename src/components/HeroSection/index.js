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
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTextBox>
          <HeroH1>
            인플루언서 마케팅,
            <p />
            정직하게 해야 성공합니다.
          </HeroH1>
          <HeroP>이런 말 들어 보신적 있으신가요?</HeroP>
          <HeroBtnWrapper>
            <Button
              to="dkjad"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              60초 자동상담 받기 {hover ? <ArrowForward /> : <ArrowRight />}
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
