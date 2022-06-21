import classes from "../UI/Select.module.css";

const Select = (props) => {
  const options = props.options.map((option) => <option>{option}</option>);

  return (
    <select className={classes.select}>
      <option className={classes.option} value="">
        선택
      </option>
      {options}
    </select>
  );
};

export default Select;
