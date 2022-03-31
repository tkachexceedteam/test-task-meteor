import { useState } from "react";

export const useInputHandler = (initialInputValues) => {
  const [inputValues, setInputValues] = useState(initialInputValues);

  const inputChangeHandler = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  return [inputValues, setInputValues, inputChangeHandler]
};
