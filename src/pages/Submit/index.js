import React, { useState, useRef, useCallback } from "react";

import * as Styled from "../Survey/styled";

const Submit = () => {
  return (
    <>
      <Styled.TitleStyled>
        <p>응답해주셔서 감사합니다.</p>
      </Styled.TitleStyled>
      <Styled.BoxStyled>
        <p>
          상담은 응답 1일 내, 분석 및 레포트는 3일 내로 전화번호로 전달됩니다.
        </p>
      </Styled.BoxStyled>
      <Styled.Flex>
        <Styled.Desc></Styled.Desc>
      </Styled.Flex>
    </>
  );
};

export default Submit;
