import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

export default class MyNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" sticky="top" expand="lg" className="shaded">
        <Navbar.Brand>ExpressYourself</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link hred="/user">User</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/admin">Admin Board</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
