import React, { useState } from "react";
import styles from '../registartion/login.module.css'
import logo_log from '../../image/logo_log.png'
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className={styles.log_box}>
      <div>
        <img className={styles.logo_log_box} src={logo_log} alt="logo" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.log_email_box}>
          <input
            placeholder="Логин"
            className={styles.log_email}
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.log_password_box}>
          <input
            placeholder="Пароль"
            className={styles.log_password}
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.log_btn_box}>
          <button className={styles.log_btn}>Логин</button>
          <Link to="/reg">
            <button className={styles.reg_btn} type="submit">Зарегистрироваться</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;