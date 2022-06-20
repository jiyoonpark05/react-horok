import classes from "./CoffeeSearchForm.module.css";
import Search from "../UI/Search";

const CoffeeSearchForm = () => {
  return (
    <section className={classes.searchForm}>
      <Search />
    </section>
  );
};

export default CoffeeSearchForm;
