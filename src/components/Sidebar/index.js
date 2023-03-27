import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SurveyRoute,
} from "./SidebarElements";
import { useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, toggle }) => {
  const location = useLocation();
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            {location.pathname === "/" ? (
              <>
                <SurveyRoute onClick={toggle} to="/Test">
                  60초 자동 상담
                </SurveyRoute>
                <SidebarLink onClick={toggle} to="intro" smooth={true}>
                  오블 소개
                </SidebarLink>
                <SidebarLink onClick={toggle} to="service" smooth={true}>
                  진행과정
                </SidebarLink>
                <SidebarLink onClick={toggle} to="section7" smooth={true}>
                  제안서받기
                </SidebarLink>
              </>
            ) : (
              <>
                <SurveyRoute to="/Test">60초 자동 상담</SurveyRoute>
                <SurveyRoute to="/">오블 소개</SurveyRoute>
                <SurveyRoute to="/">진행과정</SurveyRoute>
                <SurveyRoute to="/">제안서 받기</SurveyRoute>
              </>
            )}
          </SidebarMenu>

          {location.pathname === "/" ? (
            <>
              <SideBtnWrap>
                <SidebarRoute to="/Test">상담받아보기</SidebarRoute>
              </SideBtnWrap>
            </>
          ) : (
            <>
              <SideBtnWrap>
                <SidebarRoute to="/">상담받아보기</SidebarRoute>
              </SideBtnWrap>
            </>
          )}
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
