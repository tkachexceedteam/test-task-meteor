import React from "react";
import { useInputHandler } from "../../../helpers/hooks/useInputHandler";
import "./style.scss";

const TaskForm = () => {
  const initialInputValues = {
    text: "",
  };

  const [inputValues, setInputValues, inputChangeHandler] =
    useInputHandler(initialInputValues);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    Meteor.call("tasks.insert", inputValues.text.trim());
    setInputValues(initialInputValues);
  };

  return (
    <form className="task-form" onSubmit={formSubmitHandler}>
      <input
        required
        type="text"
        name="text"
        placeholder="Type to add new tasks"
        value={inputValues.text}
        onChange={inputChangeHandler}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
