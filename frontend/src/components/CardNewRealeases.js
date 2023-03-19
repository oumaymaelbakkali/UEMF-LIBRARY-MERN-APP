import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Carousel } from 'react-bootstrap';
import '../slide.css'



function GridExample() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const { data } = await axios.get('http://localhost:5000/');
      setBooks(data);
    }
    fetchBooks();
  }, []);

  return (
    <>
  

         
       

     <Container fluid className="w-100 d-flex flex-column justify-content-center align-items-center mb-3" style={{backgroundSize:'cover',backgroundImage: 'url("/img/dark.jfif")',backgroundRepeat:'no-repeat'}}>
      <Row className='text-center mt-3 mb-3 '>
      <h3 style ={{fontFamily: 'Fantasy',
    color:'#719735' }}>------CHECK OUT THE NEW BOOKS-------</h3>
      </Row>
      
      <Row  className='mb-3'>
        {books.map((book) => (
          
          <Col xs={12} lg='3' className='mb-3 text-center'>
            <div className='card mx-auto' style={{ width: '15rem',height: '36rem' }}>
            <Card >
              
              <Card.Img variant="top" src={'./img/'+ book.photo} />
              <Card.Body>
                <Card.Title style={{ color: 'black' }}>{book.Title}</Card.Title>
                <Card.Text style={{ color: 'black' }}>
                  {book.Author}
                </Card.Text>
                <Card.Text style={{ color: 'black' }}>
                  {book.Genre}
                </Card.Text>
              </Card.Body>
              <Button  variant="primary">Show details</Button>
            </Card>
            </div>
          </Col>
        ))}
      </Row>
      </Container>
    </>
  );
}

export default GridExample;
