import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="header-area">
        <Navbar expand="lg">
          <NavLink to="/" className="logo">
            <span>Text Task.</span>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto menu d-flex align-items-center"></Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
