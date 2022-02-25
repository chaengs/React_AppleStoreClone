import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import clayful from "clayful/client-js";

import axios from "axios";
import "./css/auth.css";

clayful.config({
  client: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijc2NjkzMGI2Yjg0NTY2MjZkMjE1MDMxOWNhMzMzZDVjMTE5YWRjNjc5MTUxNmQxZWU5MThiMDkyZjQ3NDZkZDIiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjQ1Nzg5NzczLCJzdG9yZSI6IktNVlE2NkVOMlBONy5NOTQ1QjRBTlpFVDgiLCJzdWIiOiJWWkxYRUFUQlNGWVgifQ.Xwzos2US-BqQVVMO-YjOAPeufmGq4fxkrDGFnYSSiYo'
});

clayful.install('request', require('clayful/plugins/request-axios')(axios));
// clayful.install('request', axiosRequestMiddleware(axios));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
