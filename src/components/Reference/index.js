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
    {
      id: "0",
      src: `${process.env.PUBLIC_URL}/BlogPost/Post1.png`,
      text: "1ㄹㅇㄹㅇㄹㅇ",
    },
    {
      id: "1",
      src: `${process.env.PUBLIC_URL}/BlogPost/Post2.png`,
      text: "2ㄹㄴㅇㄹㄴㅇㄹ",
    },
    {
      id: "2",
      src: `${process.env.PUBLIC_URL}/BlogPost/Post3.png`,
      text: "3fgfgfgffg",
    },
    {
      id: "3",

      src: `${process.env.PUBLIC_URL}/BlogPost/Post4.png`,
      text: "3",
    },
    {
      id: "4",

      src: `${process.env.PUBLIC_URL}/BlogPost/Post5.png`,
      text: "3",
    },
    {
      id: "5",
      src: `${process.env.PUBLIC_URL}/BlogPost/Post6.png`,
      text: "3",
    },
    {
      id: "6",
      src: `${process.env.PUBLIC_URL}/BlogPost/Post7.png`,
      text: "3",
    },
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
            {items.map((item) => {
              return (
                <SwiperSlide key={item.id}>
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
