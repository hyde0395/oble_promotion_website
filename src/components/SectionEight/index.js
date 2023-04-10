import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import {
  HeadCard,
  EightContainer,
  EightH1,
  EightH2,
  EightH2Line,
  EightTextWrap,
  HeadSlideWrap,
  SlideImg,
  SubSlideWrap,
  HeadNav,
  HeadP,
  HeadTitleText,
  HeadMainText,
  EightH1Line,
  MaintextWrapper,
  Inline,
  MainImgs,
} from "./SectionEightElements";
import mainImg1 from "../../images/SponsorImgs/sponsor1.jpeg";
import mainImg2 from "../../images/SponsorImgs/sponsor2.jpeg";
import mainImg3 from "../../images/SponsorImgs/sponsor3.jpeg";
import mainImg4 from "../../images/SponsorImgs/sponsor4.jpeg";

import subImg1 from "../../images/CompanyLogo/logo1.png";
import subImg2 from "../../images/CompanyLogo/logo2.png";
import subImg3 from "../../images/CompanyLogo/logo3.png";
import subImg4 from "../../images/CompanyLogo/logo4.png";
import subImg5 from "../../images/CompanyLogo/logo5.png";
import subImg6 from "../../images/CompanyLogo/logo6.png";
import subImg7 from "../../images/CompanyLogo/logo7.png";
import subImg8 from "../../images/CompanyLogo/logo8.png";
import "swiper/css";
import "swiper/css/navigation";

