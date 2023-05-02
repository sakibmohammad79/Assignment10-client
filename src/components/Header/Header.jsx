import React, { useContext } from "react";
import { Container, Image, Nav, Navbar, Tooltip } from "react-bootstrap";
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import { UserContext } from "../../provider/AuthProvider";
import { FaUser } from "react-icons/fa";
import image from '../../assets/close-up-portrait-curly-handsome-european-male.jpg'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';



const Header = () => {
    const {user, logOut} = useContext(UserContext);

    const handleLogOut = () =>{
        logOut()
        .then(result => console.log(result))
        .catch(error => console.log(error.message))
    }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
                <Link to='/' className="text-decoration-none text-white">Home</Link>
                <Link to='' className="text-decoration-none text-white mx-3">Blog</Link>
                <Link to='' className="text-decoration-none text-white">About</Link>
            </Nav>
            <Nav className="align-items-center">
                {
                    user && 
                    <>
                    <Tippy  content={user.displayName}><Image className="text-white" src={image} style={{height: '50px', width: '50px'}}
                     roundedCircle /></Tippy>
                    </>
                }
              <div className="ms-3">
              {
                user ?
                <Link><button onClick={handleLogOut} type="button" class="btn btn-warning">SignOut</button></Link>:
                <Link to='/login'><button type="button" class="btn btn-warning">Login</button></Link>
              }
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
