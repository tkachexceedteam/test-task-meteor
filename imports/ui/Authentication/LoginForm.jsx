import { Meteor } from "meteor/meteor";
import React from "react";
import { useInputHandler } from "../../helpers/hooks/useInputHandler";

const LoginForm = ({ onGoToRegistrationClick }) => {
  const initialFormValues = {
    username: "",
    password: "",
  };

  const [formValues, , changeFormValuesHandler] =
    useInputHandler(initialFormValues);

  const submitHandler = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(formValues.username, formValues.password);
  };

  const switchToRegistrationHandler = () => {
    onGoToRegistrationClick(false);
  };

  return (
    <div className="auth-container">
      <form onSubmit={submitHandler} id="login-form" className="auth-form">
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formValues.username}
            required
            onChange={changeFormValuesHandler}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formValues.password}
            required
            onChange={changeFormValuesHandler}
          />
        </div>
      </form>

      <div className="auth-control">
        <div>
          <button className="not-primary" onClick={switchToRegistrationHandler}>
            Create Account
          </button>
        </div>
        <div>
          <button className="primary" form="login-form">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
