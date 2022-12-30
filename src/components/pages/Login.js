import { Link } from "react-router-dom";
import image from "../../assets/images/login.svg";
import classes from "../../styles/Login.module.css";
import Form from "../Form";
import Button from "../formElement/Button";
import Info from "../formElement/Info";
import TextInput from "../formElement/TextInput";
import Illustration from "../Illustration";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration>
          <img src={image} alt="Login" />
        </Illustration>
        <Form className={classes.login}>
          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <Button>
            <span>Login</span>
          </Button>
          <Info>
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </Info>
        </Form>
      </div>
    </>
  );
}
