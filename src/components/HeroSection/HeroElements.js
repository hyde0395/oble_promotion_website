import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 700px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 830px;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1400px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  margin-bottom: 100px;
  /* margin-bottom 부분은 나중에 컨텐츠 추가시 삭제 할 수도 있음 */

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeroTextBox = styled.div`
  right: auto;
  position: relative;
  justify-content: center;
  justify-items: center;
  margin: auto;
  @media screen and (max-width: 960px) {
    margin-right: 0;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    right: auto;
    margin-top: 200px;
    margin-bottom: 30px;
    margin-right: 0;
  }
`;

export const HeroH1 = styled.h1`
  color: #000000;
  font-size: 48px;
  text-align: center;
  justify-content: center;
  justify-items: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 960px) {
    font-size: 36px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #000000;
  font-size: 24px;
  text-align: center;
  justify-content: center;
  justify-items: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const HeroVideoBox = styled.div`
  display: flex;
`;

export const HeroVideo = styled.video`
  width: 100%;
  height: 400px;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  transition: all 0.2s ease-in-out;
  border-radius: 15px;
  margin-left: 100px;
  margin-left: auto;
  @media screen and (max-width: 960px) {
    width: 300px;
    height: 200px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 400px;
    margin-left: 0;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 300px;
  }
`;
