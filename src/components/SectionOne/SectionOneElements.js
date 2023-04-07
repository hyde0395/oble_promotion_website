import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 100vh;
  background: #1f274d;
`;

export const TextWrapper = styled.div``;

export const HeroTextBox = styled.div`
  margin-bottom: 100px;
  padding-top: 100px;
  margin-left: 20%;

  @media screen and (max-width: 480px) {
    margin-left: 0;
  }
`;

export const Subtitle = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const HeadLine = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  background-image: linear-gradient(120deg, #7d6ae7, #56a2d5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  display: inline;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const BtnBox = styled.div`
  margin: 0 auto;
  width: 50px;
  height: 50px;
  border: 2px solid #3d85c1;
  border-radius: 50%;
  cursor: pointer;
`;
// 화살표 css
export const ArrowDown = styled.div`
  left: 0;
  top: 0;
  content: "";
  width: 25px; /* 사이즈 */
  height: 25px; /* 사이즈 */
  border-top: 2px solid #3d85c1; /* 선 두께 */
  border-right: 2px solid #3d85c1; /* 선 두께 */
  transform: rotate(135deg); /* 각도 */
  margin-left: 10px;
  margin-top: 5px;
`;

export const BtnText = styled.div`
  text-align: center;
  color: #3d85c1;
  cursor: pointer;
`;

export const ScrollText = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: #ffffff;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
