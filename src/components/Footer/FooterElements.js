import styled from "styled-components";

//Footer 부분의 형태
export const FooterContainer = styled.div`
  background-color: #666666;
  height: 230px;

  @media screen and (max-width: 960px) {
  }
  @media screen and (max-width: 768px) {
    height: 430px;
  }
`;
// Footer 부분의 요소들을 집어넣을 상자
export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
// Footer 부분 오블 로고 아이콘
export const FooterLogo = styled.img`
  height: 100px;
  width: 100px;
`;

// Footer의 텍스트를 집어넣을 상자
export const FooterTextWrap = styled.div`
  color: #ffffff;
  margin-left: 100px;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;
// Footer 부분의 텍스트
export const FooterText = styled.p``;

export const LoginA = styled.a`
  text-decoration: none;
  opacity: 0;
`;
