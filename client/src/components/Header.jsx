import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const logo = require ('../assets/classygazelles_small.png');

const Header = (props) => {
  return (
    <Navbar>
     <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
              <img className="img-logo" src={logo}/>
            </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem
              eventKey={1}
              href="signup">
              Create account
            </NavItem>
            <NavItem
              eventKey={2}
              href="login">
              Login
            </NavItem>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
  }

export default Header;
