import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render(){
    return(
      <div>
        <div className="login_block">
          <input type="text" />
          <input type="password" />
          <input type="submit" Логин />
          <input>Зарегистрироватся</input>
        </div>
      </div>
    )
  }
}