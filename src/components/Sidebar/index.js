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
                <SurveyRoute to="/Test">60초 자동 상담</SurveyRoute>
                <SidebarLink to="intro">오블 소개</SidebarLink>
                <SidebarLink to="service">진행과정</SidebarLink>
                <SidebarLink to="section7">제안서받기</SidebarLink>
              </>
            ) : (
              <>
                <SurveyRoute to="/Test">60초 자동 상담</SurveyRoute>
                <SidebarLink to="/">오블 소개</SidebarLink>
                <SidebarLink to="/">진행과정</SidebarLink>
                <SidebarLink to="/">제안서받기</SidebarLink>
              </>
            )}
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/Test">상담받아보기</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
