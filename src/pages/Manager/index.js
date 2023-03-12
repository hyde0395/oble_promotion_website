import React, { useEffect, useState } from "react";
import axios from "axios";
import * as Styled from "./styled";
import { useSelector } from "react-redux";

function Manager() {
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  const get1 = useSelector((state) => state.header);

  const [B_Data, setB_Data] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `${PROXY}/v1/survey-result/`,

        {
          headers: {
            //props로 전달받아야됨
            Authorization: get1,
          },
        }
      );

      setB_Data(response?.data);
      console.log(get1);
      // console.log(response.data);
      // console.log(B_Data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {B_Data.map((value, idx) => {
        return (
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
    </>
  );
}

export default Manager;
