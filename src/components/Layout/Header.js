import { Fragment } from "react";

import WriteButton from "../UI/WriteButton";
import cupIcon from "../../assets/cupIcon.png";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.container}>
          <div className={classes.title}>
            <img className={classes["cup-icon"]} src={cupIcon} />
            <h1>Horok Horok</h1>
          </div>
          <div></div>
          <div>
            <WriteButton onClick={props.onShowNote} />
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
