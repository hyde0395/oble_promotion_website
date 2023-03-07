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
  RefTextBox,
  RefText,
  RefSlideBox,
  RefNav,
  RefNavIcon,
  RefNavName,
} from "./ReferenceElements.js";
import "swiper/css";
import "swiper/css/navigation";

const Reference = () => {
  // map함수를 통해 가져올 슬라이드 리스트
  const items = [
    {
      id: "0", //map함수 key로 쓰일 id
      blogSrc: "https://blog.naver.com/ehowlgksk/222875313110", // a태그에 들어갈 블로그 포스트 URL
      blogName: "수레", // 블로그 인플루언서 이름
      blogIconSrc: {}, // 블로그 인플루언서 아이콘 경로
      path: `${process.env.PUBLIC_URL}/BlogPost/Post1.png`, // 메인 그림 path
      text: "시흥 배곧 맛집 : 배곧 함박스테이크가 맛있는 정씨함박", // 블로그 포스트 텍스트
    },
    {
      id: "1",
      blogSrc: "https://m.blog.naver.com/yjhjehh003/223017824861",
      blogName: "수레",
      blogIconSrc: {},
      path: `${process.env.PUBLIC_URL}/BlogPost/Post2.png`,
      text: "[평택 카페] 직접 유기농 아이스크림 만드는 팽택북카페 카페, 정스 리뷰",
    },
    {
      id: "2",
      blogSrc: "https://m.blog.naver.com/wldyd7240/222865508872",
      blogName: "수레",
      blogIconSrc: {},
      path: `${process.env.PUBLIC_URL}/BlogPost/Post3.png`,
      text: "평택 맛집 :: 불맛이 강한 간짜장과 국물이 진한 짬뽕이 일품인 소사벌 중국집 달토끼짬뽕 평택본점",
    },
    {
      id: "3",
      blogSrc: "https://m.blog.naver.com/wldyd7240/222865508872",
      blogName: "수레",
      blogIconSrc: {},
      path: `${process.env.PUBLIC_URL}/BlogPost/Post4.png`,
      text: "4",
    },
    {
      id: "4",
      blogSrc: "https://m.blog.naver.com/wldyd7240/222865508872",
      blogName: "수레",
      blogIconSrc: {},
      path: `${process.env.PUBLIC_URL}/BlogPost/Post5.png`,
      text: "5",
    },
    {
      id: "5",
      blogSrc: "https://m.blog.naver.com/wldyd7240/222865508872",
      blogName: "수레",
      blogIconSrc: {},
      path: `${process.env.PUBLIC_URL}/BlogPost/Post6.png`,
      text: "6",
    },
    {
      id: "6",
      blogSrc: "https://m.blog.naver.com/wldyd7240/222865508872",
      blogName: "수레",
      blogIconSrc: {},
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
        slidesOffsetBefore={50}
        spaceBetween={10}
        slidesPerView={2}
        navigation={true} // 네비게이션 버튼
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
        <RefBox>
          <SildeBox>
            {items.map((items) => {
              return (
                <SwiperSlide key={items.id}>
                  <a href={items.blogSrc}>
                    <RefSlideBox>
                      <RefImgs src={items.path} />
                      <RefTextBox>
                        <RefNav>
                          <RefNavIcon />
                          <RefNavName>수레</RefNavName>
                        </RefNav>
                        <RefText>{items.text}</RefText>
                      </RefTextBox>
                    </RefSlideBox>
                  </a>
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
