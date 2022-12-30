import Checkbox from "../components/formElement/Checkbox";
import classes from "../styles/Answer.module.css";
export default function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox
        type="checkbox"
        className={`${classes.answer} ${classes.wrong}`}
        text="A New Hope 1"
      />
      <Checkbox
        type="checkbox"
        className={classes.answer}
        text="A New Hope 1"
      />
      <Checkbox
        type="checkbox"
        className={classes.answer}
        text="A New Hope 1"
      />
      <Checkbox
        type="checkbox"
        className={classes.answer}
        text="A New Hope 1"
      />
      <Checkbox
        type="checkbox"
        className={classes.answer}
        text="A New Hope 1"
      />
      <Checkbox
        type="checkbox"
        className={`${classes.answer} ${classes.correct}`}
        text="A New Hope 1"
      />
      <Checkbox
        type="checkbox"
        className={classes.answer}
        text="A New Hope 1"
      />
      <Checkbox
        type="checkbox"
        className={classes.answer}
        text="A New Hope 1"
      />
      <Checkbox
        type="checkbox"
        className={classes.answer}
        text="A New Hope 1"
      />
      <Checkbox
        type="checkbox"
        className={classes.answer}
        text="A New Hope 1"
      />
    </div>
  );
}
