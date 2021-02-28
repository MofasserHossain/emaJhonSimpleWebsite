import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Card from '../Card/Card';
const Shop = () => {
  const productsList = fakeData.slice(0, 10);
  const [products, setProducts] = useState(productsList);
  const [card, setCard] = useState([]);
  // console.log(card);
  const handleAddButton = (props) => {
    const newCard = [...card, props];
    setCard(newCard);
  };
  // console.log(fakeData);
  return (
    <div className="container">
      <div className="shopping">
        <div className="shopping__cards">
          <h3>Product Number {products.length}</h3>
          {products.map((product) => (
            <Product
              key={product.key}
              product={product}
              handleAddButton={handleAddButton}
            ></Product>
          ))}
        </div>
        <div className="shopping__price">
          <div className="shopping__price--card">
            <Card card={card}></Card>
            {/* <h5>Number Product {card.length}</h5> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
