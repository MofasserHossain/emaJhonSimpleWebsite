import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Details = () => {
  const { key } = useParams();
  const product = fakeData.find((pd) => pd.key === key);
  console.log(product);
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
