import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../provider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    const {logUser} = useContext(UserContext);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);


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
        })
        .catch((error) => {
            console.log(error.message);
            setError(error.message);
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
          <Button variant="primary" type="submit">
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
      <Button variant="outline-warning"><FaGoogle></FaGoogle> Login With Google</Button>
      <Button variant="outline-warning"><FaGithub></FaGithub> Login With Github</Button>
      </div>
      </Form>
    </Container>
  );
};

export default Login;
