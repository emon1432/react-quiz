import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Form from "./Form";
import Button from "./formElement/Button";
import Info from "./formElement/Info";
import TextInput from "./formElement/TextInput";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const history = useNavigate();

  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to login");
    }
  }
  return (
    <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
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

      <Button type="submit" disabled={loading}>
        <span>Login</span>
      </Button>
      {error && <p className="error">{error}</p>}

      <Info>
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </Info>
    </Form>
  );
}
