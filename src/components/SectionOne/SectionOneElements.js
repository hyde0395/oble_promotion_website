import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 100vw;
`;

export const TextWrapper = styled.div`
  height: 600px;
  padding-top: 170px;
`;

export const HeroTextBox = styled.div`
  text-align: center;
  margin-bottom: 200px;
  margin-top: 50px;
`;

export const Subtitle = styled.h2`
  font-size: 100px;
  font-weight: 900;
`;

export const HeadLine = styled.h1`
  font-size: 110px;
  font-weight: 900;
  background-image: linear-gradient(120deg, #7d6ae7, #56a2d5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const BtnBox = styled.div`
  margin: 0 auto;
  width: 50px;
  height: 50px;
  border: 2px solid #3d85c1;
  border-radius: 50%;
  margin-top: 100px;
  cursor: pointer;
`;
export const ArrowBox = styled.div`
  display: flex;
`;
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
