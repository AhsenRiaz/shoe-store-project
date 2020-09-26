import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">ShoeStore</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      
      <Link to = "/">Home</Link>
      <Link to = "men" >Men</Link>
      <Link to = "women">Women</Link>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Header
