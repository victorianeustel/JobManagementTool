import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/NavBar.css';
import React  from 'react';

function NavBar() {
  return (
    <Navbar className='color-nav'>
      <Container>
        <a href="/" id="title"><h3>Job Management Tool</h3></a>
        <div>
          <Nav className="nav-links">
            <a href="/" >Home</a>
            <a href="/addjob" >Add Job</a>
            <a href="/jobs" >View Applications</a>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;