import { Link } from "react-router-dom";
import image from "../../assets/images/signup.svg";
import classes from "../../styles/Signup.module.css";
import Form from "../Form";
import Button from "../formElement/Button";
import Checkbox from "../formElement/Checkbox";
import Info from "../formElement/Info";
import TextInput from "../formElement/TextInput";
import Illustration from "../Illustration";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration>
          <img src={image} alt="Sign up" />
        </Illustration>
        <Form className={classes.signUp}>
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <Checkbox type="checkbox" text="I agree to the Terms & Conditions" />
          <Button>
            <span>Submit now</span>
          </Button>
          <Info>
            Already have an account? <Link to="/login">Login</Link> instead.
          </Info>
        </Form>
      </div>
    </>
  );
}
