import React from "react";
import {
  SevenBox,
  SevenCard,
  SevenContainer,
  SevenH1,
  SevenH1Two,
  SevenCardText,
  SevenBtn,
  SevenH2,
} from "./SectionSevenElements";

const SectionSeven = () => {
  return (
    <SevenContainer>
      <SevenH1>광고주 님의 비용걱정을 해소 해드립니다!</SevenH1>
      <SevenBox>
        <SevenH1Two>믿을 수 있는 후불결제</SevenH1Two>
        <SevenCard>
          <SevenCardText>12,900원</SevenCardText>
        </SevenCard>
        <SevenH2>
          광고가 마무리 된 후<p />
          비용을 지불하세요
        </SevenH2>
        <SevenBtn>비교 견적서 받기</SevenBtn>
      </SevenBox>
    </SevenContainer>
  );
};

export default SectionSeven;
