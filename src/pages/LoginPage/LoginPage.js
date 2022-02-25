import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import clayful from 'clayful/client-js';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
    setPassword(event.target.value);
};

const handleSubmit = (event) => {
  event.preventDefaul(); // 페이지 새로고침을 막음
  var Customer = clayful.Customer;

  var payload = {
    email,
    password,
  };

  Customer.autheticate(payload, function (err, result) {
    if (err) {
      console.log(err.code);
      return;
    }

    var data = result.data;
    localStorage.setItem("customerUid", data.customer); // localStorage에 로그인 데이터 저장
    localStorage.setItem("accessToken", data.token);
    navigate("/");
  });
};

  return (
    <div className="auth-wrapper">
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
          <input onChange={handleEmailChange} placeholder="Apple Id" type="email" name="email" defaultValue="" />
          <input onChange={handlePasswordChange} placeholder="암호" type="password" name="password" defaultValue="" />
          <p>
            Apple ID는 iTunes, App Store, iCloud에 로그인할 때 사용하는 이메일 주소입니다.
          </p>

          <button type="submit">로그인</button>
          <Link to="register" style={{ color:"gray", textDecoration:"none"}}>Apple ID가 없으신가요? 지금 생성.</Link>
      </form>
    </div>
  )
}

export default LoginPage