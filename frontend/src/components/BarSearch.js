import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Button, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
function IndividualIntervalsExample() {
    const [values, setValues] = useState({
        GENRE: ''
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
        axios.post('http://localhost:5000/Search', values)
        .then(res => {
          if (res.data.ok) {
            
            navigate('/Search/'+values.GENRE);
         
          
           
          } else {
    
            alert('try again,your password or your username incorret!');
          }
        })
        .catch(err => {
          console.error(err);
        });
      }
 
  return (
    
    <>
    
    <div style={{ position: "absolute", top: '75vh', left: "50%", transform: "translate(-50%, 0)", backgroundColor: "#fff"}} className='container'>
      <Row className='text-center mb-3 mt-3 '>
        <h3>What are you looking for at the library? </h3>
      </Row>
      <Form onSubmit={handleSubmit} className=' mb-5 ms-5 '  >
      <Row className=' mb-4 ms-4'  >
       
     
        <Col xs lg='6' >
        <Form.Group>
        <Form.Select onChange={handleChange} name="GENRE" value={values.GENRE} className='mb-4 w-100'   required>
          <option>Find Your Book</option>
          <option>Computer Science</option>
          <option>Political</option>
          <option>Architecture</option>
          <option>Literature</option>
          <option>economic</option>
          <option>maths</option>
          <option>Medical Sciences</option>
        </Form.Select>
        </Form.Group>
        </Col>
        <Col xs lg='3'>
          <Button type="submit"  className='btn  btn-primary ' style={{width:'90%'}}
          >Search</Button>
        </Col>
       
      </Row>
      </Form>
      </div>

    
  </>
  );
}

export default IndividualIntervalsExample;