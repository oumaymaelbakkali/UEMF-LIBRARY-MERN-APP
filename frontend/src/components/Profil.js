
import React from 'react';
import Caarousel from './Carousel'
import { Navbar, Nav, NavDropdown, Offcanvas, Form, Button,Container, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import CardBooks from './CardBooks'
import Header from './HeaderProfil.js'
import { useParams } from 'react-router-dom';
const Profil = () => {
    const params=useParams()
    const name=params.name
  return (
   <>
    
   
     
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
      <Nav.Link href={ `/MyList/${name}`}   style={{ fontSize: '18px',fontFamily:'fantasy',color: 'white'}} onMouseEnter={(e) => e.target.style.color = 'rgb(142, 158, 61)'}
onMouseLeave={(e) => e.target.style.color = 'white'}>MyList</Nav.Link>
         <Nav.Link href="/SignIn"   style={{ fontSize: '18px',fontFamily:'fantasy',color: 'white'}} onMouseEnter={(e) => e.target.style.color = 'rgb(142, 158, 61)'}
onMouseLeave={(e) => e.target.style.color = 'white'}> <FontAwesomeIcon icon={faSignOut} />SignOut</Nav.Link>
      
         
        
       </Nav>
     
     </Offcanvas.Body>
   </Navbar.Offcanvas>
 </Container>
</Navbar>
    <CardBooks/>
  
  
   
     
   </>
  )
}

export default Profil