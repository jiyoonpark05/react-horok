import { Fragment } from "react";

import cupIcon from "../../assets/cupIcon.png";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img className={classes["cup-icon"]} src={cupIcon} />
        <h1>Horok Horok</h1>
      </header>
    </Fragment>
  );
};

export default Header;
