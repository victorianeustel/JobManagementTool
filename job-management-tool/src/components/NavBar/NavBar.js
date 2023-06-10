import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBarStyle.css';

function NavBar() {
  return (
    <Navbar className='color-nav'>
      <Container>
        <h3 href="/">Job Management Tool</h3>
        <div>
          <Nav className="nav-links">
            <a href="/" ><p>Home</p></a>
            <a href="/addjob" ><p>Add Job</p></a>
            <a href="/" ><p>View Applications</p></a>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;