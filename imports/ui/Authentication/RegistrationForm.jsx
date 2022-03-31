import React, { useState } from "react";
import { useInputHandler } from "../../helpers/hooks/useInputHandler";

const RegistrationForm = ({ onGoToLoginClick }) => {
  const initialFormValues = {
    username: "",
    password: "",
    repeatPassword: "",
  };

  const [{ username, password, repeatPassword }, , changeFormValuesHandler] =
    useInputHandler(initialFormValues);

  const [error, setError] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      setError(new Error("Passwords is not the same."));
      return;
    }
    Accounts.createUser({ username: username, password: password });
  };

  const switchToLogInHandler = () => {
    onGoToLoginClick(true);
  };

  return (
    <div className="auth-container">
      <form
        onSubmit={submitHandler}
        id="registration-form"
        className="auth-form"
      >
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            required
            pattern="[\w]{4,}"
            onChange={changeFormValuesHandler}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            required
            pattern="[\w]{4,}"
            onChange={changeFormValuesHandler}
          />
        </div>

        <div>
          <label htmlFor="repeatPassword">Password</label>
          <input
            type="password"
            placeholder="Repeat password"
            name="repeatPassword"
            value={repeatPassword}
            required
            pattern="[\w]{4,}"
            onChange={changeFormValuesHandler}
          />
        </div>

        {error && (
          <div>
            <p>{error.message}</p>
          </div>
        )}
      </form>

      <div className="auth-control">
        <div>
          <button className="not-primary" onClick={switchToLogInHandler}>
            Log In
          </button>
        </div>
        <div>
          <button className="primary" form="registration-form">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
