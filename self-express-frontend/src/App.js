import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import "./App.css";

class App extends Component {

  render() {
    return (
      <div>
        <Navbar bg="light" sticky="top" expand="lg">
          <Navbar.Brand>
            ExpressYourself
          </Navbar.Brand>

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
      </div>
    );
  }
}

export default App;
