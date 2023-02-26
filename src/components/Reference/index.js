import React from "react";
import { Navigation, Autoplay } from "swiper";
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

const Reference = () => {
  // map함수를 통해 가져올 슬라이드 리스트
  const items = [
    {
      id: "0", //map함수 key로 쓰일 id
      blogSrc: "https://blog.naver.com/ehowlgksk/222875313110", // a태그에 들어갈 블로그 포스트 URL
      path: `${process.env.PUBLIC_URL}/BlogPost/Post1.png`, // 메인 그림 path
      text: "1", // 블로그 포스트 텍스트
    },
    {
      id: "1",
      path: `${process.env.PUBLIC_URL}/BlogPost/Post2.png`,
      text: "2ㄹㄴㅇㄹㄴㅇㄹ",
    },
    {
      id: "2",
      path: `${process.env.PUBLIC_URL}/BlogPost/Post3.png`,
      text: "3",
    },
    {
      id: "3",
      path: `${process.env.PUBLIC_URL}/BlogPost/Post4.png`,
      text: "4",
    },
    {
      id: "4",
      path: `${process.env.PUBLIC_URL}/BlogPost/Post5.png`,
      text: "5",
    },
    {
      id: "5",
      path: `${process.env.PUBLIC_URL}/BlogPost/Post6.png`,
      text: "6",
    },
    {
      id: "6",
      path: `${process.env.PUBLIC_URL}/BlogPost/Post7.png`,
      text: "7",
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
        modules={[Navigation, Autoplay]}
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
                <a href={item.blogSrc}>
                  <SwiperSlide key={item.id}>
                    <RefImgs src={item.path} />
                  </SwiperSlide>
                </a>
              );
            })}
          </SildeBox>
        </RefBox>
      </Swiper>
    </RefContainer>
  );
};

export default Reference;
