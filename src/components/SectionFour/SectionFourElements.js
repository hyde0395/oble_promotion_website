import styled from "styled-components";

export const FourContainer = styled.div`
  height: 900px;
`;

export const FourContent = styled.div`
  z-index: 3;
  max-width: 1500px; //가로 최대 크기
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 700px;
  margin-bottom: 100px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FourImg = styled.img``;

export const FourTextBox = styled.div`
  margin: 0;
  height: 300px;
`;
export const FourH1 = styled.h1`
  text-align: center;
  margin-bottom: 10px;
  background-image: linear-gradient(135deg, #00b09b, #96c93d);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 81px;
`;

export const FourP = styled.p`
  float: left;
  background-image: linear-gradient(135deg, #3d85c1, #56a2d5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const FourImgBox = styled.div`
  position: relative;
  justify-content: center;
  justify-items: center;
  margin: auto;
  padding-right: 80px;
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

export const FourListBox = styled.div``;

export const FourUl = styled.ul``;

export const FourList = styled.li`
  color: #000;
`;
