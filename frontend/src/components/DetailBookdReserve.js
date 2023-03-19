import React from 'react'
import { ListGroup } from 'react-bootstrap';

import { useState, useEffect } from 'react'
import axios from "axios"

import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';



const ProductDetails = () => {
  const navigate = useNavigate()
  const params=useParams()
    const title=params.Title
   
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`http://localhost:5000/DetailBookAdmin/${encodeURIComponent(title)}`);
      setProduct(data);
    };
    fetchProduct();
  }, []);
  
 

 
   
     
    
   

 
    
        
  return (
    <>

    <div className='detail'>
    <Row className='pd'>

<Col>
<Image src={'/img/'+product.photo}  fluid />
</Col>
<Col>
<ListGroup variant='flush'>
<ListGroup.Item>
<h3>{product.Title}</h3>
</ListGroup.Item>
<ListGroup.Item>
Summary: {product.Summary}
</ListGroup.Item>
</ListGroup>
</Col>
<Col>
<ListGroup>
<ListGroup.Item>
<Row>
<Col>Author:</Col>
<Col>
<strong>{product.Author}</strong>
</Col>
</Row>
</ListGroup.Item>
<ListGroup.Item>
<Row>
<Col>Genre:</Col>
<Col>
{product.Genre}
</Col>
</Row>
</ListGroup.Item>
<ListGroup.Item>
<Row>
<Col>ISBN:</Col>
<Col>
{product.ISBN}
</Col>
</Row>
</ListGroup.Item>
<ListGroup.Item>
<Row>
<Col>Return Le:</Col>
<Col>
{product.returnLe}
</Col>
</Row>
</ListGroup.Item>
</ListGroup>
</Col>

</Row>
</div>
    </>
  );
    }

export default ProductDetails;
