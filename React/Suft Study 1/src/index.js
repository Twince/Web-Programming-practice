import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Page1 from './Page1'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" component = {App} />
        <Route exact path = "/page" component = {Page1} />
        // exact : 정확한 주소로 입력할 시 접속 (미 입력시 유연한 주소로 접속 가능)
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
