import { useState } from "react";

const useSelect = (validateValue) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(selectedValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    const selectBox = event.target;
    let index = selectBox.selectedIndex;

    setSelectedValue(selectBox.options[index].value);
  };

  const selectBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setSelectedValue("");
    setIsTouched(false);
  };
  return {
    value: selectedValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    selectBlurHandler,
    reset,
  };
};

export default useSelect;
