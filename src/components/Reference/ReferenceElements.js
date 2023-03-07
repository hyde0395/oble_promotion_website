import styled from "styled-components";

// 전체 컨테이너 부분
export const RefContainer = styled.div`
  height: 900px;
  z-index: 1;
  background-color: #ffffff;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
`;

export const RefWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 300px;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  background-color: #ffffff;
`;

export const RefTextWrapper = styled.div`
  max-width: 1200px;
  padding-top: 0;
  padding-bottom: 60px;
  text-align: center;
  background: #ffffff;
  margin-top: 100px;
  max-height: 200px;
`;

export const RefH1 = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  display: inline;
  font-weight: 600;
`;
export const RefPH1 = styled.h1`
  display: inline;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  background-image: linear-gradient(135deg, #3d85c1, #56a2d5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
export const RefBox = styled.div`
  width: 100%;
  height: 600px;
  padding-bottom: 150px;
  background: #ffffff;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
`;

export const SildeBox = styled.div`
  background-color: #ffffff;
  margin-left: auto;
  margin-right: auto;
`;
// 슬라이드 이미지 부분
export const RefImgs = styled.img`
  width: 330px;
  height: 330px;
`;

export const RefImgsBox = styled.div`
  text-align: center;
  width: 10px;
  padding: auto 0 10px;
`;

// 각 슬라이드의 전체 부분
export const RefSlideBox = styled.div`
  background-color: #5f5f5f;
  height: 450px;
  width: 330px;
  display: flex;
  flex-direction: column;
`;
// 슬라이드의 텍스트 박스
export const RefTextBox = styled.div`
  text-align: center;
  background-color: #3a3a3a;
`;
// 슬라이드의 텍스트 부분
export const RefText = styled.p`
  text-align: center;
  font-size: 12px;
  color: #ffffff;
`;

export const RefNav = styled.div`
  display: flex;
  top: 0;
  height: 30px;
  background-color: #ffa1a1;
`;

export const RefNavIcon = styled.img`
  height: 10px;
  width: 10px;
`;

export const RefNavName = styled.p`
  font-size: 15px;
`;
