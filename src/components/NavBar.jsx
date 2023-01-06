import {useEffect, useState} from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import linkedIn from '../assets/img/nav-icon1.svg';
import email from '../assets/img/nav-icon4.svg';
import insta from '../assets/img/nav-icon3.svg';
import './NavBar.css'
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  },[])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                      onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
                      onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                      onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                      onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#media" className={activeLink === 'media' ? 'active navbar-link' : 'navbar-link'}
                      onClick={() => onUpdateActiveLink('media')}>Media</Nav.Link>

          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="mailto: cw75@wharton.upenn.edu"><img src={email} alt="email" /></a>
              <a href="https://www.linkedin.com/in/xclaire-wang/"><img src={linkedIn} alt="linkedIn" /></a>
              <a href="https://www.instagram.com/xclaire_w/"><img src={insta} alt="Instagram" /></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
