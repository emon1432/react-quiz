import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Form from "./Form";
import Button from "./formElement/Button";
import Checkbox from "./formElement/Checkbox";
import Info from "./formElement/Info";
import TextInput from "./formElement/TextInput";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      history("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account");
    }
  }

  return (
    <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter name"
        icon="person"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextInput
        type="email"
        placeholder="Enter email"
        icon="alternate_email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Checkbox
        type="checkbox"
        text="I agree to the Terms & Conditions"
        required
        value={terms}
        onChange={(e) => setTerms(e.target.checked)}
      />
      <Button disabled={loading} type="submit">
        <span>Submit now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <Info>
        Already have an account? <Link to="/login">Login</Link> instead.
      </Info>
    </Form>
  );
}
