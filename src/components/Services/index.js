import React from "react";
import Icon1 from "../../images/3.svg";
import Icon2 from "../../images/3.svg";
import Icon3 from "../../images/3.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
} from "./ServicesElements";
const Services = () => {
  return (
    <ServicesContainer id="service">
      <ServicesH1></ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>예담이 2월 1일을 기점으로 인상 됩니다!</ServicesH2>
          <ServicesP>
            예담의 가격이 2월 1일부로 6000원에서 1000원더 인상되어 7000원이
            됩니다. 하지만 그래도 이해가 됩니다!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>예담이 2월 1일을 기점으로 인상 됩니다!</ServicesH2>
          <ServicesP>
            예담의 가격이 2월 1일부로 6000원에서 1000원더 인상되어 7000원이
            됩니다. 하지만 그래도 이해가 됩니다!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>예담이 2월 1일을 기점으로 인상 됩니다!</ServicesH2>
          <ServicesP>
            예담의 가격이 2월 1일부로 6000원에서 1000원더 인상되어 7000원이
            됩니다. 하지만 그래도 이해가 됩니다!
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
