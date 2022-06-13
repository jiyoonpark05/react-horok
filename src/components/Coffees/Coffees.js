import { Fragment } from "react";

import CoffeeSearchForm from "./CoffeeSearchForm";
import RatedCoffees from "./RatedCoffees";
import FloatingButton from "../UI/FloatingButton";
import classes from "./Coffees.module.css";

const Coffees = () => {
  return (
    <main className={classes.main}>
      <Fragment>
        <CoffeeSearchForm />
        <RatedCoffees />
        <FloatingButton />
      </Fragment>
    </main>
  );
};

export default Coffees;
