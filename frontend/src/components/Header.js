import React from 'react';

import { Navbar, Nav, NavDropdown, Offcanvas, Form, Button,Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
function OffcanvasExample() {
  return (
    <Navbar expand="lg" fixed='top' style={{ border: '1px solid transparent' }}>
 
      <Container fluid style={{ backgroundColor: 'rgba(106, 132, 34, 0.2)'}} >
        <Navbar.Brand href="#" ><img   src='/img/logo-footer.png'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header  closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel" style={{ fontSize: '20px',fontFamily:'Georgia, serif',color: 'rgb(142, 158, 61)'}}>Navigation</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ backgroundColor: 'rgba(106, 132, 34, 0.2)'}}>
            <Nav className="justify-content-end flex-grow-1 pe-3" >
              <Nav.Link href="/"  style={{ fontSize: '18px',fontFamily:'fantasy',color: 'white'}} onMouseEnter={(e) => e.target.style.color = 'rgb(142, 158, 61)'}
     onMouseLeave={(e) => e.target.style.color = 'white'}>Home</Nav.Link>
              <Nav.Link href="/"  style={{ fontSize: '18px',fontFamily:'fantasy',color: 'white'}} onMouseEnter={(e) => e.target.style.color = 'rgb(142, 158, 61)'}
     onMouseLeave={(e) => e.target.style.color = 'white'}>New Book Releases</Nav.Link>
              <Nav.Link href="https://ueuromed.org/contact"  style={{ fontSize: '18px',fontFamily:'fantasy',color: 'white'}} onMouseEnter={(e) => e.target.style.color = 'rgb(142, 158, 61)'}
     onMouseLeave={(e) => e.target.style.color = 'white'}>UEMF World</Nav.Link>
              <Nav.Link ><Link to={`/SignIn`}    style={{ fontSize: '18px',fontFamily:'fantasy',color: 'white'}} onMouseEnter={(e) => e.target.style.color = 'rgb(142, 158, 61)'}
     onMouseLeave={(e) => e.target.style.color = 'white'}> <FontAwesomeIcon icon={faUser} /> Login/Register  </Link></Nav.Link>
           
              
             
            </Nav>
          
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;
