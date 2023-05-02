import React, { useContext } from "react";
import { Container, Image, Nav, Navbar, Tooltip } from "react-bootstrap";
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import { UserContext } from "../../provider/AuthProvider";
import { FaUser } from "react-icons/fa";
import image from '../../assets/close-up-portrait-curly-handsome-european-male.jpg'

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
              <Nav.Link href="#deets">
                {
                    user && 
                    // <FaUser  className="text-white" style={{height: '3rem'}}></FaUser>
                    // <img style={{height: '40px'}} className="text-white" src={image} alt="" srcset="" />
                    <Image src={image} style={{height: '50px', width: '50px'}} title={user.displayName}  roundedCircle />
                    
                }
              </Nav.Link>
              <div className="ms-3">
              {
                user ?
                <Link><button onClick={handleLogOut} type="button" class="btn btn-warning">LogOut</button></Link>:
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
