import React from "react";
import "./style.scss";

const Tasks = ({ tasks, onCheckboxClick, onDeleteClick }) => {
  return (
    <ul className="tasks">
      {tasks.map((task) => {
        const checkboxChangeHandler = () => {
          onCheckboxClick(task);
        };

        const deleteButtonHandler = (e) => {
          e.stopPropagation();
          onDeleteClick(task);
        };

        return (
          <li key={task._id}>
            <input
              type="checkbox"
              checked={!!task.isChecked}
              onChange={checkboxChangeHandler}
            />
            <span>{task.text}</span>
            <button onClick={deleteButtonHandler}>&times;</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Tasks;
