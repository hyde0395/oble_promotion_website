import styled from "styled-components";
import BgImg from "../../images/part.png";

export const ThreeContainer = styled.div`
  height: 300px;
  padding-top: 130px;
`;

export const TreeTextBox = styled.div`
  color: #ffffff;
  margin: auto;
`;

export const ThreeHeadBox = styled.div`
  display: flex;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    URL(${BgImg});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  height: 250px;
  text-align: center;

  @media screen and (max-width: 960px) {
    height: 200px;
  }
  @media screen and (max-width: 768px) {
    height: 180px;
  }
`;

export const ThreeH1 = styled.h1`
  font-size: 2.8rem;

  @media screen and (max-width: 960px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
