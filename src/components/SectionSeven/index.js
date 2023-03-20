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
import axios from "axios";

const SectionSeven = () => {
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  const onClick = () => {
    axios({
      url: `${PROXY}/v1/document/1`,
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      const blob = new Blob([response.data]);
      const fileObjectUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = fileObjectUrl;
      link.style.display = "none";
      link.download = "오블제안서.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(fileObjectUrl);
    });
  };
  return (
    <SevenContainer id="section7">
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
        <SevenBtn onClick={onClick}>비교 견적서 받기</SevenBtn>
      </SevenBox>
    </SevenContainer>
  );
};

export default SectionSeven;
