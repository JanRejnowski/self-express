import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Login from "./components/login.component";
import WelcomeMessage from "./components/welcome-message.component";
import MyNavbar from "./components/mynavbar.component";
import Register from "./components/register.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.showLoginFormHandler = this.showLoginFormHandler.bind(this);
    this.showRegisterFormHandler = this.showRegisterFormHandler.bind(this);

    this.state = {
      showLoginForm: false,
      showRegisterForm: false,
    };
  }

  showLoginFormHandler() {
    this.setState({
      showRegisterForm: false,
      showLoginForm: !this.state.showLoginForm,
    });
  }

  showRegisterFormHandler() {
    this.setState({
      showLoginForm: false,
      showRegisterForm: !this.state.showRegisterForm,
    });
  }

  render() {
    return (
      <div>
        <Container className="p-0 background-image" fluid>
          <MyNavbar />
          <Container>
            <Row>
              <Col>1 of 2 </Col>
              <Col>
                {!this.state.showLoginForm && !this.state.showRegisterForm && (
                  <WelcomeMessage
                    showLoginFormHandler={this.showLoginFormHandler}
                    showRegisterFormHandler={this.showRegisterFormHandler}
                  />
                )}
                {this.state.showLoginForm && !this.state.showRegisterForm && (
                  <Login
                    showRegisterFormHandler={this.showRegisterFormHandler}
                  />
                )}
                {this.state.showRegisterForm && !this.state.showLoginForm && (
                  <Register showLoginFormHandler={this.showLoginFormHandler} />
                )}
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}

export default App;
