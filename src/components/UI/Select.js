import classes from "../UI/Select.module.css";

const Select = (props) => {
  const options = props.options.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));
  const id = props.id;
  const onChange = props.onChange;
  const onBlur = props.onBlur;
  let value = props.value;

  let select = props.hasError
    ? `${classes.select} invalid`
    : `${classes.select}`;

  return (
    <select
      className={select}
      id={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    >
      <option className={classes.option} value="">
        선택
      </option>
      {options}
    </select>
  );
};

export default Select;
