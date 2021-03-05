import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Card from '../Card/Card';
import { Container } from 'react-bootstrap';
import { addToDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {
  const productsList = fakeData.slice(0, 10);
  const [products, setProducts] = useState(productsList);
  let [card, setCard] = useState([]);
  const handleAddButton = (props) => {
    // console.log(props);
    // let check = card.indexOf(props);
    // if (check === -1) {
    let newCard = [...card, props];
    setCard(newCard);
    const sameCard = newCard.filter((card) => card.key === props.key);
    addToDatabaseCart(props.key, sameCard.length);
    // }
  };
  return (
    <Container>
      <div className="shopping">
        <div className="shopping__cards">
          <h3>Product Number {products.length}</h3>
          {products.map((product) => (
            <Product
              showAddToCard={true}
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
    </Container>
  );
};

export default Shop;
