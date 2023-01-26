import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
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

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const MobileButton = styled(Link)`
  display: none;

  @media screen and (max-width: 760px) {
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
