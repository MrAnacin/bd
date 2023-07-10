import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render(){
    return(
      <div>
        <div className="login_block">
          <input className="log_text" type="text" placeholder="Логин" />
          <input className="pas_text" type="password" placeholder="Пароль" />
          <input className="log" type="submit" value={"Войти"} />
          <input className="reg" type="button" value={"Зарегистрироваться"} />
        </div>
      </div>
    )
  }
}