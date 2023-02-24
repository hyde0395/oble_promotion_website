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
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Reference = () => {
  const items = [
    { src: `${process.env.PUBLIC_URL}/BlogPost/Post1.png` },
    { src: `${process.env.PUBLIC_URL}/BlogPost/Post2.png` },
    { src: `${process.env.PUBLIC_URL}/BlogPost/Post3.png` },
    { src: `${process.env.PUBLIC_URL}/BlogPost/Post4.png` },
    { src: `${process.env.PUBLIC_URL}/BlogPost/Post5.png` },
    { src: `${process.env.PUBLIC_URL}/BlogPost/Post6.png` },
    { src: `${process.env.PUBLIC_URL}/BlogPost/Post7.png` },
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
        slidesPerView={4}
        navigation={true} // 네비게이션 버튼
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        <RefBox>
          <SildeBox>
            {items.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <RefImgs src={item.src} />
                </SwiperSlide>
              );
            })}
          </SildeBox>
        </RefBox>
      </Swiper>
    </RefContainer>
  );
};

export default Reference;
