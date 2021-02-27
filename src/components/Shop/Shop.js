import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
const Shop = () => {
  const productsList = fakeData.slice(0, 10);
  const [products, setProducts] = useState(productsList);
  const handleAddButton = (props) => {
    console.log('Clicked', props);
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
          <h3>Number Product {products.length}</h3>
        </div>
      </div>
    </div>
  );
};

export default Shop;
