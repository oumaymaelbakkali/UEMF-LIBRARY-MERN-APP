
import Form from 'react-bootstrap/Form';
import Header from './Header'
import App from '../App.css'
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';
import Profil from './Profil';
import axios from 'axios';
import slide from '../slide.css'
import Row from 'react-bootstrap/Row'
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Card, Col, Container } from 'react-bootstrap';

function FormDisabledInputExample() {
  
  const [values, setValues] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }
  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:5000/SignIn', values)
    .then(res => {
      if (res.data.Admin) {
        
        navigate('/Admin');
     
      } else if (res.data.Profil) {
        
        navigate('/Profil/'+values.username);
       
      } else {

        alert('try again,your password or your username incorret!');
      }
    })
    .catch(err => {
      console.error(err);
    });
  }
  return (
    < >
    
    <Container fluid style={{backgroundImage : 'url(../img/image.png)'}} >
    
    <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            
            <Card className="shadow mt-5 ml-5" style={{ backgroundPosition:'center center ',backgroundSize:'cover',backgroundColor:'rgba(106, 132, 34, 0.22)',color:'rgb(255, 255, 255)'}} >
              <Card.Body style={{fontStyle: 'italic',fontsize: 'x-large'}}>
                <div className="mb-3 mt-md-4">
                  <h2 className=" mb-2 text-uppercase " style={{fontFamily:'fantasy'}} >UEMF LIBRARY</h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                  <Form   onSubmit={handleSubmit} className='mt-5' style={{fontStyle: 'italic',fontsize: 'x-large'}}>
      <Form.Group  >
        <Form.Label style={{fontStyle: 'italic',fontsize: 'x-large'}}>Username</Form.Label>
        <Form.Control  className='mb-4 w-100' type="text" name="username" onChange={handleChange} value={values.username}  placeholder="Username"/>
        
      </Form.Group>

      <Form.Group  controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control  className='mb-4 w-100'   type="password" name="password" onChange={handleChange} value={values.password} placeholder="Password"/>
      </Form.Group>
     <div className="d-grid"> 
      <Button variant="primary" type="submit" >
        login
      </Button>
      </div>
      
      
    </Form>
    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <Link to = {`/CreateAccount`} >Create One</Link>
                      </p>
                    </div>
                  </div>
                   <div/>
                   </div>
        
          </Card.Body>
        </Card>
        </Col>
      </Row>
    <div >
    <Header />
    
    
    
    
    </div>
    </Container>
    </>
  );
}

export default FormDisabledInputExample;
