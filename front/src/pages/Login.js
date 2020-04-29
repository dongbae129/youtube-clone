import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN_REQUEST } from "../reducers/user";
const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { me, loginsuccess } = useSelector((state) => state.user);
  const nickname = "a3a3a";
  const dispatch = useDispatch();
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        nickname,
        userId: email,
        password,
      },
    });
    // axios
    //   .post("/api/user", {
    //     nickname,
    //     userId: email,
    //     password,
    //   })
    //   .then((res) => console.log(res));

    props.history.push("/");
  };
  useEffect(() => {
    console.log(me, "MEMEMEM");
    console.log(loginsuccess, "loginsuccess");
  }, [loginsuccess, me]);
  return (
    <LoginDiv>
      <LoginForm onSubmit={onSubmitForm}>
        <label>Email</label>
        <input type="text" value={email} onChange={onChangeEmail} />
        <label>Password</label>
        <input type="password" value={password} onChange={onChangePassword} />
        <br />
        <button>Login</button>
        <p>{me ? me.nickname : "me 없음"}</p>
      </LoginForm>
    </LoginDiv>
  );
}

export default Login;
