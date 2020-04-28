import React, { useState } from "react";
import styled from "styled-components";
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

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(email, password);
    console.log(props);
    props.history.push("/");
  };
  return (
    <LoginDiv>
      <LoginForm onSubmit={onSubmitForm}>
        <label>Email</label>
        <input type="email" value={email} onChange={onChangeEmail} />
        <label>Password</label>
        <input type="password" value={password} onChange={onChangePassword} />
        <br />
        <button>Login</button>
      </LoginForm>
    </LoginDiv>
  );
}

export default Login;
