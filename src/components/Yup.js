// npm i yup
// https://github.com/jquense/yup#yup
import * as yup from "yup";
import { useState } from "react";
import styles from "./App.module.css";

const sendFormData = (formData) => {
  console.log(formData);
};

const loginChangeSchema = yup
  .string()
  .matches(
    /^[w_]*$/,
    "Неверный логин. Допустимые символы: буквы, цифры и нижнее подчёркивание"
  )
  .max(20, "Неверный логин. Должно быть не больше 20 символов");

const loginBlurSchema = yup
  .string()
  .min(3, "Неверный логин. Должно быть не меньше 3 символов");

const validateAndGetErrorMessage = (schema, value) => {
  let errorMessage = null;

  try {
    schema.validateSync(value);
  } catch ({ errors }) {
    errorMessage = errors
      .reduce((message, error) => message + error + "n", "")
      .trim();
  }

  return errorMessage;
};

export const App = () => {
  const [login, setLogin] = useState("");
  const [loginError, setLoginError] = useState(null);

  const onLoginChange = ({ target }) => {
    setLogin(target.value);

    const newError = validateAndGetErrorMessage(
      loginChangeSchema,
      target.value
    );

    setLoginError(newError);
  };

  const onLoginBlur = ({ target }) => {
    const newError = validateAndGetErrorMessage(loginBlurSchema, target.value);

    setLoginError(newError);
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
        <button type="submit" disabled={!!loginError}>
          Отправить
        </button>
      </form>
    </div>
  );
};
