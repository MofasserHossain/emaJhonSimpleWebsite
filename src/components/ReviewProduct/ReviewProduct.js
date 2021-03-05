import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ReviewProduct = (props) => {
  console.log('Review Item', props.product);
  const { name, price, seller, key, stock } = props.product;
  return (
    <Row>
      <Col md={8}>
        <div className="mt-4 pb-3 border-bottom">
          <h5>
            <Link to={'/product/' + key}>{name}</Link>
          </h5>
          <p>
            by : <strong> {seller}</strong>
          </p>
          <div className="product__content--info">
            <div>
              <p className="price"> ${price}</p>
              <p className="stock">only {stock} left in stock - order soon</p>
              <p></p>
              <button
                className="button"
                onClick={() => props.removeProduct(key)}
              >
                Remove From Card
              </button>
            </div>
          </div>
        </div>
      </Col>
      <Col md={4}></Col>
    </Row>
  );
};

export default ReviewProduct;
