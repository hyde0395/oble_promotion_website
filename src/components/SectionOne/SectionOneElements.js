import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 800px;
`;

export const TextWrapper = styled.div`
  height: 600px;
  padding-top: 100px;
  @media screen and (max-width: 768px) {
    height: 500px;
  }

  @media screen and (max-width: 480px) {
    height: 500px;
  }
`;

export const HeroTextBox = styled.div`
  text-align: center;
  margin-bottom: 200px;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const Subtitle = styled.h2`
  font-size: 100px;
  font-weight: 900;

  @media screen and (max-width: 768px) {
    font-size: 80px;
  }

  @media screen and (max-width: 480px) {
    font-size: 60px;
  }
`;

export const HeadLine = styled.h1`
  font-size: 110px;
  font-weight: 900;
  background-image: linear-gradient(120deg, #7d6ae7, #56a2d5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media screen and (max-width: 768px) {
    font-size: 80px;
  }

  @media screen and (max-width: 480px) {
    font-size: 60px;
  }
`;

export const BtnBox = styled.div`
  margin: 0 auto;
  width: 50px;
  height: 50px;
  border: 2px solid #3d85c1;
  border-radius: 50%;
  margin-top: 30px;
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
