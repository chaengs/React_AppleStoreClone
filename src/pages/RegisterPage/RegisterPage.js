import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import clayful from 'clayful/client-js';

function RegisterPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); //페이지 새로고침을 막음
        var Customer = clayful.Customer;
        
        const payload = {
            email: email, //key값과 value가 같으면 email, <- 이런식으로 생략 작성 가능
            password,
        };

        Customer.createMe(payload, function(err, result) {
            if (err) {
                // Error case
                console.log(err.code);
                return;
            }
            // var headers = result.headers;
            var data = result.data;
            navigate("/login"); //회원가입 완료 후 로그인 페이지로 이동
            console.log(data);
        });
    }

    return (
        <div className="pageWrapper">
            <div className="auth-wrapper">
                <h1>회원가입</h1>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleEmailChange} placeholder="Apple Id" type="email" name="email" defaultValue="" />
                    <input onChange={handlePasswordChange} placeholder="암호" type="password" name="password" defaultValue="" />
    
                    <button type="submit">회원가입.</button>
                    <Link to="login" style={{ color:"gray", textDecoration:"none"}}> 이미 Apple ID가 있다면? 지금 로그인.</Link>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage;