import React from "react";
import Icon1 from "../../images/ServiceCard/Service1.png";
import Icon2 from "../../images/ServiceCard/Service2.png";
import Icon3 from "../../images/ServiceCard/Service3.png";
import Icon4 from "../../images/ServiceCard/Service4.png";
import Icon5 from "../../images/ServiceCard/Service5.png";

import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
  ServicesH1Two,
  ServicesDay,
} from "./ServicesElements";
const Services = () => {
  return (
    <ServicesContainer id="service">
      <ServicesH1>매우 간편한 마케팅 프로세스!</ServicesH1>
      <ServicesH1Two>이렇게 진행됩니다!</ServicesH1Two>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesDay>60sec</ServicesDay>
          <ServicesH2>60초 간편상담</ServicesH2>
          <ServicesP>
            광고주님의 니즈를 반영하기 위한 빠른 상담을 진행합니다.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />

          <ServicesDay>1 DAY</ServicesDay>
          <ServicesH2>광고전략 제안</ServicesH2>
          <ServicesP>
            광고주님이 원하는 타켓에 맞춰 광고 전략을 제안합니다.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesDay>2 DAY</ServicesDay>
          <ServicesH2>인플루언서 매칭</ServicesH2>
          <ServicesP>
            광고주님과 최적의 인플루언서를 즉시 매칭시켜드립니다.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesDay>3 DAY</ServicesDay>
          <ServicesH2>콘텐츠 제작</ServicesH2>
          <ServicesP>
            매칭된 인플루언서는 가이드표를 기반으로 콘텐츠를 제작합니다.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon5} />
          <ServicesDay>매월 첫 째주 월요일</ServicesDay>
          <ServicesH2>결과보고서 제공 및 후불결제</ServicesH2>
          <ServicesP>결과보고서 수령 후 후불결제를 진행합니다.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
