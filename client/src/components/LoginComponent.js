import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../reducers/userReducer';

const LoginComponent = () => {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.user.value);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (user) return navigate('/');
  }, [user]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/login-route/login',
        { username, password }
      );
      localStorage.setItem(
        'user',
        JSON.stringify({ user: data.user[0], token: data.token })
      );
      dispatch(logIn(data));
      console.log(user);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="login-container">
        <h2 className="text-center mb-4">Login Page</h2>
        <Form onSubmit={handleLogin} className="login-form d-flex flex-column">
          <Form.Group className="login-input mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              defaultValue={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
            />
            <Form.Text className="text-muted">
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
          <Button className="login-input" variant="warning" type="submit">
            Login
          </Button>

          <h6 className="login-input mt-3">
            Don't have an account yet? Click <Link to="/register">here</Link> to
            register
          </h6>
          <h6 className="login-input mt-3">
            Forgot your password? Click <Link to="/reset-password">here</Link>{' '}
            to reset your password.
          </h6>
        </Form>
      </div>
    </>
  );
};

export default LoginComponent;
