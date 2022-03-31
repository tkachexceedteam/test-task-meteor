import React, { useState } from "react";
import LoginForm from "./LoginForm";
import "./style.scss";
import RegistrationForm from "./RegistrationForm";

const Authentication = () => {
  const [userIsReadyToLogin, setUserIsReadyToLogin] = useState(true);
  const switchAuthHandler = (event) => {
    setUserIsReadyToLogin(event);
  };

  return (
    <>
      {userIsReadyToLogin ? (
        <LoginForm onGoToRegistrationClick={switchAuthHandler} />
      ) : (
        <RegistrationForm onGoToLoginClick={switchAuthHandler} />
      )}
    </>
  );
};

export default Authentication;
