import React, { useState } from "react";

const sendData = (formData) => {
  console.log(formData);
};

function ContronFields() {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    sendData({ email, login, password });
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Your email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          name="login"
          value={login}
          placeholder="login"
          onChange={(event) => setLogin(event.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Your password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ContronFields;
