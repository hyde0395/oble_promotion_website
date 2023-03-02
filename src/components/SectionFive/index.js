import React from "react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FiveContainer,
  FiveWrapper,
  FiveTextWrapper,
  FiveImgs,
  FiveBox,
  FiveH1,
  FivePH1,
  BlogBox,
  BlogText,
  BlogTextBox,
} from "./SectionFiveElements";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const SectionFive = () => {
  // 블로그 포스트 슬라이드 내부 내용들
  const SlideItems = [
    {
      id: "0",
      src: 0,
      text: "1ㄹㅇㄹㅇㄹㅇ",
    },
    {
      id: "1",
      src: 0,
      text: "2ㄹㄴㅇㄹㄴㅇㄹ",
    },
    {
      id: "2",
      src: 0,
      text: "3fgfgfgffg",
    },
    {
      id: "3",
      src: 0,
      text: "3",
    },
    {
      id: "4",
      src: 0,
      text: "3",
    },
    {
      id: "5",
      src: 0,
      text: "3",
    },
    {
      id: "6",
      src: 0,
      text: "3",
    },
    {
      id: "7",
      src: 0,
      text: "3",
    },
  ];

  return (
    <FiveContainer>
      <FiveWrapper>
        <FiveTextWrapper>
          <FiveH1>만족도 100% </FiveH1>
          <FivePH1>오블 체험단 리뷰 컨텐츠</FivePH1>
        </FiveTextWrapper>
      </FiveWrapper>

      <Swiper //Swiper: Slide 요소를 넣는 SwiperSlide를 감싸주는 parent tag
        modules={[Navigation, Autoplay]}
        style={{
          "--swiper-navigation-color": "#ffffff",
        }}
        loop={true} // 반복 기능
        spaceBetween={20} //요소들의 간격
        slidesPerView={1} // 한번에 보여지는 요소의 수
        slidesOffsetBefore={50} // 왼쪽 시작 버튼 부터의 요소여백
        navigation={true} // 네비게이션 버튼
        autoplay={{ delay: 2000, disableOnInteraction: false }} // 자동 플레이 delay: 간격, disableOninteration: 마우스등 상호작용시 autoplay 기능 활성화 여부
        breakpoints={{
          // 반응형을 위한 옵션: 초기 default값을 모바일 기준으로 잡아야 된다.
          768: {
            // 브라우저가 768px 보다 클때
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            // 브라우저가 1024px 보다 클때
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        <FiveBox>
          {SlideItems.map((SlideItems) => {
            return (
              <SwiperSlide key={SlideItems.id}>
                <BlogBox>
                  <FiveImgs src={SlideItems.src} />
                  <BlogTextBox>
                    <BlogText>{SlideItems.text}</BlogText>
                  </BlogTextBox>
                </BlogBox>
              </SwiperSlide>
            );
          })}
        </FiveBox>
      </Swiper>
    </FiveContainer>
  );
};

export default SectionFive;
