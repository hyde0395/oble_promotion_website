import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  SurveyLink,
} from "./NavbarElements";
import { useLocation } from "react-router-dom";

const Navbar = ({ toggle }) => {
  const location = useLocation();
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">OH! BLE</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              {location.pathname === "/" ? (
                <>
                  <SurveyLink to="/Test">60초 자동 상담</SurveyLink>
                  <NavLinks to="intro" smooth={true}>
                    오블소개
                  </NavLinks>
                  <NavLinks to="service" smooth={true}>
                    진행과정
                  </NavLinks>
                  <NavLinks to="section7" smooth={true}>
                    제안서받기
                  </NavLinks>
                </>
              ) : (
                <>
                  <SurveyLink to="/Test">60초 자동 상담</SurveyLink>
                  <SurveyLink to="/">오블소개</SurveyLink>
                  <SurveyLink to="/">진행과정</SurveyLink>
                  <SurveyLink to="/">제안서받기</SurveyLink>
                </>
              )}
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/Test">상담 받아보기</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
