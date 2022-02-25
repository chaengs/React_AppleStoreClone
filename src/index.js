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
  client: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ1YmQ0MGU4Y2I3ZjEzNGZhNTI0N2E0NDVkZWViZGQyNDNiZWE5MDcyMjE2YzQ2OTdkODI0MDFlM2NhZDE3YWMiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjQ0NDA0MjE3LCJzdG9yZSI6IktNVlE2NkVOMlBONy5NOTQ1QjRBTlpFVDgiLCJzdWIiOiJWWkxYRUFUQlNGWVgifQ.bWOZHxVk0cU4brHYc16J_XTT-mGeflzAcd4FwV-3PWM'
});

clayful.install('request', require('clayful/plugins/request-axios')(axios));


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
