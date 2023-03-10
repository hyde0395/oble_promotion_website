// 이제 정답 answer 배열을 객체로 설정해서 active 여부를 정할건지
// 아니면 그냥 같은 인덱스배열에 true false 로 구분할건지 정해야됨

const Data = [
  {
    id: 1,
    isduplicate: false,
    question: "광고주님! 반갑습니다!  어떤 사업을 하고 계시나요? ",
    subquestion: "",
    answer: [
      {
        id: 1,
        content: "B2C제품판매기업",
      },
      {
        id: 2,
        content: "개인사업자",
      },
      {
        id: 3,
        content: "프렌차이즈 본사",
      },
      {
        id: 4,
        content: "광고대행사",
      },
      {
        id: 5,
        content: "공공기관",
      },
      {
        id: 6,
        content: "기타",
      },
    ],
  },
  {
    id: 2,
    isduplicate: 0,
    question: "광고주님! 반갑습니다!  어떤 사업을 하고 계시나요? ",
    subquestion: "",
    answer: [{ id: 1, content: "답변을 입력해 주세요" }],
  },
  {
    id: 3,
    isduplicate: 0,
    question:
      "공공기관 및 프렌차이즈 본사의 문의는 연락처를 남겨주시면 유선연락 드리겠습니다 ",
    subquestion: "",
    answer: [{ id: 1, content: "답변을 입력해 주세요" }],
  },
  {
    id: 4,
    isduplicate: false,
    question: "광고주님이 운영하시는 업종은 무엇인가요? ",
    subquestion: "",
    answer: [
      { id: 1, content: "음식점" },
      { id: 2, content: "카페" },
      { id: 3, content: "숙박" },
      { id: 4, content: "엑티비티/체험" },
      { id: 5, content: "뷰티샵" },
      { id: 6, content: "병원" },
      { id: 7, content: "기타" },
    ],
  },
  {
    id: 5,
    isduplicate: 0,
    question: "광고주님이 운영하시는 업종은 무엇인가요? ",
    subquestion: "",
    answer: [{ id: 1, content: "답변을 입력해 주세요" }],
  },
  {
    id: 6,
    isduplicate: true,
    subtitle: "원하는 만큼 선택하세요!",
    question: "어떤 인플루언서[체험단]이 우리 매장을 홍보해주셨으면 좋겠나요? ",
    subquestion: "",
    answer: [
      { id: 1, content: "상위노출을 잘하는 인플루언서" },
      { id: 2, content: "인스타그램 인플루언서" },
      { id: 3, content: "유튜브 인플루언서 " },
      { id: 4, content: "미정  " },
    ],
  },
  {
    id: 7,
    isduplicate: true,
    subtitle: "원하는 만큼 선택하세요!",
    question: "어떤 방식을 통해 매체에 노출시키고 싶나요?",
    subquestion:
      "체험단 : 인플루언서가 직접 서비스를 이용한 후 콘텐츠 제작 \n기자단 : 인플루언서가 서비스를 체험하지 않고 ,\n 콘텐츠 소스 및  원고료를 제공받은 뒤 콘텐츠 제작",
    answer: [
      { id: 1, content: "체험단 방식" },
      { id: 2, content: "기자단 방식 (유튜브 해당X)" },
      { id: 3, content: "미정  " },
    ],
  },
  {
    id: 8,
    isduplicate: false,
    question: "어떤 방식의 홍보 전략을 원하시나요?",
    subquestion:
      "질적 : 상위 5%이내 인플루언서 기반\n양질 : 상위 40%이내 일반 인플루언서 기반\n양적 : 인플루언서의 질과 관계없이 저렴한 가격으로 양적인 홍보 진행",
    answer: [
      { id: 1, content: "질적 퀄리티 기반" },
      { id: 2, content: "양질의 퀄리티 기반" },
      { id: 3, content: "양적 퀄리티 기반" },
      { id: 4, content: "미정" },
    ],
  },
  {
    id: 9,
    isduplicate: false,
    question: "자사의 핵심 타겟 성별은 무엇입니까?",
    subquestion:
      "* 자사의 서비스를 주로 이용/구매하는 고객층을 선택하는 것이 효과적입니다",
    answer: [
      { id: 1, content: "여성 위주" },
      { id: 2, content: "남성 위주" },
      { id: 3, content: "남여 모두 " },
      { id: 4, content: "알아서 해주세요" },
    ],
  },
  {
    id: 10,
    isduplicate: true,
    subtitle: "원하는 만큼 선택하세요!",
    question: "자사의 핵심 타겟 연령은 무엇입니까?",
    subquestion:
      "* 자사의 서비스를 주로 이용/구매하는 연령층을 선택하는 것이 효과적입니다.",
    answer: [
      { id: 1, content: "10대" },
      { id: 2, content: "20대" },
      { id: 3, content: "30대" },
      { id: 4, content: "40대" },
      { id: 5, content: "50대 " },
      { id: 6, content: "60세 이상" },
      { id: 7, content: "알아서 해주세요 " },
    ],
  },
  {
    id: 11,
    isduplicate: false,
    question: "자사의 핵심 타겟의 직업군은 무엇입니까?",
    subquestion: "*선택에 따라 유사한 인플루언서가 매칭됩니다.",
    answer: [
      { id: 1, content: "초, 중, 고등학생" },
      { id: 2, content: "대학생" },
      { id: 3, content: "주부" },
      { id: 4, content: "직장인" },
      { id: 5, content: "기타 " },
      { id: 6, content: "미정" },
    ],
  },
  {
    id: 12,
    isduplicate: 0,
    question: "자사의 핵심 타겟의 직업군은 무엇입니까?",
    subquestion: "*선택에 따라 유사한 인플루언서가 매칭됩니다.",
    answer: [{ id: 1, content: "답변을 입력해 주세요" }],
  },
  {
    id: 13,
    isduplicate: 0,
    question: "자사의 오프라인 매장 주소 혹은 제품 온라인 구매처를 남겨주세요",
    subquestion:
      "EX) \n주소 :  경기도 화성시 와우안길 17 수원대학교 고운첨단과학기술원 905호 오블 \n온라인 판매처 : blog.naver.com/ohmarket22",
    answer: [{ id: 1, content: "답변을 입력해 주세요" }],
  },
  {
    id: 14,
    isduplicate: 0,
    question: "광고주님의 연락처는 무엇입니까?",
    subquestion:
      "EX)\n1. 기업이름 : 오블\n2. 직책 : 대표\n3. 이름 : 박예준\n4. 연락처 : 010-5361-1431",
    answer: [{ id: 1, content: "답변을 입력해 주세요" }],
  },
];

export default Data;
