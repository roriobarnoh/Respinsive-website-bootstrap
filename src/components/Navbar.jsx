import { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'
import { useAuth } from '../auth/AuthContext';

function AppNavbar() {
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Navbar
      expand="lg"
      className={`main-navbar position-fixed w-100 top-0 ${scrolled ? 'navbar-scrolled' : ''
        }`}
      variant={scrolled ? 'light' : 'dark'}
      bg={scrolled ? 'light' : 'transparent'}
    >
      <Container>
        <Navbar.Brand as={RouterLink} to="/">
          MyWebsite
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <ScrollLink to="about" smooth={true} duration={500} offset={-70} className='nav-link-clean mx-2'>About</ScrollLink>
            <ScrollLink to="portfolio" smooth={true} duration={500} offset={-70} className='nav-link-clean mx-2'>
              Portfolio
            </ScrollLink>
            <ScrollLink to="info" smooth={true} duration={500} offset={-70} className='nav-link-clean mx-2'>
              Info
            </ScrollLink>
            {user ? (
              <Button variant="outline-primary" size="sm" onClick={handleLogout} className="ms-2">
                Logout
              </Button>
            ) : (
              <>
                <Nav.Link as={RouterLink} to="/login" className="ms-2">
                  Login
                </Nav.Link>
                <Nav.Link as={RouterLink} to="/register" className="ms-2">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
