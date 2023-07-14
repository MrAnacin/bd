import React, { useState } from "react";

const PasswordForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      // Пароли совпадают, выполняем дополнительные действия здесь
    } else {
      setPasswordsMatch(false);
    }
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Логин"
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
      <label>
        Пароль:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <label>
        Повторите пароль:
        <input
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </label>
      <br />
      {!passwordsMatch && <p>Пароли не совпадают</p>}
      <button type="submit">Отправить</button>
    </form>
  );
};

export default PasswordForm;