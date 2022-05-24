import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const LoginComponent = () => {
  return (
    <div>
      <Form className="login-form d-flex flex-column">
        <Form.Group className="login-input mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" />
          <Form.Text className="text-muted">
            We'll never share your information with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="login-input mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="login-input" variant="warning" type="submit">
          Login
        </Button>

        <h6 className="login-input mt-5 mb-5">
          Don't have an account yet? Click <Link to="/register">here</Link> to
          register
        </h6>
      </Form>
    </div>
  );
};

export default LoginComponent;
