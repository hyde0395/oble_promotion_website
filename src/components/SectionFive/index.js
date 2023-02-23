import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FiveContainer,
  FiveWrapper,
  FiveTextWrapper,
  FiveImgs,
  FiveBox,
  FiveH1,
  FivePH1,
  //   FiveSildeBox,
} from "./SectionFiveElements";
import img from "../../images/part.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SectionFive = () => {
  const items = [
    { src: img },
    { src: img },
    { src: img },
    { src: img },
    { src: img },
    { src: img },
    { src: img },
    { src: "../../images/2.svg" },
  ];
  return (
    <FiveContainer>
      <FiveWrapper>
        <FiveTextWrapper>
          <FiveH1>만족도 100%</FiveH1>
          <FivePH1>오블 체험단 리뷰 컨텐츠</FivePH1>
        </FiveTextWrapper>
      </FiveWrapper>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        navigation={true} // 네비게이션 버튼
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        <FiveBox>
          {items.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <FiveImgs src={item.src} />
              </SwiperSlide>
            );
          })}
        </FiveBox>
      </Swiper>
    </FiveContainer>
  );
};

export default SectionFive;
