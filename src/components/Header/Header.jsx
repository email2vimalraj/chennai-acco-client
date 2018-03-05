import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import logo from '../../assets/images/logo-brand-white.png';

const Header = () => (
  <header className="style1">
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">
            <span>
              <img src={logo} alt="Chennai Acco" />
            </span>
            <span className="text-white">&nbsp;&nbsp;Chennai Acco</span>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>

      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          Home
        </NavItem>
        <NavItem eventKey={2} href="#">
          Properties
        </NavItem>
        <NavItem eventKey={3} href="#">
          Contact
        </NavItem>
        <NavItem className="nav-btn" href="#contact">
          <i className="fa fa-phone" /> +91 11111 11111
        </NavItem>
      </Nav>
    </Navbar>
  </header>
);

export default Header;
