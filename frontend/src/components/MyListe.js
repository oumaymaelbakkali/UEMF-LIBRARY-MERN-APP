import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Img from './Img';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



function GridExample() {
    const params =useParams()
    const title=params.username
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const { data } = await axios.get(`http://localhost:5000/MyList/${encodeURIComponent(title)}`);
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
          
          <Col className='mb-5'>
            <div >
            <Card  className='mt-5' style={{ height: '500px' }}>
            
              <Card.Img variant="top" src={'/img/'+book.photo} className='img'style={{ height: '300px' }}/>

              <Card.Body style={{ height:'80px' }} className='overflow-auto'>

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
      <Card className="text-center back mt-5 " >
      <Card.Header className='back2'><> <FontAwesomeIcon icon={faFacebook} /> <FontAwesomeIcon icon={faTwitter} /> <FontAwesomeIcon icon={faInstagram} /> <FontAwesomeIcon icon={faEnvelope} /></></Card.Header>
      <Card.Body >
        <Card.Title style={{fontFamily:'fantasy',color:'white'}}>TIMING</Card.Title>
        <Card.Text style={{color:'white'}}>
        Mon - Thu: 9 am - 6 pm
Fri:    9 am - 3 pm
        </Card.Text>
        
        <Card.Text style={{color:'white'}}>
        the library is located in the basement level 3 (b3) of the ground floor (rez de chasse) building.
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted back2" style={{fontFamily:'fantasy',color:'white'}}><FontAwesomeIcon icon={faCopyright} />2023 Copyright</Card.Footer>
    </Card>
      </div>
    </>
  );
}

export default GridExample;
