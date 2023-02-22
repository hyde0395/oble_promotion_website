import styled from "styled-components";
import BgImg from "../../images/part.png";

export const ThreeContainer = styled.div`
  height: 700px;
  margin-top: 0;
  overflow: hidden;
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
`;

export const ThreeH1 = styled.h1`
  font: 200px;
`;

export const ThreeSideBox = styled.div`
  display: flex;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    URL(${BgImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-left: 70%;
  height: 150px;
  margin-top: 200px;
`;
