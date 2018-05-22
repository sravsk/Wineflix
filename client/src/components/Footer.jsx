import React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';

const Footer = (props) => {
  return (
    <footer>
      <Grid>
        <Nav justified>
          <NavItem
            eventKey={1}>
            What's Hot
          </NavItem>
          <NavItem
            eventKey={2}
            title="Item">
            My Pairings
          </NavItem>
          <NavItem
            eventKey={3}>
            My Wall
          </NavItem>
        </Nav>

        <div className="text-center small copyright">
          © copyright 2018 Wineflix
        </div>
      </Grid>
    </footer>
    )
}

export default Footer;