import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import fakeData from '../../fakeData';
import { Col, Row } from 'react-bootstrap';
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from '../../utilities/databaseManager';
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import Cart from '../Cart/Cart';
import orderImg from '../../images/giphy.gif';
import { useHistory } from 'react-router';

const Review = () => {
  const [review, setReview] = useState([]);
  const [place, setPlace] = useState(false);
  const history = useHistory();
  const removeProduct = (product) => {
    // console.log('Product Removed', product);
    const removeItem = review.filter((item) => item.key !== product);
    setReview(removeItem);
    removeFromDatabaseCart(product);
  };

  const handleProceedCheckout = () => {
    history.push('/shipment');
  };

  useEffect(() => {
    const saveCart = getDatabaseCart();
    console.log('card', saveCart);
    const productKey = Object.keys(saveCart);
    console.log('prk', productKey);
    const productCard = productKey.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      // console.log(product);
      product.quantity = saveCart[key];
      return product;
    });
    setReview(productCard);
    // console.log(productCard);
  }, []);

  // console.log(review);
  return (
    <Container>
      <Row>
        <Col md={8}>
          <div>
            <h4>Card Items : {review.length}</h4>
            {review.map((pd) => (
              <ReviewProduct
                removeProduct={removeProduct}
                product={pd}
              ></ReviewProduct>
            ))}
          </div>
          {place && <img src={orderImg} alt="" />}
        </Col>
        <Col md={4}>
          <Cart cart={review}>
            <button onClick={handleProceedCheckout} className="button">
              Proceed Checkout
            </button>
          </Cart>
        </Col>
      </Row>
    </Container>
  );
};

export default Review;
