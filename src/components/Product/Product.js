import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Product = (props) => {
  const {
    name,
    img,
    price,
    seller,
    star,
    key,
    stock,
    category,
    features,
  } = props.product;
  // console.log(name);
  return (
    <div className="product__items">
      <div className="product__img">
        <img src={img} alt={category} />
      </div>
      <div className="product__content">
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
            {props.showAddToCard && (
              <button
                className="button"
                onClick={() => props.handleAddButton(props.product)}
              >
                <FontAwesomeIcon icon={faShoppingCart} /> Add to Card
              </button>
            )}
          </div>
          <div>
            <h4>{star}</h4>
            <h3>Features</h3>
            <ul>
              {features &&
                features.map((feature) => (
                  <li>
                    <span>{feature.description}</span>
                    <strong>{feature.value}</strong>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
