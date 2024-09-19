import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  return (
    <>
      <form>
        <input type="email" placeholder="아이디" /> <br />
        <input type="password" placeholder="비밀번호" />
        <button>로그인</button>
      </form>
      <p>아직 회원이 아니신가요?</p>
      <span>회원가입</span>
    </>
  );
}

export default Login;
