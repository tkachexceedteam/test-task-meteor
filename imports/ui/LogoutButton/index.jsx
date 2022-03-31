import { useTracker } from "meteor/react-meteor-data";
import React from "react";
import "./style.scss";

const LogoutButton = () => {
  const user = useTracker(() => Meteor.user());
  const logout = () => Meteor.logout();

  return (
    <>
      {user && (
        <div className="user" onClick={logout}>
          {user.username} 🚪
        </div>
      )}
    </>
  );
};

export default LogoutButton;
