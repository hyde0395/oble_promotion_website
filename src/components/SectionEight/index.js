import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EightContainer,
  EightH1,
  EightH1Two,
  EightTextWrap,
  SlideImg,
} from "./SectionEightElements";
import { Navigation, Autoplay } from "swiper";
import img from "../../images/2.svg";

const SectionEight = () => {
  const headItems = [
    { id: 1, src: { img } },
    { id: 2, src: { img } },
    { id: 3, src: { img } },
    { id: 4, src: { img } },
    { id: 5, src: { img } },
    { id: 6, src: { img } },
  ];

  const subItems = [];
  return (
    <EightContainer>
      <EightTextWrap>
        <EightH1>Hello world</EightH1>
        <EightH1Two>dfdsfsd</EightH1Two>
      </EightTextWrap>

      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        slidesOffsetBefore={50}
        spaceBetween={10}
        slidesPerView={2}
        naviga
        tion={true} // 네비게이션 버튼
        autoplay={{ delay: 2000, disableOnInteraction: false }}
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
        {headItems.map((headItems) => {
          return (
            <SwiperSlide key={headItems.id}>
              <a href={headItems.src}>
                <SlideImg src={headItems.img} />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </EightContainer>
  );
};

export default SectionEight;
