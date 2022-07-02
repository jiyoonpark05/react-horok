import classes from "../UI/StarRating.module.css";

const StarRating = () => {
  return (
    <div className={classes.starRating}>
      <input type="radio" id="5-stars" name="rating" value="5" />
      <label htmlFor="5-stars" className={classes.star}>
        &#9733;
      </label>
      <input type="radio" id="4-stars" name="rating" value="4" />
      <label htmlFor="4-stars" className={classes.star}>
        &#9733;
      </label>
      <input type="radio" id="3-stars" name="rating" value="3" />
      <label htmlFor="3-stars" className={classes.star}>
        &#9733;
      </label>
      <input type="radio" id="2-stars" name="rating" value="2" />
      <label htmlFor="2-stars" className={classes.star}>
        &#9733;
      </label>
      <input type="radio" id="1-star" name="rating" value="1" />
      <label htmlFor="1-star" className={classes.star}>
        &#9733;
      </label>
    </div>
  );
};

export default StarRating;
