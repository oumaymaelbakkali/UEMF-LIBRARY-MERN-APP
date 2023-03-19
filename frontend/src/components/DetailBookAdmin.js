import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';

import { useState, useEffect } from 'react'
import axios from "axios"

import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';




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
  const handleDelete = async event => {
    
    try {
     
      const res = await axios.get(`http://localhost:5000/Delete/${encodeURIComponent(title)}`);
      // navigate to some other page or show a success message
     
      if (res.data.Admin) {
        console.log("delete")
        alert("Succceful , Book deleted")     
        navigate('/Admin')
      
      }
      navigate('/Admin');
   } catch (err) {
    navigate('/Admin');
      
   }
  }
  const  handleButtonClick = async event => {
    
    try {   
     
      const res = await axios.get(`http://localhost:5000/delete-reservation/${encodeURIComponent(product.reservepar)}/${encodeURIComponent(title)}`);
      // navigate to some other page or show a success message
     
      if (res.data.ok) {
        console.log("delete")
        alert("Succceful , Book deleted")     
        
      
      }
     
   } catch (err) {
    navigate('/Admin');
      
   }
  }
 
 
  console.log(product)
  return (
    <>
    
    <div  style={{height: '100%',backgroundSize:'cover',backgroundImage: 'url("/img/dark.jfif")',backgroundRepeat:'no-repeat'}}>
     
      
     
     <Row >
<Col className='mt-5' xs={12} lg='4'  md='4' sm='1' >
<Card>
  <Card.Img src={'/img/'+product.photo}></Card.Img>
  <Card.Body>

        <Row className='mb-3'>
        <Button ><Link to={`/Update/${product.Title}`}> UpdateBook </Link> </Button>
        </Row>
        <Row className='mb-3'>
        <Button  onClick={handleDelete}>DeleteBook</Button>
        </Row>
        <Row className='mb-3'>
        

    {product.statut == 'reserved' ? <Button onClick={handleButtonClick}>Delete Reservation</Button> : null}
        </Row>
     
  </Card.Body>
</Card>

</Col>
<Col className='mb-3 mt-5' xs={12} lg='4'  md='4' sm='1'>
<ListGroup variant='flush'>
<ListGroup.Item>
<h3>{product.Title}</h3>
</ListGroup.Item>
<ListGroup.Item>
Summary: {product.Summary}
</ListGroup.Item>
</ListGroup>
</Col>
<Col className='mb-3 mt-5' xs={12} lg='4'  md='4' sm='1'>
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
<Col>Statut:</Col>
<Col>
{product.statut}
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
<ListGroup.Item>
<Row>
<Col>Reserved by:</Col>
<Col>
{product.reservepar}
</Col>
</Row>
</ListGroup.Item>
</ListGroup>
</Col>
<Link className='btn btn-light my-3' to='/Admin'>
    Go Back
    </Link> 
</Row>
</div>
    </>
  );
};
export default ProductDetails;
