import classes from "../UI/Input.module.css";

const Input = (props) => {
  const placeholder = props.placeholder;

  return <input className={classes.input} placeholder={placeholder}></input>;
};

export default Input;
