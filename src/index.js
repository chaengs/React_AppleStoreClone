import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import clayful from "clayful/client-js";
import axios from "axios";

clayful.config({
  client: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjM5OGE4ZGZlMGVlOWJkYWMyNTkzZWY0ZGRkZGRmNmY0YzZhY2Y4MDkzNGE2OGFjNWI4NDA4OWQ0ZTA3NDYxMzkiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjQ0Mzk1Mjg3LCJzdG9yZSI6IktNVlE2NkVOMlBONy5MWTdRTVJQTlFBRlAiLCJzdWIiOiJKRVVaQTZMRTk1SlAifQ.I0ABA525d0CQrNAHJLe-YdJW9w9rkcCxf16UtHfmZoo'
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
