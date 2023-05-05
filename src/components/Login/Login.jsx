import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../provider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { logUser, googleSignIn, githubSignIn } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.form?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logUser(email, password)
      .then((result) => {
        const logUser = result.user;
        console.log(logUser);
        form.reset();
        setSuccess("User successfully login");
        setError("");
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setSuccess("");
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const signInUser = result.user;
        console.log(signInUser);
        setSuccess("User sign in by google successfully");
        setError("");
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
        setSuccess("");
      });
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        console.log(result);
        setSuccess("User sign in by google successfully");
        setError("");
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
        setSuccess("");
      });
  };
  return (
    <div className="row">
      <Container style={{boxShadow: '2px 2px 4px #888888'}} className="col-10 col-md-3 mx-auto my-5 border border-1 p-3 rounded">
     <div>
     <h3 className="">LogIn Your Account</h3>
      <Form onSubmit={handleLogIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className=" mb-3" controlId="formBasicPassword">
          <Form.Label >Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </Form.Group>
        <p className="text-center mb-1">
          <Button style={{ width: "90%" }} variant="warning" type="submit">
            <span className="fw-bold text-white">Login</span>
          </Button>
          <Form.Text className="text-success text-muted fw-bold">
            Don't have an account?{" "}
            <Link
              className="text-decoration-none fw-bold text-warning"
              to="/register"
            >
              Register
            </Link>
          </Form.Text>
        </p>
        <p className=" fw-bold text-center">
          <small className="">OR</small>
        </p>
        <div className="text-center mt-0 mb-2">
          <Button
            style={{ width: "90%" }}
            className="mb-2 fw-bold"
            onClick={handleGoogleSignIn}
            variant="outline-warning"
          >
            <FaGoogle></FaGoogle> Login With Google
          </Button>
          <Button
            style={{ width: "90%" }}
            className="fw-bold"
            onClick={handleGithubSignIn}
            variant="outline-warning"
          >
            <FaGithub></FaGithub> Login With Github
          </Button>
        </div>
        <Form.Text className="text-danger fw-bold text-center">
          {error}
        </Form.Text>
        <Form.Text
         className="text-success fw-bold text-center">{success}
         </Form.Text>
      </Form>
     </div>
    </Container>
    </div>
  );
};

export default Login;
