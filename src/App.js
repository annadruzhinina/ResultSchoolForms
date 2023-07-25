import styles from "./App.module.css";
import { Label } from "./components/label/Label";
import User from "./components/user/User.tsx";
import PropTypes from "./components/PropTypes";
import { CallBack } from "./components/callBack";

const getUserFromServer = () => ({
  name: "Anna",
  age: 37,
  email: "anna@rcbd.org",
  phone: 5512217603,
});

function App() {
  const user = getUserFromServer();

  return (
    <div className={styles.app}>
      <Label color={"red"}>App</Label>
      <div>Information</div>
      <User
        name={user.name}
        age={user.age}
        email={user.email}
        phone={user.phone}
      />
      <PropTypes />
      <CallBack />
    </div>
  );
}

export default App;
