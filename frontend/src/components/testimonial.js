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
    <div class="text-center">
    <h3 style ={{fontFamily: 'Fantasy',
    color:'#719735' }} className="mt-5 mb-3 " >---Words From our Students---</h3>
                    <span class="underline center"></span>
                    <p style ={{fontFamily: 'Fantasy'}}>UEMF Library.</p>
                </div>
   <Carousel  indicators={false} style={
    {width: '24% !important',
      margin: 'auto !important',
      margintop: '4% !important',
      }
      
   } class='carousel mb-4 mt-5'
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={2000}
      >
       <Carousel.Item >
           
            
            
         
           <div className="myCarousel">
           <img className='mb-5 mr-5 mt-2 ' src="../img/photo2.jpeg" style={{height:'20vh',width:'20vh',
   borderRadius: '70%'}}/>
           
             <h3>Souhaila Ounar </h3>
             <h4>TWM</h4>
             <p>
             I've really enjoyed borrowing books from the library. It's a great way to try out new authors and genres without committing to buying a book.
             </p>
           </div>
          
           </Carousel.Item>
           <Carousel.Item >
           
            
            
         
           <div className="myCarousel">
           <img className='mb-5 mr-5 mt-2 ' src="../img/photo3.jpeg" style={{height:'20vh',width:'20vh',
   borderRadius: '70%'}}/>
           
             <h3>Olaya Latoubi </h3>
             <h4>IA</h4>
             <p>
             I really appreciate the wide range of books that the library has to offer. It's been really helpful for finding information for my research projects.
             </p>
           </div>
          
           </Carousel.Item>
           <Carousel.Item >
           
            
            
         
           <div className="myCarousel">
           <img className='mb-5 mr-5 mt-2 ' src="../img/photo1.jpg" style={{ height:'20vh',width:'20vh',
   borderRadius: '70%'}}/>
           
             <h3>Othmane Sehaki </h3>
             <h4>SP</h4>
             <p>
             I've found some great books in the library's special collections section. It's been really interesting to learn about rare and unique materials.
             </p>
           </div>
          
           </Carousel.Item>

         

        
      </Carousel>

         
       

    
    </>
  );
}

export default GridExample;
