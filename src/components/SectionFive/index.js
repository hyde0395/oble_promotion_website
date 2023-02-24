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
  FiveSlideText,
  //   FiveSildeBox,
} from "./SectionFiveElements";
import img from "../../images/part.png";
import { BlogBox } from "./SectionFiveElements";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";

const SectionFive = () => {
  const items = [
    { src: img, text: "fkladflakl" },
    { src: img, text: "안녕하세요 저는 최하림입니다" },
    { src: img, text: "fkladflakl" },
    { src: img, text: "fkladflakl" },
    { src: img, text: "fkladflakl" },
    { src: img, text: "fkladflakl" },
    { src: img, text: "fkladflakl" },
    { src: img, text: "fkladflakl" },
  ];

  return (
    <FiveContainer>
      <FiveWrapper>
        <FiveTextWrapper>
          <FiveH1>만족도 100%</FiveH1>
          <FivePH1>오블 체험단 리뷰 컨텐츠</FivePH1>
        </FiveTextWrapper>
      </FiveWrapper>

      <Swiper //Swiper: Slide 요소를 넣는 SwiperSlide를 감싸주는 parent tag
        modules={[Navigation, Pagination, Autoplay]}
        style={{
          "--swiper-pagination-color": "#ffffff",
          "--swiper-navigation-color": "#ffffff",
        }}
        loop={true} // 반복 기능
        spaceBetween={10} //요소들의 간격
        slidesPerView={4} // 한번에 보여지는 요소의 수
        slidesOffsetBefore={50} // 왼쪽 시작 버튼 부터의 요소여백
        navigation={true} // 네비게이션 버튼
        autoplay={{ delay: 2000, disableOnInteraction: false }} // 자동 플레이 delay: 간격, disableOninteration: 마우스등 상호작용시 autoplay 기능 활성화 여부
      >
        <FiveBox>
          {items.map((item, idx) => (
            <SwiperSlide>
              <BlogBox key={idx} src={item.src} text={item.text}></BlogBox>
            </SwiperSlide>
          ))}
        </FiveBox>
      </Swiper>
    </FiveContainer>
  );
};

export default SectionFive;

{
  /* {items.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <FiveImgs src={item.src} />
              </SwiperSlide>
            );
          })} */
}
