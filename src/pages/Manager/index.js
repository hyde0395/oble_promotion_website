import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import * as Styled from "./styled";
function Manager() {
  const [B_Data, setB_Data] = useState([]);
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

      setB_Data(response?.data);
      console.log(response.data);
      console.log(B_Data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  // const string = () => {
  //   for (const key in Object.keys(B_Data)) {
  //     return JSON.stringify(B_Data[key]);
  //   }
  // };

  return (
    <>
      {/* {B_Data.map((value, idx) => {})} */}
      {B_Data.map((value, idx) => {
        // let question = value.question[value.id];
        // let answer = value.answer[value.id];
        return (
          // <p>
          //   {question} {answer}
          // </p>
          <>
            <Styled.Box>
              <p style={{ color: "red" }}>{value.id}번</p>
              <p>
                {value.question1}{" "}
                <span style={{ color: "blue" }}>{value.answer1}</span>
              </p>
              <p>
                {value.question2}{" "}
                <span style={{ color: "blue" }}>{value.answer2}</span>
              </p>
              <p>
                {value.question3}{" "}
                <span style={{ color: "blue" }}>{value.answer3}</span>
              </p>
              <p>
                {value.question4}{" "}
                <span style={{ color: "blue" }}>{value.answer4}</span>
              </p>
              <p>
                {value.question5}{" "}
                <span style={{ color: "blue" }}>{value.answer5}</span>
              </p>
              <p>
                {value.question6}{" "}
                <span style={{ color: "blue" }}>{value.answer6}</span>
              </p>
              <p>
                {value.question7}{" "}
                <span style={{ color: "blue" }}>{value.answer7}</span>
              </p>
              <p>
                {value.question8}{" "}
                <span style={{ color: "blue" }}>{value.answer8}</span>
              </p>
              <p>
                {value.question9}{" "}
                <span style={{ color: "blue" }}>{value.answer9}</span>
              </p>
              <p>
                {value.question10}{" "}
                <span style={{ color: "blue" }}>{value.answer10}</span>
              </p>
              <p>
                {value.question11}{" "}
                <span style={{ color: "blue" }}>{value.answer11}</span>
              </p>
              <p>
                {value.question12}{" "}
                <span style={{ color: "blue" }}>{value.answer12}</span>
              </p>
              <p>
                {value.question13}{" "}
                <span style={{ color: "blue" }}>{value.answer13}</span>
              </p>
              <p>
                {value.question14}{" "}
                <span style={{ color: "blue" }}>{value.answer14}</span>
              </p>
            </Styled.Box>
          </>
        );
      })}

      {/* <Styled.Box>
        <p>{JSON.stringify(B_Data[6].id)}</p>
        <p>
          {JSON.stringify(B_Data[6].question1)}{" "}
          {JSON.stringify(B_Data[6].answer1)}
        </p>
        <p>
          {JSON.stringify(B_Data[6].question2)}{" "}
          {JSON.stringify(B_Data[6].answer2)}
        </p>
        <p>
          {JSON.stringify(B_Data[6].question3)}{" "}
          {JSON.stringify(B_Data[6].answer3)}
        </p>
        <p>
          {JSON.stringify(B_Data[6].question4)}{" "}
          {JSON.stringify(B_Data[6].answer4)}
        </p>
        <p>
          {JSON.stringify(B_Data[6].question5)}{" "}
          {JSON.stringify(B_Data[6].answer5)}
        </p>
        <p>
          {JSON.stringify(B_Data[6].question6)}{" "}
          {JSON.stringify(B_Data[6].answer6)}
        </p>
        <p>
          {JSON.stringify(B_Data[6].question7)}{" "}
          {JSON.stringify(B_Data[6].answer7)}
        </p>
        <p>
          {JSON.stringify(B_Data[6].question8)}{" "}
          {JSON.stringify(B_Data[6].answer8)}
        </p>
        <p>
          {JSON.stringify(B_Data[6].question9)}{" "}
          {JSON.stringify(B_Data[6].answer9)}
        </p>
        <p>
          {JSON.stringify(B_Data[6].question10)}{" "}
          {JSON.stringify(B_Data[6].answer10)}
        </p>
        <p>
          {JSON.stringify(B_Data[6].question11)}{" "}
          {JSON.stringify(B_Data[6].answer11)}
        </p>
        <p>
          {JSON.stringify(B_Data[6].question12)}{" "}
          {JSON.stringify(B_Data[6].answer12)}
        </p>
        <p>
          {JSON.stringify(B_Data[6].question13)}{" "}
          {JSON.stringify(B_Data[6].answer13)}
        </p>
        <p></p>
      </Styled.Box> */}
    </>
  );
}

export default Manager;
