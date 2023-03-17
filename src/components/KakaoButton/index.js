import React, { useEffect } from "react";

const KakaoButton = ({ isOpen }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    try {
      if (window.Kakao) {
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
          kakao.init("7ba41323a4f975863e9dd72743145664");
        }
      }
      window.Kakao.Channel.createChatButton({
        container: "#kakao-talk-channel-chat-button",
        channelPublicId: "_xkAERxj",
        title: "consult",
        size: "small",
        color: "yellow",
        supportMultipleDensities: true,
      });
      document.body.appendChild(script);
      document.body.removeChild(script);
    } catch (err) {}
  }, []);

  return (
    <div
      isOpen={isOpen}
      style={{
        position: "fixed",
        zIndex: "999",
        bottom: "5px",
        right: "10px",
      }}
      id="kakao-talk-channel-chat-button"
    ></div>
  );
};

export default KakaoButton;
