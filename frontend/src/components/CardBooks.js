import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'



import Header from './Header.js'

function GridExample() {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    const fetchBooks = async () => {
      const { data } = await axios.get('http://localhost:5000/Admin');
      setBooks(data);
    }
    fetchBooks();
  }, []);
  console.log(books)

  return (
    <>
      <div   style={{backgroundImage: 'url("/img/dark.jfif")' ,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center '}}   >
        
        <Container  >
       
         
     
      <Row  xs={12} lg='4' sm='2' >
      
        {books.map((book) => (
          
          <Col>
            <div >
            <Card  className='mt-5'>
            
              <Card.Img variant="top" src={'/img/'+book.photo} className='img'/>

              <Card.Body style={{ height:'80px' }} className='overflow-auto'>
              {book.statut == 'reserved' ? <h6 style={{color:'RED'}} > This Book is Reserved</h6> : null}
                <Card.Title style={{ color: 'black' ,fontFamily:'fantasy' }}>{book.Title}</Card.Title>
                <Card.Text style={{ color: 'black' }}>
                  {book.Author}
                </Card.Text>
                <Card.Text style={{ color: 'black' }}>
                  {book.Genre}
                </Card.Text>
                
                <Link to={`/DetailBookUser/${book.Title}`}><Button>View More </Button></Link>
              </Card.Body>
            </Card>
            </div>
          </Col>
        ))}
      </Row>
      </Container>
      </div>
    </>
  );
}

export default GridExample;
