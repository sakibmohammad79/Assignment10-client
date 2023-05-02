import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../provider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    const {logUser, googleSignIn, githubSignIn} = useContext(UserContext);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.form?.pathname || '/';

    const handleLogIn = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logUser(email, password)
        .then((result) => {
            const logUser = result.user;
            console.log(logUser);
            form.reset();
            setSuccess('User successfully login');
            setError('');
            navigate(from)
        })
        .catch((error) => {
            console.log(error.message);
            setError(error.message);
            setSuccess('');
        })

        

      }
      const handleGoogleSignIn = () =>{
        googleSignIn()
        .then((result) => {
          const signInUser = result.user;
          console.log(signInUser);
          setSuccess('User sign in by google successfully')
          setError('');
          navigate(from)
        })
        .catch((error) => {
          setError(error.message);
          setSuccess('');
        })
      }  
      const handleGithubSignIn = () =>{
        githubSignIn()
        .then((result) => {
          console.log(result);
          setSuccess('User sign in by google successfully')
          setError('');
          navigate(from);
        })
        .catch((error) =>{
          setError(error.message)
          setSuccess('');
        })
      }
  return (
    <Container className="w-25 mx-auto my-5 border border-1 p-3 rounded">
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </Form.Group>
        <p>
          <Button variant="warning" type="submit">
            Login
          </Button>
        </p>
        <Form.Text className="text-success">
          Don't have an account? <Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-danger fw-bold">
       <br></br>{error}
      </Form.Text>
      <Form.Text className="text-success fw-bold">
        {success}
      </Form.Text>
      <div className="d-flex pt-2 gap-2">
      <Button onClick={handleGoogleSignIn} variant="outline-warning"><FaGoogle></FaGoogle> Login With Google</Button>
      <Button onClick={handleGithubSignIn} variant="outline-warning"><FaGithub></FaGithub> Login With Github</Button>
      </div>
      </Form>
    </Container>
  );
};

export default Login;
