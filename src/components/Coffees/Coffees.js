import { Fragment } from "react";

import CoffeeSearchForm from "./CoffeeSearchForm";
import RatedCoffees from "./RatedCoffees";
import classes from "./Coffees.module.css";

const Coffees = () => {
  return (
    <main className={classes.main}>
      <Fragment>
        <CoffeeSearchForm />
        <RatedCoffees />
      </Fragment>
    </main>
  );
};

export default Coffees;
