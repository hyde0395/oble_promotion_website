import React from "react";
import {
  ThreeContainer,
  ThreeHeadBox,
  TreeTextBox,
  ThreeH1,
  ThreeSideBox,
} from "./SectionThreeElements";

const SectionThree = () => {
  return (
    <ThreeContainer>
      <ThreeHeadBox>
        <TreeTextBox>
          <ThreeH1>
            어떻게 해야 광고처럼 안 보이고
            <p /> 나의 매장을 효과적으로 알릴 수 있을까?
          </ThreeH1>
        </TreeTextBox>
      </ThreeHeadBox>
      <ThreeSideBox></ThreeSideBox>
    </ThreeContainer>
  );
};

export default SectionThree;
