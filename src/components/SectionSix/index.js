import React from "react";
import {
  SixContainer,
  SixContent,
  SixTextBox,
  SixH1,
  SixP,
  SixImg,
  SixImgBox,
  SixUl,
  SixList,
  SixListBox,
} from "./SectionSixElements";
import img from "../../images/part.png";

const SectionSix = () => {
  return (
    <SixContainer>
      <SixContent>
        <SixImgBox>
          <SixImg src={img}></SixImg>
        </SixImgBox>
        <SixTextBox>
          <SixH1>
            실시간 매칭 가능한
            <p />
            진짜
            <p />
            우리동네 인플루언서
          </SixH1>
        </SixTextBox>
      </SixContent>
    </SixContainer>
  );
};

export default SectionSix;
