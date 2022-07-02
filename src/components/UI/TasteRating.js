import classes from "../UI/TasteRating.module.css";

const TasteRating = () => {
  return (
    <div className={classes.tasteRating}>
      <div className={classes.ratingBar} id="bar">
        <div>
          <input type="radio" name="tasteRating" value="5" />
          <label htmlFor="5">5</label>
        </div>
        <div>
          <input type="radio" name="tasteRating" value="4" />
          <label htmlFor="4">4</label>
        </div>
        <div>
          <input type="radio" name="tasteRating" value="3" />
          <label htmlFor="3">3</label>
        </div>
        <div>
          <input type="radio" name="tasteRating" value="2" />
          <label htmlFor="2">2</label>
        </div>
        <div>
          <input type="radio" name="tasteRating" value="1" />
          <label htmlFor="1">1</label>
        </div>
      </div>
    </div>
  );
};

export default TasteRating;
