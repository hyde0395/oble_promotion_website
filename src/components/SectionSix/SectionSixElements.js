import styled from "styled-components";
import BgImg from "../../images/BgImg.png";

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

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 120px;
  }
`;
// Influencer 리스트 사진
export const SixImg = styled.img`
  width: 640px;
  height: 700px;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    width: 384px;
    height: 430px;
  }
  @media screen and (max-width: 768px) {
    width: 360px;
    height: 430px;
  }
`;

export const SixTextBox = styled.div`
  height: 300px;
  color: #ffffff;
  margin-bottom: 200px; // 텍스트 아래 여백 설정
`;
export const SixH1 = styled.h1`
  margin-bottom: 10px;
  font-size: 3.5rem;

  @media screen and (max-width: 960px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
  }
`;
export const SixH1Two = styled.h1`
  margin-bottom: 10px;
  text-decoration: underline;
  text-underline-offset: 14px;
  font-size: 60px;
  @media screen and (max-width: 960px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const SixImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 800px;
  width: 100%;
  /* background-color: #808080; */
  margin-right: 20px; // 통계 이미지 오른쪽 여백

  @media screen and (max-width: 960px) {
    margin-right: 0;
    margin-bottom: 100px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    margin-right: 0;
  }
`;

// 색상 있는 텍스트 박스
export const SixCard = styled.div`
  border-radius: 10px;
  height: 90px;
  width: 250px;
  background-color: #ffffff;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// 1,000명+ 텍스트
export const SixCardText = styled.h1`
  text-align: center;
  font-size: 55px;
  font-weight: 900;
  background-image: linear-gradient(120deg, #3d85c1, #56a2d5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
