import { useTracker } from "meteor/react-meteor-data";
import React from "react";
import { TasksCollection } from "../../db/TasksCollection";
import { pendingOnlyFilter } from "../../helpers";
import LogoutButton from "../LogoutButton";
import "./style.scss";

const Header = () => {
  const { pendingTasksCount } = useTracker(() => {
    const noDataAvailable = { pendingTasksCount: 0 };
    if (!Meteor.user()) {
      return noDataAvailable;
    }
    const handler = Meteor.subscribe("tasks");

    if (!handler.ready()) {
      return { ...noDataAvailable, isLoading: true };
    }
    const user = Meteor.user();
    const pendingTasksCount = TasksCollection.find(
      pendingOnlyFilter(user._id)
    ).count();

    return { pendingTasksCount };
  });

  const pendingTasksTitle = pendingTasksCount ? ` (${pendingTasksCount})` : "";

  return (
    <header>
      <div className="app-bar">
        <div className="app-header">
          <h1>📝️ To Do List {pendingTasksTitle}</h1>
        </div>
        <LogoutButton />
      </div>
    </header>
  );
};

export default Header;
