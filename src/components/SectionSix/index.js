import React from "react";
import {
  SixContainer,
  SixContent,
  SixTextBox,
  SixH1,
  SixH1Two,
  SixP,
  SixImg,
  SixImgBox,
  SixCard,
  SixCardText,
} from "./SectionSixElements";

import ListImg from "../../images/Influencer_List.jpg";

const SectionSix = () => {
  return (
    <SixContainer>
      <SixContent>
        <SixImgBox>
          <SixImg src={ListImg}></SixImg>
        </SixImgBox>
        <SixTextBox>
          <SixH1>
            실시간 매칭 가능한
            <p />
            진짜
            <SixH1Two> 우리동네 인플루언서</SixH1Two>
          </SixH1>
          <SixCard>
            <SixCardText>1,000명⁺</SixCardText>
          </SixCard>
        </SixTextBox>
      </SixContent>
    </SixContainer>
  );
};

export default SectionSix;
