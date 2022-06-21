import classes from "../UI/Radio.module.css";

const Radio = () => {
  return (
    <div className={classes.wrapper}>
      <form className={classes.form}>
        <div className={classes.ratingSlider}>
          <input type="radio" value="1" />
          <label htmlFor="1" rate-score="1" />
          <input type="radio" value="2" />
          <label htmlFor="2" rate-score="2" />
          <input type="radio" value="3" />
          <label htmlFor="3" rate-score="3" />
          <input type="radio" value="4" />
          <label htmlFor="4" rate-score="4" />
          <input type="radio" value="5" />
          <label htmlFor="5" rate-score="5" />
        </div>
      </form>
    </div>
  );
};

export default Radio;
