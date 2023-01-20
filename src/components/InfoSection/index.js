import React from "react";
import { InfoButton } from "../ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Colmn1,
  Colmn2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";
export const InfoSection = ({
  id,
  imgStart,
  topLine,
  headLine,
  description,
  buttonLabel,
  img,
  lightBg,

  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Colmn1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{headLine}</Heading>
                <Subtitle>{description}</Subtitle>
                <BtnWrap>
                  <InfoButton
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    {buttonLabel}
                  </InfoButton>
                </BtnWrap>
              </TextWrapper>
            </Colmn1>
            <Colmn2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Colmn2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
