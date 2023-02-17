import React, { useEffect } from "react";
import Home from "../../pages";
const KakaoButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    try {
      if (window.Kakao) {
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
          kakao.init("c271a26ef129b946fd580bb08f9f0112");
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
    <>
      <div
        style={{
          position: "fixed",
          zIndex: "999",
          bottom: "5px",
          right: "10px",
        }}
        id="kakao-talk-channel-chat-button"
      ></div>
    </>
  );
};

export default KakaoButton;
