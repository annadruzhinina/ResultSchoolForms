import React, { useState } from "react";

const sendData = (formData) => {
  console.log(formData);
};

function ContronFields() {
  const [formData, setFormData] = useState({
    email: "",
    login: "",
    password: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    sendData(formData);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Your email"
          onChange={(event) =>
            setFormData({
              ...formData,
              email: event.target.value,
            })
          }
        />
        <input
          type="text"
          name="login"
          value={formData.login}
          placeholder="login"
          onChange={(event) =>
            setFormData({
              ...formData,
              login: event.target.value,
            })
          }
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Your password"
          onChange={(event) =>
            setFormData({
              ...formData,
              password: event.target.value,
            })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ContronFields;
