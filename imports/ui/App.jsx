import { useTracker } from "meteor/react-meteor-data";
import React from "react";
import "./App.scss";
import Header from "./Header";
import Authentication from "./Authentication";
import { ToDoList } from "./ToDo";

export const App = () => {
  const user = useTracker(() => Meteor.user());

  return (
    <div className="app">
      <Header />
      {user ? <ToDoList /> : <Authentication />}
    </div>
  );
};
