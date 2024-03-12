import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/MainNavigation.css'
function MainNavigation() {
  return (
    <Navbar data-bs-theme="dark"   fixed="top" id='navigation-1' expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand style={{color:'rgb(209, 48, 75)'}} href="#home">Rishika Siddha</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         
          <Nav>
            <Nav.Link className='main-nav-1' href="#aboutme">About Me</Nav.Link>
            <Nav.Link className='main-nav-1' href="#work">Work And Education</Nav.Link>
            <Nav.Link className='main-nav-1' href="#skills">Skills</Nav.Link>
            <Nav.Link className='main-nav-1' href="#projects">Projects</Nav.Link>
            <Nav.Link className='main-nav-1' href="#achievements">Achievements</Nav.Link>
            <Nav.Link className='main-nav-1' href="#contact">Say Hello👋</Nav.Link>

            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;