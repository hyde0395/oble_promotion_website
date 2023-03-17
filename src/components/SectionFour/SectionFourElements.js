import styled from "styled-components";
export const FourContainer = styled.div`
  height: 1000px;
  padding-top: 100px;
`;

export const FourContent = styled.div`
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
// 이미지 크기
export const FourImg = styled.img`
  width: 500px;
  height: 700px;

  @media screen and (max-width: 960px) {
    width: 100px;
    height: 190px;
  }
  @media screen and (max-width: 768px) {
    height: 300px;
    width: 200px;
  }
`;

export const FourTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  max-width: 1600px;
  padding-left: 5%;
`;
export const FourH1 = styled.h1`
  margin-bottom: 10px;
  background-image: linear-gradient(135deg, #00b09b, #96c93d);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 81px;

  @media screen and (max-width: 960px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const FourP = styled.p`
  background-image: linear-gradient(135deg, #3d85c1, #56a2d5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 2rem;
  font: bold;
  /* text-align: center; */
`;

export const FourImgBox = styled.div`
  display: flex;

  @media screen and (max-width: 960px) {
    margin-right: 0;
    width: 100%;
    padding-left: 0px;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 30px;
    padding-right: 0px;
    padding-left: 0px;
  }
`;

export const FourListBox = styled.div`
  margin-right: 10px;
  margin-bottom: 100px;
`;

export const FourUl = styled.ul``;

export const FourList = styled.li`
  font-size: 25px;
`;
