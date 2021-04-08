import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const Details = () => {
  const { key } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://infinite-ocean-55806.herokuapp.com/product/${key}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [key]);
  // console.log(product);
  return (
    <Container>
      <h2> Product Detail </h2>
      <Row>
        <Col md={8}>
          <Product showAddToCard={false} product={product}></Product>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
};

export default Details;
