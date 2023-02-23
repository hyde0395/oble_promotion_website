import styled from "styled-components";
import BgImg from "../../images/part.png";
export const SixContainer = styled.div`
  height: 900px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    URL(${BgImg});
`;

export const SixContent = styled.div`
  z-index: 3;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 700px;
  margin-bottom: 100px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SixImg = styled.img`
  width: 500px;
  height: 500px;
`;

export const SixTextBox = styled.div`
  margin: 0;
  height: 300px;
`;
export const SixH1 = styled.h1`
  margin-bottom: 10px;
  background-image: linear-gradient(135deg, #00b09b, #96c93d);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 81px;
`;

export const SixImgBox = styled.div`
  position: relative;
  justify-content: center;
  justify-items: center;
  margin: auto;
  padding-right: 100px;
  padding-bottom: 200px;
  padding-left: 400px;
  background-color: #808080;

  @media screen and (max-width: 960px) {
    margin-right: 0;
    width: 100%;
    padding-left: 0px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 200px;
    margin-bottom: 30px;
    padding-right: 0px;
    padding-left: 0px;
  }
`;

export const SixListBox = styled.div`
  margin-right: 10px;
  margin-bottom: 100px;
`;

export const SixUl = styled.ul``;

export const SixList = styled.li`
  font-size: 25px;
  color: #000;
`;
