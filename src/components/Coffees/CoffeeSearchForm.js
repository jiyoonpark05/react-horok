import classes from "./CoffeeSearchForm.module.css";
import Input from "../UI/Input";

const CoffeeSearchForm = () => {
  return (
    <section className={classes.searchForm}>
      <Input />
    </section>
  );
};

export default CoffeeSearchForm;
