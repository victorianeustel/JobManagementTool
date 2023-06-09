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
            <a href="/" ><h8>Home</h8></a>
            <a href="/addjob" ><h8>Add Job</h8></a>
            <a href="/" ><h8>View Applications</h8></a>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;