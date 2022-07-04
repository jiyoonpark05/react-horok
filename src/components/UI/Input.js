import classes from "../UI/Input.module.css";

const Input = (props) => {
  const placeholder = props.placeholder;
  const id = props.id;
  const onChange = props.onChange;
  const onBlur = props.onBlur;
  let value = props.value;

  let input = props.hasError ? `${classes.input} invalid` : `${classes.input}`;

  return (
    <input
      type="text"
      className={input}
      id={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    ></input>
  );
};

export default Input;
