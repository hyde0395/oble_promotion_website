import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
function Manager() {
  const [B_Data, setB_Data] = useState(null);
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "/v1/survey-result"

        // {
        //   headers: {
        //     Authorization:
        //       "Bearer eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJzdWIiOiJVU1ctU1VHTy1CWS1LREgiLCJleHAiOjE2Nzc2NTM3ODF9.hyqLiDYKFClOnFrxi8HKGJ8MoIJj_y_izMJiuqicOizpUGIEBDps1ZYkdZyupo21ur8ErBNAXOjeIBaPEQxTOw, AccessToken=Bearer eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJzdWIiOiJPSEJMRS1CWS1LREgiLCJpZCI6MSwibG9naW5JZCI6InRlc3QiLCJzdGF0dXMiOiJBVVRIIiwiZXhwIjoxNjc4MTc2MzI0fQ.VYq1dXy53AcRSDnRQU3iVtla4Q7L3hO--pwp-4ePexU2_o79ALDRFNIAFT2bb7vWI_LhWSK-MSXj-xotefmwxg",
        //   },
        // }
      );
      setB_Data((await response).data);
      //   console.log(typeof B_Data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const string = () => {};
  return (
    <>
      <p>{JSON.stringify(B_Data)}</p>
    </>
  );
}

export default Manager;
