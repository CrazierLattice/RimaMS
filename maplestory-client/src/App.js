import './App.css';
import logo from './images/MapleStory1.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import ForumComponent from './components/ForumComponent';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user.value);

  return (
    <BrowserRouter>
      <Container>
        <div className="container">
          <Container>
            <header>
              <Row>
                <Navbar className="top-nav" expand="lg">
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav id="top-nav" className="me-auto ">
                      <h5>
                        <Link className="nav-link" to="/">
                          Home
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
                      {!user ? (
                        <>
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
                        </>
                      ) : (
                        <h5>
                          <Link className="nav-link" to="/user-panel">
                            User Panel
                          </Link>
                        </h5>
                      )}
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
                <Route path="/forum" element={<ForumComponent />} />
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
