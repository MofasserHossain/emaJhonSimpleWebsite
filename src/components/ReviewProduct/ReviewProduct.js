import React from 'react';
import { Link } from 'react-router-dom';

const ReviewProduct = (props) => {
  //   console.log('Review Item', props.product);
  const { name, price, seller, key, quantity } = props.product;
  return (
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
          <p>Order Quantity {quantity}</p>
          <button className="button" onClick={() => props.removeProduct(key)}>
            Remove From Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewProduct;
