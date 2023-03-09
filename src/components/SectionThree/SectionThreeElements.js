import styled from "styled-components";
import BgImg from "../../images/part.png";

export const ThreeContainer = styled.div`
  height: 400px;
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
  font-size: 3.5rem;
`;
