import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div>
      <div className={classes.input}>
        <input
          type="text"
          placeholder="ex) 원두 이름 / 생산지 / 가공방식 / 위치..."
        />
        <button>검색</button>
      </div>
      <span className={classes.spanLine} />
    </div>
  );
};

export default Input;
