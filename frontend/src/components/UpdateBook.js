import Img from './Img';
import Form from 'react-bootstrap/Form';
import Header from './Header'
import App from '../App.css'
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';
import Profil from './Profil';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import  Container  from 'react-bootstrap/Container';

import Card from 'react-bootstrap/Card';

import { useNavigate } from 'react-router-dom';

function FormDisabledInputExample() {
    
  const params=useParams()
    const title=params.Title
  
  const [values, setValues] = useState({
    Title: '',
    Auther: '',
    ISBN: '',
    Summary: '',
    Genre: '',
    photo: ''

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
    axios.post(`http://localhost:5000/Update/${encodeURIComponent(title)}`,values)
    .then(res => {
      if (res.data.Ok) {
        
        navigate('/Admin');
        alert('Succeful,the book is Updated');
      } else {

        alert('there is an error!');
      }
    })
    .catch(err => {
      console.error(err);
    });
  }
  return (
    < >
    <Container fluid style={{backgroundImage : 'url(../img/image.png)',backgroundSize:'cover',backgroundPosition:'center center'}} >
    
    <Row className="  d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12} className='mt-5'>
            
            <Card  className="shadow mt-5 ml-5" style={{ backgroundPosition:'center center ',backgroundSize:'cover',backgroundColor:'rgba(106, 132, 34, 0.22)',color:'rgb(255, 255, 255)'}} >
              <Card.Body style={{fontStyle: 'italic',fontsize: 'x-large'}}>
                <div className="mb-3 mt-md-4">
                  <h2 className=" mb-2 text-uppercase " style={{fontFamily:'fantasy'}} >UEMF LIBRARY</h2>
                  <p className=" mb-2">Update Book!</p>
                  <div className="mb-3">
                  <Form   onSubmit={handleSubmit}>
      <Form.Group  >
        <Form.Label style={{fontStyle: 'italic',fontsize: 'x-large'}}>Title: </Form.Label>
        <Form.Control className='mb-4 w-100' type="text" name="Title" onChange={handleChange} value={values.Title}/>
        
      </Form.Group>
      <Form.Group  controlId="formBasicPassword">
        <Form.Label style={{fontStyle: 'italic',fontsize: 'x-large'}}>Author</Form.Label>
        <Form.Control  className='mb-4 w-100' type="text" name="Author" onChange={handleChange} value={values.Author} />
      </Form.Group>

      <Form.Group  controlId="formBasicPassword">
        <Form.Label style={{fontStyle: 'italic',fontsize: 'x-large'}}>ISBN</Form.Label>
        <Form.Control className='mb-4 w-100' type="text" name="ISBN" onChange={handleChange} value={values.ISBN} />
      </Form.Group>
      <Form.Group  controlId="formBasicPassword">
        <Form.Label style={{fontStyle: 'italic',fontsize: 'x-large'}}>Summary</Form.Label>
        <Form.Control  className='mb-4 w-100' type="text" name="Summary" onChange={handleChange} value={values.Summary} />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label style={{fontStyle: 'italic',fontsize: 'x-large'}}>Genre</Form.Label>
        <Form.Select  className='mb-4 w-100' name="Genre" onChange={handleChange} value={values.Genre} required>
          <option>Computer Science</option>
          <option>Political</option>
          <option>Architecture</option>
          <option>Literature</option>
          <option>economic</option>
          <option>maths</option>
          <option>Medical Sciences</option>
        </Form.Select>
        
      </Form.Group>

    
     
     <Form.Group controlId="formFile" >
        <Form.Label style={{fontStyle: 'italic',fontsize: 'x-large'}}>image</Form.Label>
        <Form.Control className='mb-4 w-100' type="file" name="photo" onChange={handleChange} value={values.photo}   />
      </Form.Group>
     
      <Button  type="submit" className='butt'>
        UpdateBook
      </Button>
      
     
     
    </Form>
     
   
   
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
