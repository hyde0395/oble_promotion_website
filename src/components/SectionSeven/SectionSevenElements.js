import styled from "styled-components";

export const SevenContainer = styled.div`
  height: 900px;
  padding-top: 130px;
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

export const Inline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  display: inline;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    display: block;
  }
`;

export const SevenH1 = styled.h1`
  text-align: center;
  font-size: 3rem;

  @media screen and (max-width: 968px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.8rem;
    display: block;
  }
`;

export const SevenH1Two = styled.h1`
  font-size: 3rem;
  text-align: center;
  padding-top: 20px;
`;

export const SevenCard = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  height: 120px;
  width: 360px;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 40px;
  border-radius: 18px;
  background-image: linear-gradient(135deg, #7d6ae7, #56a2d5);

  @media screen and (max-width: 768px) {
    width: 440px;
    height: 180px;
  }
  @media screen and (max-width: 768px) {
    height: 160px;
    width: 380px;
  }
`;

export const SevenCardText = styled.h1`
  color: #ffffff;
  padding-top: 20px;
  text-align: center;
  font-size: 3rem;
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

export const Seventext = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  padding-top: 50px;
  color: #ffffff;
`;
