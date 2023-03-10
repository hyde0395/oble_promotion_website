import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

//pirmary와 big, fontBig부분을 좀 더  보강해야 함.

export const Button = styled(LinkS)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#3854e0" : "#ffffff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#ffffff" : "#000000")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#000000" : "#010606")};
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileButton = styled(LinkS)`
  display: none;

  @media screen and (max-width: 768px) {
    border-radius: 50px;
    background: ${({ primary }) => (primary ? "#3854e0" : "#ffffff")};
    color: #ffffff;
    white-space: nowrap;
    padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &hover {
      transition: all 0.2s ease-in-out;
      background: ${({ primary }) => (primary ? "#ffffff" : "#010606")};
    }
  }
`;

export const InfoButton = styled(LinkS)`
  border-radius: 50px;
  background: ${({ lightBg }) => (lightBg ? "#3854e0" : "#ffffff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ lightText }) => (lightText ? "#000000" : "#ffffff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#000000" : "#010606")};
  }
`;
