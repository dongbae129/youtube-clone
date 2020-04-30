import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SIGN_UP_REQUEST } from "../reducers/user";

function Signup(props) {
  const [nickname, setNickname] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkTerm, setCheckTerm] = useState(false);
  const [passwordCheck, setPassCheck] = useState("");
  const dispatch = useDispatch();

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePassCheck = (e) => {
    setPassCheck(e.target.value);
  };
  const onChangeCheckTerm = (e) => {
    setCheckTerm(e.target.checked);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        nickname,
        userId: id,
        password,
      },
    });
    console.log({
      id,
      nickname,
      password,
      passwordCheck,
      checkTerm,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <input type="text" name="user-id" value={id} onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nickname">닉네임</label>
          <br />
          <input
            type="text"
            name={"user-nickname"}
            value={nickname}
            onChange={onChangeNickname}
          />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <input
            type="password"
            name="user-password"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-passcheck">비밀번호 확인</label>
          <br />
          <input
            type="password"
            name="user-passcheck"
            value={passwordCheck}
            onChange={onChangePassCheck}
          />
        </div>
        <div>
          약관에 동의합니다
          <input type="checkbox" onChange={onChangeCheckTerm} />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default Signup;
