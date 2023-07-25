import React from "react";
import styles from "./user.module.css";

import Contact from "../contacts/Contact";
import { Label } from "../label/Label";

const User = ({ name, age, email, phone }) => {
  return (
    <div>
      <Label color={"blue"}>User</Label>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <Contact email={email} phone={phone} />
    </div>
  );
};

export default User;
