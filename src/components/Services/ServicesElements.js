import styled from "styled-components";
import ArrowBg from "../../images/ArrowBg.png";
// 전체 섹션 컨테이너
export const ServicesContainer = styled.div`
  height: 900px;
  display: flex;
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: URL(${ArrowBg});
  background-repeat: no-repeat;
  margin: auto;

  @media screen and (max-width: 1000px) {
    height: 1400px;
  }

  @media screen and (max-width: 768px) {
    height: 2300px;
  }

  @media scr3een and (max-width: 480px) {
    height: 2400px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 25px;
  padding: 0 40px;
  flex-wrap: wrap;

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
// 각 카드 부분
export const ServicesCard = styled.div`
  display: flex;
  width: 260px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  max-height: 380px;
  padding: 30px;
  background: #ffffff;
  border: solid 1px #949494;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2 ease-in-out;
  overflow: hidden;
  margin-bottom: 10px;
  box-shadow: 10px 5px 5px #949494;

  /* @media screen and (max-width: 1250px) {
    width: 200px;
  }

  @media screen and (max-width: 768px) {
    width: 280px;
  }

  @media scr3een and (max-width: 480px) {
    width: 280px;
  } */

  &hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
// icon 요소
export const ServicesIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

// 매우 간편한 마케팅 프로세스! 부분
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 24px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH1Two = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 64px;
  background-image: linear-gradient(135deg, #3d85c1, #56a2d5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media screen and (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 8px;
`;
export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  padding-bottom: 10px;
`;
export const ServicesDay = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
  margin-top: 10px;
  background-image: linear-gradient(135deg, #3d85c1, #56a2d5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
