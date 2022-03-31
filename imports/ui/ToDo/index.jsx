import { TasksCollection } from "/imports/db/TasksCollection";
import { useTracker } from "meteor/react-meteor-data";
import React, { useState } from "react";
import { getTasksFilter } from "../../helpers";
import "./style.scss";
import TaskForm from "./TaskForm";
import Tasks from "./Tasks";

export const ToDoList = () => {
  const [hideCompleted, setHideCompleted] = useState(false);

  const { tasks, isLoading } = useTracker(() => {
    const user = Meteor.user();
    const tasksFilter = getTasksFilter(hideCompleted, user._id);

    const noDataAvailable = { tasks: [], pendingTasksCount: 0 };
    if (!Meteor.user()) {
      return noDataAvailable;
    }
    const handler = Meteor.subscribe("tasks");

    if (!handler.ready()) {
      return { ...noDataAvailable, isLoading: true };
    }

    const tasks = TasksCollection.find(tasksFilter, {
      sort: { isChecked: 1, createdAt: -1 },
    }).fetch();

    return { tasks, isLoading: false };
  });

  const onCheckboxClick = ({ _id, isChecked }) => {
    Meteor.call("tasks.setIsChecked", _id, !isChecked);
  };

  const onDeleteTaskClick = ({ _id }) => {
    Meteor.call("tasks.remove", _id);
  };

  const onFilterChange = () => {
    setHideCompleted(!hideCompleted);
  };

  return (
    <main className="main">
      <TaskForm />

      <div className="filter">
        <button onClick={onFilterChange}>
          {hideCompleted ? "Show All" : "Hide Completed"}
        </button>
      </div>

      {isLoading && <div className="loading">loading...</div>}

      <Tasks
        tasks={tasks}
        onDeleteClick={onDeleteTaskClick}
        onCheckboxClick={onCheckboxClick}
      />
    </main>
  );
};
