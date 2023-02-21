import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
function Manager() {
  const [B_Data, setB_Data] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/v1/survey-result");

      setB_Data(response.data);

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
