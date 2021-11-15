import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default class WelcomeMessage extends Component {
  render() {
    return (
      <Container className="center text-white border-white">
        <Row className="text-center">
          <Col xs={{ span: 10, offset: 1 }}>
            <h1>ExpressYourself</h1>
            <p>Log in and show everyone what's on your mind!</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={{ span: 10, offset: 1 }}>
            <div className="d-grid gap-2">
              <Button
                variant="outline-light"
                onClick={this.props.showLoginFormHandler}
                size="lg"
              >
                Login
              </Button>
              <div>
                New user?&nbsp;
                <a href="#" onClick={this.props.showRegisterFormHandler}>
                  Create an account
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
