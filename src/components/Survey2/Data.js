// 이제 정답 answer 배열을 객체로 설정해서 active 여부를 정할건지
// 아니면 그냥 같은 인덱스배열에 true false 로 구분할건지 정해야됨

const Data = [
  {
    id: 1,
    isduplicate: false,
    question: "광고주님! 반갑습니다!  어떤 사업을 하고 계시나요? ",
    answer: [
      {
        id: 1,
        content: "개인사업자",
      },
      {
        id: 2,
        content: "프렌차이즈 가맹점",
        // 이버튼을 누르면 id 4로 점프
      },
      {
        id: 3,
        content: "프렌차이즈 본사",
      },
      {
        id: 4,
        content: "유통 판매업",
      },
      {
        id: 5,
        content: "기타",
      },
    ],
  },
  {
    id: 2,
    isduplicate: true,
    question: "광고주님이 운영하시는 업종은 무엇인가요? ",
    answer: [
      { id: 1, content: "음식점" },
      { id: 2, content: "뷰티 / 병원" },
      { id: 3, content: "숙박" },
      { id: 4, content: "카페" },
      { id: 5, content: "액티비티 / 체험" },
      { id: 6, content: "제품" },
      { id: 7, content: "기타" },
    ],
  },
  {
    id: 3,
    isduplicate: false,
    question: "블로그 마케팅에 대해 알고 계시나요? ",
    answer: [
      {
        id: 1,
        content:
          "블로그 마케팅에 대해 잘 알고 있고 매장에 적합한 인플루언서만 보내주시면 됩니다!",
      },
      {
        id: 2,
        content:
          "인플루언서 마케팅이 어느 방식으로 진행되는지는  알고 있어요! ",
      },
      {
        id: 3,
        content:
          "인플루언서.. 체험단... 그게 뭔지는 모르겠는데 매장을 홍보 하고싶어요!",
      },
      { id: 4, content: "진짜 하나도 모르겠습니다. " },
      { id: 5, content: "기타" },
    ],
  },
  {
    id: 4,
    isduplicate: false,
    question: "상담을 어떻게 진행하고 싶으신가요? ",
    answer: [
      {
        id: 1,
        content: "초간단 60초 설문상담",
      },
      { id: 2, content: "대면 상담을 통해 직접 얼굴보면서 듣고 싶습니다." },
      { id: 3, content: "유선 상담을 원합니다." },
    ],
  },
  {
    id: 5,
    isduplicate: false,
    question: "매장 / 제품을 어떻게 홍보하고 싶으신가요?",
    answer: [
      {
        id: 1,
        content: "블로그 마케팅",
      },
      { id: 2, content: "각종 SNS 광고" },
      { id: 3, content: "기타" },
      {
        id: 4,
        content: "알아서 해주세요",
      },
    ],
  },
  {
    id: 6,
    isduplicate: false,
    question: "광고하고자 하는 성별은 무엇입니까? ",
    answer: [
      { id: 1, content: "여성 위주" },
      { id: 2, content: "남성 위주" },
      { id: 3, content: "남여 모두 " },
      { id: 4, content: "알아서 해주세요" },
    ],
  },
  {
    id: 7,
    isduplicate: false,
    question: "광고하고자 하는 특정 연령은 무엇입니까?",
    answer: [
      "10대",
      "20대",
      "30대",
      "40대",
      "50대 ",
      "60세 이상",
      "알아서 해주세요 ",
    ],
  },
  {
    id: 8,
    isduplicate: false,
    question: "광고노출을 원하는 고객층은 무엇입니까?",
    answer: [
      "가족 단위 ",
      "1인 혼밥족",
      "데이트",
      "외부 관광객",
      "3~5인 소모임",
      "기타",
      "알아서 해주세요",
    ],
  },
  {
    id: 9,
    isduplicate: false,
    question: "어떤 인플루언서[체험단]이 우리 매장을 홍보해주셨으면 좋겠나요? ",
    answer: [
      "상위노출을 잘하는 인플루언서",
      "사진과 글이 많은 꼼꼼한 인플루언서",
      "친구가 많아 소통을 잘하는 인플루언서",
      "일방문자가 많은 인플루언서 ",
      "알아서 해주세요",
    ],
  },
  {
    id: 10,
    isduplicate: false,
    question: "인플루언서[체험단]이 한 달에 몇 팀 정도 방문했으면 좋겠나요? ",
    answer: [
      "0~5팀",
      "5~10팀",
      "10팀 이상",
      "모르겠어요 어떻게 하는거죠?",
      "알아서 해주세요 ",
    ],
  },
  {
    id: 11,
    isduplicate: false,
    question: "인플루언서에게 어떤 서비스를 제공하실건가요? ",
    answer: [
      "제공 서비스 고정ex)  짬뽕 + 짜장면 + 탕수육",
      "인플루언서 자율 선택 ex) 3만원 이용권",
      "모르겠어요..",
      "알아서 해주세요",
    ],
  },
  {
    id: 12,
    isduplicate: false,
    question: "인플루언서[체험단]이 어떤 시간에 방문하셨으면 좋겠나요? ",
    answer: ["예약시간 방문", "아무때나 방문", "알아서 해주세요"],
  },
  {
    id: 13,
    isduplicate: 0,
    question: "광고주님 영업지 주소가 어떻게 되시나요?",
    answer: [{ id: 1, content: "답변을 입력해 주세요" }],
  },
  {
    id: 14,
    isduplicate: 0,
    question:
      "광고주님 성함 & 전화번호를 적어주시면 3일 내 광고 전략 레포트 작성 후 연락드리겠습니다.",
    answer: [{ id: 1, content: "답변을 입력해 주세요" }],
  },
  {
    id: 15,
    isduplicate: 0,
    question: "콘텐츠에  강조하고 싶은 매장의 강점 & 내용은 무엇인가요? ",
    answer: [{ id: 1, content: "답변을 입력해 주세요" }],
  },
  {
    id: 16,
    isduplicate: 0,
    question: "마지막으로 오블에게 원하는 것이 있으면 말씀해주세요!",
    answer: [{ id: 1, content: "답변을 입력해 주세요" }],
  },
];

export default Data;