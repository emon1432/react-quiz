import image from "../../assets/images/signup.svg";
import Illustration from "../Illustration";
import SignUpForm from "../SignUpForm";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration>
          <img src={image} alt="Sign up" />
        </Illustration>
        <SignUpForm />
      </div>
    </>
  );
}
