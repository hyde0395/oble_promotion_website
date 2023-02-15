import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterTextWrap,
  FooterText,
} from "./FooterElements";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterTextWrap>
          <FooterText>주식회사 오블</FooterText>
          <FooterText>사업자 등록 번호: kjfladsjlka</FooterText>
          <FooterText>Copyright © 2023 Oble. All rights reserved.</FooterText>
          문의 전화번호 : 010-1234-5678
          <FooterText></FooterText>
        </FooterTextWrap>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
