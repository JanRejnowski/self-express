import React, { Component } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  username: Yup.string().min(2).max(50).required(),
  password: Yup.string().min(5).max(50).required(),
});

export default class Login extends Component {
  render() {
    return (
      <Container className="center form-dark text-white">
        <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={{
            username: "",
            password: "",
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    isValid={touched.username && !errors.username}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik02">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="text"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <div>
                New user?&nbsp;
                <a href="#" onClick={this.props.showRegisterFormHandler}>
                  Create an account
                </a>
              </div>
              <Button type="submit">Login</Button>
            </Form>
          )}
        </Formik>
      </Container>
    );
  }
}