const SectionEight = () => {
  const headItems = [
    {
      id: 1,
      src: { subImg1 },
      topText: "평택 'ㅋ'사장님 후기",
      MainImgSrc: mainImg1,
      titleText: "후불로 결제할 수 있어서 너무 좋아요!",
      mainText:
        "사기업체들이 많아 너무 고민을 많이 했는데 오블에서는 광고비를 후불로 결제해서 믿을 수 있었어요.. 광고비도 저렴하고 인플루언서의 질이 높아 결과가 더 좋은 것 같아요 정말 감사합니다!",
    },
    {
      id: 2,
      src: {},
      topText: "평택 'ㄷ'사장님 후기",
      MainImgSrc: mainImg2,
      titleText: "내가 원하는 고객들이 실제로 방문하고 있어요",
      mainText:
        "우리 매장 근처 인플루언서들이 직접 방문을 해주다 보니 입소문 효과도 생기고 제가 원하는 고객층이 실제로 방문하는 횟수가 늘어나니까 너무너무 뿌듯하고 너무 만족스럽게 이용했어요",
    },
    {
      id: 3,
      src: {},
      topText: "평택 'ㅇ'사장님 후기",
      MainImgSrc: mainImg3,
      titleText: "인플루언서의 특성을 알려줘서 마음에 쏙 들어요",
      mainText:
        "다른 업체는 인플루언서의 정보를 자세하게 안 알려주는데 오블은 인플루언서의 특성이나 강점을 알려줘서 좋았어요. 그만큼 세세하게 진행하다 보니까 더욱 효과도 좋았습니다.",
    },
    {
      id: 4,
      src: {},
      topText: "평택 'ㅌ'사장님 후기",
      MainImgSrc: mainImg4,
      titleText: "소통이 너무 빠르고 1:1매칭이 만족스럽습니다",
      mainText:
        "매일매일 귀찮게 연락해도 빠르게 소통을 해주시고 바로 피드백 반영해주시는 점이 마음에 들었습니다. 덕분에 손님도 많이 늘고 아는 사장님께 추천드릴만한 곳 인 것 같아요!",
    },
    // {
    //   id: 5,
    //   src: {},
    //   topText: "평택 'ㄷ'사장님 후기",
    //   MainImgSrc: { mainImg1 },
    //   titleText: "컨설팅의 퀼리티가 압도적이예요",
    //   mainText:
    //     "내가 원하는 손님 연령에 맞춰서 키워드를 세세하게 다 잡아주시고 매장을 어떻게 마케팅 해야하는지 하나하나 코칭해주셔서 너무 좋았어요. 이 가격에 이런 퀼리티의 상담을 받으니 담당자님이 남는게 있을까 걱정스러울정도였답니다!",
    // },
    // {
    //   id: 6,
    //   src: {},
    //   topText: "평택 'ㄷ'사장님 후기",
    //   MainImgSrc: { mainImg1 },
    //   titleText: "무엇보다 솔직하게 말해주셔서 마음에 들었어요!",
    //   mainText:
    //     "안 되는 건 안된다고 확실히 말해주시고 마케팅의 현실과 오블이 제공해줄 수 있는 가치를 확실하게 말씀해주셔서 만족스러웠습니다! 담당자님이 거의 1시간동안 마케팅 교육을 해주셔서 실체를 깨달았다는...!",
    // },
    // {
    //   id: 6,
    //   src: {},
    //   topText: "평택 'ㄷ'사장님 후기",
    //   MainImgSrc: { mainImg1 },
    //   titleText: "20대 여성 손님이 진짜 늘었어요",
    //   mainText:
    //     "중국인 위주로 장사를 했었는데 오블이 20대 여성 손님을 타켓으로 한 광고전략을 제안해서 그대로 따라했더니 정말 20대 여성 손님이 많이 늘고 매출도 많이 늘었어요!",
    // },
    // {
    //   id: 6,
    //   topText: "평택 'ㄷ'사장님 후기",
    //   MainImgSrc: { mainImg1 },
    //   titleText: "광고비를 150만원 넘게 절약했어요",
    //   mainText:
    //     "A사에서 1년 200만원에 계약했는데 먹튀를 당했거든요... 사실 오블이랑 계약하는 것도 많이 고민했는데 후불결제라는 말에 믿어봤는데 광고도 진짜 잘해주시고 비용도 엄청 절약했어요!",
    // },
  ];

  const subItems = [
    { id: 1, src: subImg1 },
    { id: 2, src: subImg2 },
    { id: 3, src: subImg3 },
    { id: 4, src: subImg4 },
    { id: 5, src: subImg5 },
    { id: 6, src: subImg6 },
    { id: 7, src: subImg7 },
    { id: 8, src: subImg8 },
  ];
  return (
    <EightContainer>
      <EightTextWrap>
        <EightH1>
          <Inline>오블은 </Inline> <Inline>경기남부대학 </Inline>
        </EightH1>
        <EightH1Line>최우수 스타트업 기업</EightH1Line>
        <EightH1>이며</EightH1>
        <p />
        <Inline>
          <EightH2>수 많은 기업들이 </EightH2>
        </Inline>

        <EightH2Line>직접</EightH2Line>
        <EightH2> 찾아주시고 있습니다</EightH2>
      </EightTextWrap>

      <HeadSlideWrap>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={4}
          slidesPerView={1}
          breakpoints={{
            // 반응형을 위한 옵션: 초기 default값을 모바일 기준으로 잡아야 된다.
            768: {
              // 브라우저가 768px 보다 클때
              slidesPerView: 3,
              spaceBetween: 10,
              slidesOffsetBefore: 38,
            },
            1024: {
              // 브라우저가 1024px 보다 클때
              slidesPerView: 4,
              spaceBetween: 10,
              slidesOffsetBefore: 38,
            },
          }}
        >
          {headItems.map((headItems) => {
            return (
              <SwiperSlide key={headItems.id}>
                <HeadCard>
                  <HeadNav></HeadNav>
                  <MainImgs src={headItems.MainImgSrc} />
                  <HeadP>{headItems.topText}</HeadP>
                  <HeadTitleText>{headItems.titleText}</HeadTitleText>
                  <MaintextWrapper>
                    <HeadMainText>{headItems.mainText}</HeadMainText>
                  </MaintextWrapper>
                </HeadCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </HeadSlideWrap>
      <SubSlideWrap>
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          spaceBetween={20}
          slidesPerView={2}
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
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
        >
          {subItems.map((subItems) => {
            return (
              <SwiperSlide key={subItems.id}>
                <SlideImg src={subItems.src} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SubSlideWrap>
    </EightContainer>
  );
};

export default SectionEight;
