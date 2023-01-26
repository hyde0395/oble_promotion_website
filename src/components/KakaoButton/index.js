import React from "react";

const KakaoButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    try {
      if (window.Kakao) {
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
          kakao.init("JavaScript 서비스 Key");
        }
      }

      window.Kakao.Channel.createChatButton({
        container: "#kakao-talk-channel-chat-button",
        channelPublicId: "xkAERxj",
        title: "consult",
        size: "small",
        color: "yellow",
        shape: "pc",
        supportMultipleDensities: true,
      });
      document.body.appendChild(script);
      document.body.removeChild(script);
    } catch (err) {}
  }, []);
  return (
    <>
      <div id="kakao-talk-channel-chat-button"></div>
    </>
  );
};

export default KakaoButton;
