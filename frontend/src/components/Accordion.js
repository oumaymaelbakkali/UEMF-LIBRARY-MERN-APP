import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function AutoLayoutVariableExample() {
  return (
    <Container >
    <Row className="align-items-center">
  
</Row>

<Row className="content-row mb-3 wt-5 d-flex align-items-stretch">
 <Col xs lg='6' className="text-center mt-5">
 <Col className="mt-5 text-center " style={{marginTop:'14px'}}>
    <h3 style ={{fontFamily: 'Fantasy',
    color:'#719735' }} className="mt-5  " >---WELCOME TO UEMF LIBRARY---</h3>
  </Col>
 
  <p>Whether you are starting your University journey with us this year or continuing with your studies, we are looking forward to working with you and supporting you during your time with Durham University. Within this guide, you'll find lots of information about accessing our libraries and study spaces and the support services we have available to you. If you're new to the Library, you can visit our Getting started with the Library guide for lots of helpful information. You can also keep an eye on University Library and Collections website for any news and updates.</p>
  <Button className='mb-3' variant="primary"  href="https://ueuromed.org/services/bibliotheque">View More information</Button>
</Col>

  <Col xs lg='6' className='mt-5' style={{backgroundImage: 'url("/img/lib2.jfif")' ,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center '}} >
     <img  src=''></img>
     
  </Col>
</Row>

  </Container>
  
  );
}


export default AutoLayoutVariableExample;