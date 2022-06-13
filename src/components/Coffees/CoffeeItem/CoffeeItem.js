import Card from "../../UI/Card";
import classes from "./CoffeeItem.module.css";

const CoffeeItem = (props) => {
  return (
    <Card>
      <div className={classes.cardFrame}>
        <img className={classes["coffee-image"]} src={props.img}></img>
        <div className={classes.description}>
          <h3>{props.name}</h3>
          <p>
            {props.country} {props.location}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CoffeeItem;
