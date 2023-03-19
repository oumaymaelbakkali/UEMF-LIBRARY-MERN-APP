import React from 'react'
import { Container, ListGroup } from 'react-bootstrap';

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

import Card from 'react-bootstrap/Card'


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
  const [showForm, setShowForm] = useState(false)
  const handleButtonClick = () => setShowForm(!showForm)
  const [values, setValues] = useState({
    username: '',
    password: ''

  });
 

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }
  const handleSubmit = event => {
    event.preventDefault();
    axios.post(`http://localhost:5000/Reserve/${encodeURIComponent(title)}`,values)
    .then(res => {
      if (res.data.ok) {
        
        navigate(`/MyList/${values.username}`);
        console.log(`/MyList/${values.username}`)
        alert('Succeful,the book is reserved');
      } else {

        alert('there is an error!');
      }
    })
    .catch(err => {
      console.error(err);
    });
  }
   
     
    
   

 
    
        
  return (
    <>   
     <div style={{height: '100%',backgroundSize:'cover',backgroundImage: 'url("/img/dark.jfif")',backgroundRepeat:'no-repeat'}}>
   
   
    
      <Container>
     <Row xs={12} lg='' sm='' className='mb-3'>
<Col  >
<Card className='mt-5'>
  <Card.Img src={'/img/'+product.photo}></Card.Img>
  <Card.Body>
  {product.statut !== 'reserved' ? <Button  onClick={handleButtonClick}>Reserve Book</Button> : null}
  {showForm && 
         <Form  onSubmit={handleSubmit} >
         <Form.Group  >
           <Form.Label style={{fontStyle: 'italic',fontsize: 'x-large'}} >Username</Form.Label>
           <Form.Control type="text" name="username" onChange={handleChange} value={values.username}/>
           
         </Form.Group>
         <Form.Group controlId="formBasicPassword">
           <Form.Label style={{fontStyle: 'italic',fontsize: 'x-large'}} >Password</Form.Label>
           <Form.Control type="password" name="password" onChange={handleChange} value={values.password} />
         </Form.Group>
          
        <Button  type="submit" className='butt'>
          Reserve
        </Button>
      
         
        
        
       </Form>
      }
  </Card.Body>
  
</Card>


</Col>
<Col   className='mt-5 mb-3 '>
<ListGroup variant='flush'>
<ListGroup.Item>
<h3>{product.Title}</h3>
</ListGroup.Item>
<ListGroup.Item>
Summary: {product.Summary}
</ListGroup.Item>
</ListGroup>
</Col>
<Col className=' mt-5'>
<ListGroup>
<ListGroup.Item>
<Row >
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
</ListGroup>
</Col>
<Row className='mr-3'>
  <Col>

</Col>
</Row>

<Link className='btn btn-light my-5'  to={`/Profil/${values.username}`}>
    Go Back
    </Link> 
   </Row>
</Container>
</div>
    </>
  );
    }

export default ProductDetails;
