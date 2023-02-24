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
  /* background-color: #ff3232; */

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
// Influencer 리스트 사진
export const SixImg = styled.img`
  width: 640px;
  height: 700px;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    width: 384px;
    height: 430px;
  }
  @media screen and (max-width: 768px) {
    width: 384px;
    height: 430px;
  }
`;

export const SixTextBox = styled.div`
  margin: 0;
  height: 300px;
  color: #ffffff;
  /* background-color: #444444; */
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
  /* background-color: #808080; */
  margin-right: 20px; // 통계 이미지 오른쪽 여백

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
