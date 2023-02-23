import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  // const option = {
  //   url: "v1/user/login",
  //   method: "POST",
  //   header: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   data: {
  //     email: Email,
  //     password: Password,
  //   },
  // };
  const navigate = useNavigate();
  const navigateToSurvey = () => {
    navigate("/Manager");
  };

  const LoginUsers = async () => {
    axios
      .post("v1/user/login", {
        loginId: Email,
        password: Password,
      })
      .then((response) => {
        console.log(response.headers.authorization);
        navigateToSurvey();
      })
      .catch((e) => {
        alert("아이디 혹은 비밀번호가 잘못되었습니다");
        console.log(e);
      });
  };

  // useEffect(() => {
  //   LoginUsers();
  // }, []);

  const onSubmitHandler = (event) => {
    // 버튼만 누르면 리프레시 되는것을 막아줌
    event.preventDefault();
    LoginUsers();
    console.log("Id", Email);
    console.log("Password", Password);

    let body = {
      email: Email,
      password: Password,
    };
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Id</label>
        <input type="id" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <br />
        <button formAction="">Login</button>
      </form>
    </div>
  );
}

export default Login;
