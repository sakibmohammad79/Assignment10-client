import React, { useContext } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import logo from '../../assets/logo.svg'
import { Link, NavLink} from "react-router-dom";
import { UserContext } from "../../provider/AuthProvider";
import { FaUser } from "react-icons/fa";
import image from '../../assets/close-up-portrait-curly-handsome-european-male.jpg'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './Header.css'
import ActiveLink from "../ActiveLink/ActiveLink";



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
          <Navbar.Brand href="/"><img style={{color: 'orange'}} src={logo} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <nav className="mx-auto">
                <ActiveLink to='/' >Home</ActiveLink>
                <ActiveLink className='px-5' to='/blog' >Blog</ActiveLink>
                <ActiveLink to='/about' >About</ActiveLink>
            </nav>
            <Nav className="align-items-center">
                {
                    user && 
                    <>
                    <Tippy  content={user.displayName}><Image className="text-white" src={image} style={{height: '50px', width: '50px'}}
                     roundedCircle /></Tippy>
                    </>
                }
              <div className="ms-2">
              {
                user ?
                <Link><button onClick={handleLogOut} type="button" class="btn btn-warning"><span className="fw-bold text-white">SignOut</span></button></Link>:
                <Link to='/login'><button type="button" class="btn btn-warning"><span className="fw-bold text-white">Login</span></button></Link>
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
