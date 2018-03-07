import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import logo1 from '../../assets/images/logo-brand-white.png';
import logo2 from '../../assets/images/logo-brand-green.png';

const Header2 = () => (
  <header className="style2">
    <div className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-5 header-info">
            <span className="hidden-xs">
              <i className="fa fa-map-marker" />
              &nbsp;123 Third Street Fifth Avenue, Greams Road, Chennai, Tamil Nadu, India
            </span>
            <span className="visible-xs"> <i className="fa fa-map-marker" /> <a href="#dummy"> View location</a> </span>
          </div>

          <div className="col-md-6 col-sm-6 col-xs-7">
            <ul className="header-links pull-right">
              <li><a href="#dummy">About Us</a></li>
              <li><a href="#dummy" className="modal-login" data-toggle="modal" data-target=".myModal">Login</a></li>
              <li><a href="#dummy" className="modal-register" data-toggle="modal" data-target=".myModal">Register </a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">
            <span className="logo1">
              <span><img src={logo1} alt="Chennai Acco" /></span>
              <span className="text-white">&nbsp;&nbsp;Chennai Acco</span>
            </span>
            <span className="logo2">
              <span><img src={logo2} alt="Chennai Acco" /></span>
              <span style={{ color: '#27ae60' }}>&nbsp;&nbsp;Chennai Acco</span>
            </span>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>

      <Nav pullRight>
        <NavItem eventKey={1} href="/">
          Home
        </NavItem>
        <NavItem eventKey={2} href="/propertylist">
          Properties
        </NavItem>
        <NavItem eventKey={3} href="/">
          Contact
        </NavItem>
        <NavItem className="nav-btn" href="/">
          <i className="fa fa-phone" /> +91 11111 11111
        </NavItem>
      </Nav>
    </Navbar>
  </header>
);

export default Header2;
