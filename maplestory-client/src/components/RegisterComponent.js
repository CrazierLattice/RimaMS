import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const RegisterComponent = () => {
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
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegisterComponent;
