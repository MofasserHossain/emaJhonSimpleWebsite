import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {
  addToDatabaseCart,
  getDatabaseCart,
} from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';

const Shop = () => {
  // const productsList = fakeData.slice(0, 10);
  const [products, setProducts] = useState([]);
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch('https://infinite-ocean-55806.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  useEffect(() => {
    const saveCard = getDatabaseCart();
    console.log(saveCard);
    const productKey = Object.keys(saveCard);
    console.log(products, productKey);
    // if (products.length > 0) {
    //   const previousProduct = productKey.map((existingKey) => {
    //     const findProduct = products.find((data) => data.key === existingKey);
    //     findProduct.quantity = saveCard[existingKey];
    //     // console.log(existingKey, saveCard[existingKey]);
    //     return findProduct;
    //   });
    //   setCard(previousProduct);
    // }
    fetch('https://infinite-ocean-55806.herokuapp.com/productByKeys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productKey),
    })
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  const handleAddButton = (product) => {
    const toBeAdded = product.key;
    const sameProduct = card.find((card) => card.key === toBeAdded);
    let count = 1;
    let newCard;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = card.filter((card) => card.key !== toBeAdded);
      newCard = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCard = [...card, product];
    }
    // let newCard = [...card, props];
    // newCard.quantity = sameCard.length;
    setCard(newCard);

    addToDatabaseCart(product.key, count);
  };
  return (
    <Container>
      <div className="shopping">
        <div className="shopping__cards">
          <h3>Product Number {products.length}</h3>
          {products.length > 0 ? (
            products.map((product) => (
              <Product
                showAddToCard={true}
                key={product.key}
                product={product}
                handleAddButton={handleAddButton}
              ></Product>
            ))
          ) : (
            <h5>Loading......</h5>
          )}
        </div>
        <div className="shopping__price">
          <div className="shopping__price--card">
            <Cart cart={card}>
              <Link to="/review">
                <button className="button">Review Order</button>
              </Link>
            </Cart>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Shop;
