import styles from "./App.module.css";
import { Label } from "./components/label/Label";
import User from "./components/user/User.tsx";
import Product from "./components/Product";
import { CallBack } from "./components/callBack";
import { useState } from "react";
import ContronFields from "./components/ContronFields";
import ContronFieldsNew from "./components/ContronFieldsNew";
import ContronFields3 from "./components/ContronFieldsRefactor3";
import SelectControll from "./components/SelectControll";
import SelectComponent from "./components/SelectComponent";

const getUserFromServer = () => ({
  name: "Anna",
  age: 37,
  email: "anna@rcbd.org",
  phone: 5512217603,
});
const sendFormData = (formData) => {
  console.log(formData);
};

function App() {
  const user = getUserFromServer();
  const [value, setValue] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    login: "",
    password: "",
  });
  // const [email, setEmail] = useState("");
  // const [login, setLogin] = useState("");
  // const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    sendFormData(formData);
  };

  return (
    <div className={styles.app}>
      <Label color={"red"}>App</Label>
      <div>Information</div>
      <input
        type="text"
        value={value}
        // onChange={({ target }) => setValue(target.value)}
        onChange={({ target }) => setFormData(target.value)}
        // type="checkbox"
      />
      <div className={styles.content}>Any Content</div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Почта"
          value={formData.email}
          // onChange={({ target }) => setEmail(target.value)}
          onChange={({ target }) =>
            setFormData({ ...formData, email: target.value })
          }
        />
        <input
          name="login"
          type="text"
          placeholder="Логин"
          value={formData.login}
          // onChange={({ target }) => setLogin(target.value)}s
          onChange={({ target }) =>
            setFormData({ ...formData, login: target.value })
          }
        />
        <input
          name="password"
          type="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={({ target }) =>
            setFormData({ ...formData, password: target.value })
          }
        />
        <button type="submit">Отправить</button>
      </form>
      <User
        name={user.name}
        age={user.age}
        email={user.email}
        phone={user.phone}
      />
      <Product />
      <CallBack />
      <ContronFields />
      <ContronFieldsNew />
      <ContronFields3 />
      <SelectControll />
      <SelectComponent />
    </div>
  );
}

export default App;
