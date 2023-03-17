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
  BlogLink,
} from "./ReferenceElements.js";
import "swiper/css";
import "swiper/css/navigation";
import BlogIcon1 from "../../images/InfluencerIcon/icon1.png"; // 은저리
import BlogIcon2 from "../../images/InfluencerIcon/icon2.png"; //안온
import BlogIcon3 from "../../images/InfluencerIcon/icon3.png"; // 은저리
import BlogIcon4 from "../../images/InfluencerIcon/icon4.png"; // 냠냠젤리비
import BlogIcon5 from "../../images/InfluencerIcon/icon5.png"; // 집오리
import BlogIcon6 from "../../images/InfluencerIcon/icon6.png"; // 수레
import BlogIcon7 from "../../images/InfluencerIcon/icon7.png"; // 임다다다
import BlogPost1 from "../../images/BlogPost/Post1.png"; // 시흥 배곧 정씨 함박
import BlogPost2 from "../../images/BlogPost/Post2.png"; // 팔오반점평택중앙점
import BlogPost3 from "../../images/BlogPost/Post3.png"; // 달토끼 짬뽕
import BlogPost4 from "../../images/BlogPost/Post4.png"; // 카페정스
import BlogPost5 from "../../images/BlogPost/Post5.png"; // 곱창전골 우성회관
import BlogPost6 from "../../images/BlogPost/Post6.png"; // 달토끼 짬뻥
import BlogPost7 from "../../images/BlogPost/Post7.png"; // 산타모니카

const Reference = () => {
  // map함수를 통해 가져올 슬라이드 리스트
  const items = [
    {
      id: "0", //슬라이드 map함수 key로 쓰일 id
      blogSrc: "https://blog.naver.com/ehowlgksk/222875313110", // a태그에 들어갈 블로그 포스트 URL
      blogName: "냠냠젤리비", // 블로그 인플루언서 이름
      blogIconSrc: BlogIcon4, // 블로그 인플루언서 아이콘 경로
      path: BlogPost1, // 메인 그림 path
      text: "시흥 배곧 맛집 : 배곧 함박스테이크가 맛있는 정씨함박", // 블로그 포스트 텍스트
    },
    {
      id: "1",
      blogSrc: "https://m.blog.naver.com/yjhjehh003/223017824861",
      blogName: "은저리",
      blogIconSrc: BlogIcon3,
      path: BlogPost4,
      text: "[평택 카페] 직접 유기농 아이스크림 만드는 팽택북카페 카페, 정스 리뷰",
    },
    {
      id: "2",
      blogSrc: "https://m.blog.naver.com/wldyd7240/222865508872",
      blogName: "안온",
      blogIconSrc: BlogIcon2,
      path: BlogPost6,
      text: "평택 맛집 :: 불맛이 강한 간짜장과 국물이 진한 짬뽕이 일품인 소사벌 중국집 달토끼짬뽕 평택본점",
    },
    {
      id: "3",
      blogSrc: "https://m.blog.naver.com/dbtnfk0103/222988558542",
      blogName: "수레",
      blogIconSrc: BlogIcon6,
      path: BlogPost5,
      text: "(230118) 평택 곱창전골 <우성회관> 칠원동 깔끔한 해장국맛집",
    },
    {
      id: "4",
      blogSrc: "https://blog.naver.com/cmwmzl012/222864559950",
      blogName: "집오리",
      blogIconSrc: BlogIcon5,
      path: BlogPost2,
      text: "평택역 짬뽕 끝판왕! 교통짬뽕 스타일의 팔오반점 평택중앙점",
    },
    {
      id: "5",
      blogSrc: "https://m.blog.naver.com/check113/223000000025",
      blogName: "은저리",
      blogIconSrc: BlogIcon1,
      path: BlogPost3,
      text: "평택대맛집, 용이동 짬봉 달토끼짬뽕 꼭 가보세요!!!",
    },
    {
      id: "6",
      blogSrc: "https://blog.naver.com/dahye5023/223020684969",
      blogName: "임다다다",
      blogIconSrc: BlogIcon7,
      path: BlogPost7,
      text: "소래포구맛집 < 산타모니카 인천논현점 > 무한샤브와 뷔페까지 완벽",
    },
  ];

  return (
    <RefContainer>
      <RefWrapper>
        <RefTextWrapper>
          <RefH1>전문성 100%</RefH1>
          <p />
          <RefPH1> 인플루언서 리뷰 컨텐츠</RefPH1>
        </RefTextWrapper>
      </RefWrapper>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesOffsetBefore={30}
        spaceBetween={10}
        slidesPerView={1} // 한번에 보여지는 슬라이드 요소 개수 (처음 모바일 기준으로 셋팅한다.)\
        breakpoints={{
          // 반응형을 위한 옵션: 초기 default값을 모바일 기준으로 잡아야 된다.
          768: {
            // 브라우저가 768px 보다 클때
            slidesPerView: 3,
            spaceBetween: 10,
            slidesOffsetBefore: 50,
          },
          1024: {
            // 브라우저가 1024px 보다 클때
            slidesPerView: 3,
            spaceBetween: 4,
            slidesOffsetBefore: 50,
          },
        }}
        loop={true} //
        navigation={true} // 네비게이션 버튼
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        <RefBox>
          <SildeBox>
            {items.map((items) => {
              return (
                <SwiperSlide key={items.id}>
                  <BlogLink href={items.blogSrc}>
                    <RefSlideBox>
                      <RefImgs src={items.path} />
                      <RefTextBox>
                        <RefNav>
                          <RefNavIcon src={items.blogIconSrc} />
                          <RefNavName>{items.blogName}</RefNavName>
                        </RefNav>
                        <RefText>{items.text}</RefText>
                      </RefTextBox>
                    </RefSlideBox>
                  </BlogLink>
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
