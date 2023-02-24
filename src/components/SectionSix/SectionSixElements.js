import styled from "styled-components";
import BgImg from "../../images/part.png";
export const SixContainer = styled.div`
  height: 900px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    URL(${BgImg});
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SixContent = styled.div`
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 900px;
  background-color: #ff3232;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SixImg = styled.img`
  width: 600px;
  height: 700px;
  margin: 0 auto;
`;

export const SixTextBox = styled.div`
  margin: 0;
  height: 300px;
  color: #ffffff;
  background-color: #444444;
  margin-bottom: 200px; // 텍스트 아래 여백 설정
`;
export const SixH1 = styled.h1`
  margin-bottom: 10px;
  font-size: 60px;
`;
export const SixH1Two = styled.h1`
  margin-bottom: 10px;
  text-decoration: underline;
  text-underline-offset: 14px;
  font-size: 60px;
`;

export const SixImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 800px;
  width: 700px;
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
