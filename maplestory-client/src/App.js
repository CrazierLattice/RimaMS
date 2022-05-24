import './App.css';
import logo from './images/rimams.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';

function App() {
  const isLoggedIn = false;
  return (
    <BrowserRouter>
      <Container>
        <div className="container">
          <Container>
            <header>
              <Row>
                <Navbar className="top-nav" expand="lg">
                  <h2>
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </h2>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav id="top-nav" className="me-auto ">
                      <h5>
                        <Link className="nav-link" to="/register">
                          Register
                        </Link>
                      </h5>
                      <h5>
                        <Link className="nav-link" to="/login">
                          Log In
                        </Link>
                      </h5>
                      <h5>
                        <Link className="nav-link" to="/forum">
                          Forum
                        </Link>
                      </h5>
                      <h5>
                        <Link className="nav-link" to="/download">
                          Download
                        </Link>
                      </h5>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </Row>
              <Row>
                <img
                  id="rimams-logo"
                  className="fade-in-logo"
                  src={logo}
                  alt="img"
                />
              </Row>
            </header>
          </Container>
          <main>
            <Container className="mt-3">
              <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/login" element={<LoginComponent />} />
                <Route path="/register" element={<RegisterComponent />} />
              </Routes>
            </Container>
          </main>
          <footer className="text-center mt-5">
            <h5>All rights reserved</h5>
          </footer>
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;
