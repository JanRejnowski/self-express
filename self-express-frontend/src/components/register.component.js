import React, { Component } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  username: Yup.string().min(2).max(50).required(),
  email: Yup.string()
    .min(2)
    .max(50)
    .matches(
      '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/'
    )
    .required(),
  password: Yup.string().min(5).max(50).required(),
});

export default class Register extends Component {
  render() {
    return (
      <Container className="center form-dark text-white">
        <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={{
            username: "",
            password: "",
            email: "",
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
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik03">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <div>
                Already have an account?&nbsp;
                <a href="#" onClick={this.props.showLoginFormHandler}>
                  Login
                </a>
              </div>
              <Button type="submit">Register</Button>
            </Form>
          )}
        </Formik>
      </Container>
    );
  }
}
