import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  RefContainer,
  RefWrapper,
  RefTextWrapper,
  RefImgs,
  RefBox,
  RefH1,
  RefPH1,
  SildeBox,
} from "./ReferenceElements.js";
import img from "../../images/part.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Reference = () => {
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
    <RefContainer>
      <RefWrapper>
        <RefTextWrapper>
          <RefH1>전문성 100%</RefH1>
          <RefPH1> 인플루언서 리뷰 컨텐츠</RefPH1>
        </RefTextWrapper>
      </RefWrapper>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        spaceBetween={10}
        slidesPerView={6}
        navigation={true} // 네비게이션 버튼
        autoplay={{ delay: 200, disableOnInteraction: false }}
      >
        <RefBox>
          {items.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <RefImgs src={item.src} />
              </SwiperSlide>
            );
          })}
        </RefBox>
      </Swiper>
    </RefContainer>

    // <RefContainer>
    //   <Swiper
    //     pagination={{
    //       clickable: true,
    //     }}
    //     modules={[Navigation, Pagination]}
    //     loop={true}
    //   >
    //     {items.map((item, idx) => {
    //       return (
    //         <SwiperSlide key={idx}>
    //           <RefImgs src={item.src} />
    //         </SwiperSlide>
    //       );
    //     })}
    //   </Swiper>
    // </RefContainer>
  );
};

export default Reference;
