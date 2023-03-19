import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Button, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
function IndividualIntervalsExample() {
  
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
    <Carousel indicators={false}  style={{ opacity: 3 }} expand= 'lg' >
      <Carousel.Item interval={1000} >
        <div className="w-100 d-flex flex-column justify-content-center align-items-center" style={{backgroundPosition:'center center ',backgroundSize:'cover',height:'90vh',backgroundImage: 'url("/img/biblio.png")',backgroundRepeat:'no-repeat'}}>
        
        <h1 style={{ color: '#719735',fontFamily: 'Fantasy' }}>UEMF LIBRARY</h1>
        <h3 style={{ color: 'white',fontFamily: 'Fantasy' }}> Feast your eyes on a good book!</h3>
        
         
       
         
        </div>
        
        
      </Carousel.Item>
      <Carousel.Item interval={1000} >
        <div className="w-100 d-flex flex-column justify-content-center align-items-center" style={{backgroundPosition:'center center ',backgroundSize:'cover',height:'90vh',backgroundImage: 'url("/img/biblio.png")',backgroundRepeat:'no-repeat'}}>
        
        <h1 style={{ color: '#719735',fontFamily: 'Fantasy' }}>UEMF LIBRARY</h1>
        <h3 style={{ color: 'white',fontFamily: 'Fantasy' }}> Feast your eyes on a good book!</h3>
        
         
       
         
        </div>
        
        
      </Carousel.Item>
      <Carousel.Item interval={9000} >
        <div className="w-100 d-flex flex-column justify-content-center align-items-center" style={{backgroundPosition:'center center ',backgroundSize:'cover',height:'90vh',backgroundImage: 'url("/img/biblio.png")',backgroundRepeat:'no-repeat'}}>
        
        <h1 style={{ color: '#719735',fontFamily: 'Fantasy' }}>UEMF LIBRARY</h1>
        <h3 style={{ color: 'white',fontFamily: 'Fantasy' }}> Feast your eyes on a good book!</h3>
        
         
       
         
        </div>
        
        
      </Carousel.Item>
      
    </Carousel>
    

    
  </>
  );
}

export default IndividualIntervalsExample;