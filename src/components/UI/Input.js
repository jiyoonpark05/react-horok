import classes from "../UI/Input.module.css";

const Input = (props) => {
  const placeholder = props.placeholder;
  const id = props.id;
  const onChange = props.onChange;
  let value = props.value;

  return (
    <input
      type="text"
      className={classes.input}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    ></input>
  );
};

export default Input;
