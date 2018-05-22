import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = (props) => {
  return (
    <Navbar>
     <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
              <img className="img-logo" src="./assets/classygazelles_v1.png"/>
            </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem
              eventKey={1}
              href="#">
              Create account
            </NavItem>
            <NavItem
              eventKey={2}
              href="#">
              Login
            </NavItem>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
  }

export default Header;