import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterTextWrap,
  FooterText,
  FooterLogo,
  LoginA,
} from "./FooterElements";
import Logo from "../../images/ohbleLogo.png";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLogo src={Logo} />
        <FooterTextWrap>
          <FooterText>오블</FooterText>
          <FooterText>문의 사항 및 실시간 상담 9:00 ~ 22:00</FooterText>
          <FooterText>
            대표자 : 박예준 | 사업자등록번호: 000-00-0000 | 광고문의 :
            010-5361-1431
          </FooterText>
          <FooterText>
            주소 : 경기도 화성시 와우안길 17 수원대학교 고운첨단과학기술원 905호
            오블 | Email:ohmarket22@naver.com
          </FooterText>
          <FooterText>Copyright © 2023 Oble. All rights reserved.</FooterText>
        </FooterTextWrap>
        <LoginA href="/login"> ddd</LoginA>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
