import styled from "styled-components";
import BgImg from "../../images/part.jpg";

export const ThreeContainer = styled.div`
  height: 900px;
  margin-top: 0;
  overflow: hidden;
`;

export const TreeTextBox = styled.div`
  color: #ffffff;
  margin: auto;
`;

export const ThreeHeadBox = styled.div`
  display: flex;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    URL(${BgImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 0;
  height: 200px;
  text-align: center;
`;

export const ThreeH1 = styled.h1``;
