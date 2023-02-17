import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  RefContainer,
  RefWrapper,
  RefTextWrapper,
  RefImgs,
  RefBox,
  RefH1,
  RefP,
  SildeBox,
} from "./ReferenceElements.js";

const Reference = () => {
  return (
    <RefContainer>
      <RefWrapper>
        <RefTextWrapper>
          <RefH1>오블은 최고의 마케팅입니다.</RefH1>
          <RefP>ajdflkajdlkfajl</RefP>
        </RefTextWrapper>
      </RefWrapper>

      <RefBox>
        <SildeBox>
          <RefImgs />
        </SildeBox>
      </RefBox>
    </RefContainer>
  );
};

export default Reference;
