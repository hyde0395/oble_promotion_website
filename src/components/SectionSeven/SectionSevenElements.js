import styled from "styled-components";

export const SevenContainer = styled.div`
  height: 900px;
  padding-top: 100px;
`;

export const SevenBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  height: 600px;
  margin-top: 50px;
`;
export const SevenH1 = styled.h1`
  text-align: center;
  font-size: 72px;
`;

export const SevenH1Two = styled.h1`
  font-size: 72px;
  text-align: center;
`;

export const SevenCard = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  height: 220px;
  width: 600px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 40px;
  border-radius: 18px;
  background-image: linear-gradient(135deg, #7d6ae7, #56a2d5);

  @media screen and (max-width: 768px) {
    width: 440px;
    height: 180px;
  }
`;

export const SevenCardText = styled.h1`
  color: #ffffff;
  padding-top: 20px;
  text-align: center;
  font-size: 117px;
  @media screen and (max-width: 768px) {
    font-size: 80px;
  }
`;
export const SevenBtn = styled.div`
  width: 250px;
  height: 50px;
  border-radius: 30px;
  border: solid 1px #000000;
  margin: 0 auto;
  background: #ffffff;
  text-align: center;
  margin-top: 30px; //버튼 위 여백
  padding-top: 12px;
  font-size: 17px;
  font-weight: 400;
  cursor: pointer;

  :hover {
    background-color: #d3d3d3;
    transition: 0.2s ease-in-out;
  }
`;
export const SevenH2 = styled.h2`
  text-align: center;
  font-size: 24px;
`;
