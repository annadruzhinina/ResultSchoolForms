import React from "react";
import { useRef, useState } from "react";
import styles from "../App.module.css";

const sendFormData = (formData) => {
  console.log(formData);
};

function UseRef() {
  const [login, setLogin] = useState("");
  const [loginError, setLoginError] = useState(null);

  const submitButtonRef = useRef(null);

  const onLoginChange = ({ target }) => {
    setLogin(target.value);

    let newError = null;
    if (!/^[w_]*$/.test(target.value)) {
      newError =
        "Неверный логин. Допустимые символы: буквы, цифры и нижнее подчёркивание";
    } else if (target.value.length > 20) {
      newError = "Неверный логин. Должно быть не больше 20 символов";
    } else if (target.value.length === 20) {
      submitButtonRef.current.focus();
    }

    setLoginError(newError);
  };

  const onLoginBlur = ({ target }) => {
    if (target.value.length < 3) {
      setLoginError("Неверный логин. Должно быть не меньше 3 символов");
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    sendFormData({ login });
  };

  return (
    <div className={styles.app}>
      <form onSubmit={onSubmit}>
        {loginError && <div className={styles.errorLabel}>{loginError}</div>}
        <input
          name="login"
          type="text"
          value={login}
          placeholder="Логин"
          onChange={onLoginChange}
          onBlur={onLoginBlur}
        />
        <button ref={submitButtonRef} type="submit" disabled={!!loginError}>
          Отправить
        </button>
      </form>
    </div>
  );
}

export default UseRef;
