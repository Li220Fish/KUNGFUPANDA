import React from 'react';
import { useState, useReducer } from "react";
import "./SignUpStyles.css";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      return { ...state, [action.field]: action.value };
    case "CLEAR":
      return initialState;
    default:
      throw new Error();
  }
}

export default function SignUp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { username, password, email, confirmPassword } = state;

  const updateChange = (field, value) => {
    dispatch({ type: "UPDATE", field, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(state, null, 2)); // send to backend
  };

  const handleClear = () => dispatch({ type: "CLEAR" });
  return (
    <div className="App">
      <form className="Form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <input
          placeholder="username"
          value={username}
          onChange={(e) => updateChange("username", e.target.value)}
        ></input>
        <input
          placeholder="email"
          value={email}
          onChange={(e) => updateChange("email", e.target.value)}
        ></input>
        <input
          placeholder="password"
          value={password}
          type="password"
          onChange={(e) => updateChange("password", e.target.value)}
        ></input>
        <input
          placeholder="confirm password"
          value={confirmPassword}
          type="password"
          onChange={(e) => updateChange("confirmPassword", e.target.value)}
        ></input>
        <div className="Btns">
          <button type="submit">Submit</button>
          <button type="reset" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
