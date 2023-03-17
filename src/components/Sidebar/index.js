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
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SurveyRoute to="/Test">60초 자동 상담</SurveyRoute>
            <SidebarLink to="/about">오블 소개</SidebarLink>
            <SidebarLink to="/about">진행과정</SidebarLink>
            <SidebarLink to="/about">제안서받기</SidebarLink>
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
