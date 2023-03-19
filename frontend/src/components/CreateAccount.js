import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Header from './Header'
import App from '../App.css'
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';
import Profil from './Profil';
import axios from 'axios';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

function FormDisabledInputExample() {
  
  const [values, setValues] = useState({
    username: '',
    email:'',
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
    axios.post('http://localhost:5000/CreateAccount', values)
    .then(res => {
      if (res.data.already) {
        
        alert('Username or mail is already use')
     
      } else if (res.data.Mail) {
        
        alert('check you box email')
       
      } else if (res.data.Expire) {
        
        alert('your code is expired ! Try Again');
      } else if (res.data.OK){
        navigate('/Profil/'+ values.username)
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
                <div className="mb-3 ">
                  <h2 className=" mb-2 text-uppercase " style={{fontFamily:'fantasy'}} >UEMF LIBRARY</h2>
                  <p className=" mb-2">Please enter your login and password!</p>
                  <div className="mb-3">
                  <Form   onSubmit={handleSubmit} className='mt-5' style={{fontStyle: 'italic',fontsize: 'x-large'}}>
    <Form.Group >
        <Form.Label>Username</Form.Label>
        <Form.Control className='mb-2 w-100'   type="text" name="username" onChange={handleChange} value={values.username}/>
        
      </Form.Group>
      <Form.Group  >
        <Form.Label>Email address</Form.Label>
        <Form.Control  className='mb-2 w-100'  type="email" name="email" onChange={handleChange} value={values.email}/>
        
      </Form.Group>

      <Form.Group  controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className='mb-2 w-100' type="password" name="password" onChange={handleChange} value={values.password} />
      </Form.Group>
     
      <div className="d-grid"> 
      <Button variant="primary" type="submit" >
        CreateAccount
      </Button>
      </div>
     
      
    </Form>
    <div className="mt-2">
                      <p className="mb-0  text-center">
                      you have already an  Account ?{" "}
                        <Link to = {`/SignIn`} >Sign In</Link>
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
