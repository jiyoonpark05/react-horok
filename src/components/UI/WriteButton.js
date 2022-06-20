import classes from "./WriteButton.module.css";
import penIcon from "../../assets/pen.png";

const WriteButton = (props) => {
  return (
    <div className={classes.container} onClick={props.onClick}>
      <p>기록하기</p>
      <img className={classes["pen-icon"]} src={penIcon} />
    </div>
  );
};

export default WriteButton;
