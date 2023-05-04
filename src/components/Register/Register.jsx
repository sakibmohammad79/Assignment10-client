import React, { useState } from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";


const Register = () => {
    const {registerUser} = useContext(UserContext);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleRegister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        

        registerUser(email, password)
        .then(result =>{
            const registerUser = result.user;
            console.log(registerUser);
            form.reset();
            setError('');
            setSuccess('User are register successfully')
            updateUserData(result.user, name, photo)
        })
        .catch(error =>{
            console.log(error.message);
            setError(error.message);
            setSuccess('');
        });
    }

    const updateUserData = (user, name, photo) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
      .then(() => {
        console.log('user profile updated');
        setError('');
      })
      .catch((error)=>{
        setError(error.message);
      })
    }

  return (
    <Container style={{boxShadow: '2px 2px 4px #888888'}} className="w-25 mx-auto my-5 border border-1 p-3 rounded">
      <h3 className="">Register Your Account</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Name" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            required
            placeholder="Photo URL"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            name="checkbox"
            label="accept"
          />
        </Form.Group>
        <div className="text-center">
        <Button style={{width: '90%'}} variant="warning" type="submit">
          <span className="fw-bold text-white">Register</span>
        </Button>
        </div>
      </Form>
      <Form.Text className="text-muted fw-bold">
        Already have an account? <Link className="text-decoration-none fw-bold text-warning" to="/login">Login</Link>
      </Form.Text>
      <Form.Text className="text-danger fw-bold text-center">
       <br></br>{error}
      </Form.Text>
      <Form.Text className="text-success fw-bold text-center">
        {success}
      </Form.Text>
    </Container>
  );
};

export default Register;
