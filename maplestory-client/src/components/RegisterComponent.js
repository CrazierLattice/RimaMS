import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { registered } from '../reducers/userReducer';

const RegisterComponent = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (user) return navigate('/');
  }, [user]);

  const registerAccount = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Password do not match!', { toastId: 1 });
      return;
    }
    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/register-route/register',
        {
          username,
          password,
        }
      );
      toast.success('User created successfully, redirecting to log in.', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      toast.error(error?.response?.data.message, { toastId: 2 });
    }
  };
  return (
    <>
      <div className="login-container">
        <h2 className="text-center mb-4">Register Page</h2>
        <Form
          onSubmit={registerAccount}
          className="login-form d-flex flex-column mb-5"
        >
          <Form.Group className="login-input mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              defaultValue={username}
              onChange={(e) => setUserName(e.target.value)}
              className="text-muted"
              type="text"
              placeholder="Username"
            />
            <Form.Text>
              We'll never share your information with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="login-input mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              defaultValue={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="login-input mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              required
              defaultValue={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Group>
          <Button className="login-input" variant="warning" type="submit">
            Register
          </Button>
          <h6 className="login-input mt-3">
            Already have an account? Click <Link to="/login">here</Link> to
            login
          </h6>
        </Form>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default RegisterComponent;
