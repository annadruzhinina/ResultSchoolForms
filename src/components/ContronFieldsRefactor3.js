import React, { useState } from "react";

const initialState = {
  email: "",
  login: "",
  password: "",
};

const useStore = () => {
  const [state, setState] = useState(initialState);
  return {
    getState: () => state,
    updateState: (fieldName, newValue) => {
      setState({ ...state, [fieldName]: newValue });
    },
    resetState: () => {
      setState(initialState);
    },
  };
};

const sendData = (formData) => {
  console.log(formData);
};

function ContronFields3() {
  const { getState, updateState, resetState } = useStore();

  const onSubmit = (event) => {
    event.preventDefault();
    sendData(getState());
  };

  const { email, login, password } = getState();
  const onChange = ({ target }) => updateState(target.name, target.value);
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Your email"
          onChange={onChange}
        />
        <input
          type="text"
          name="login"
          value={login}
          placeholder="login"
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Your password"
          onChange={onChange}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={resetState}>
          Reset
        </button>
      </form>
    </>
  );
}

export default ContronFields3;
