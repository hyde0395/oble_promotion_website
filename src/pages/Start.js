import React from "react";

import * as Styled from "./Survey/styled";

function Start() {
  return (
    <>
      <Styled.TitleStyled>
        <p>오블 광고주 60초 상담진행</p>
      </Styled.TitleStyled>
      <Styled.Flex>
        <p>상담은 60초면 충분합니다,</p>
        <p>오블은 , 60초 마케팅 플랫폼이니까요!</p>
        <Styled.Desc></Styled.Desc>
      </Styled.Flex>
    </>
  );
}

export default Start;
