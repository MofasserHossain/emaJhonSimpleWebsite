import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import fakeData from '../../fakeData';
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from '../../utilities/databaseManager';
import ReviewProduct from '../ReviewProduct/ReviewProduct';

const Review = () => {
  const [review, setReview] = useState([]);
  const removeProduct = (product) => {
    console.log('Product Removed', product);
    const removeItem = review.filter((item) => item.key !== product);
    setReview(removeItem);
    removeFromDatabaseCart(product);
  };
  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKey = Object.keys(saveCart);

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
      <div>
        <h4>Card Items : {review.length}</h4>
        {review.map((pd) => (
          <ReviewProduct
            removeProduct={removeProduct}
            product={pd}
          ></ReviewProduct>
        ))}
      </div>
    </Container>
  );
};

export default Review;
