import React from 'react';
import { Button } from 'react-bootstrap';

const card = (props) => {
  const card = props.card;
  console.log(card);
  // /reduce method has two value 1st call back function and 2nd initial value. call back function has two parameter 1st parameter is initial value and 2nd is which value i want to addition .
  //   const totalPrice = card.reduce((total, product) => total + product.price, 0);
  let totalPrice = 0;
  for (let i = 0; i < card.length; i++) {
    const product = card[i];
    totalPrice += product.price;
  }
  let shippingCost = 0;
  if (totalPrice > 15) {
    shippingCost = 4.99;
  } else if (totalPrice > 35) {
    shippingCost = 12.99;
  }
  const tax = totalPrice / 10;
  const formatNumber = (num) => {
    const number = num.toFixed(2);
    return Number(number);
  };
  const grandTotalPrice = formatNumber(totalPrice + shippingCost + tax);
  return (
    <>
      <h2>Order Summery</h2>
      <h5>Items ordered : {card.length}</h5>
      <p>Product Price : ${formatNumber(totalPrice)}</p>
      <p>Tax : ${formatNumber(tax)}</p>
      <p>Shipping Cost : ${formatNumber(shippingCost)}</p>
      <p>total Price : ${grandTotalPrice}</p>
      {/* <Button variant="primary">Click Me</Button> */}
    </>
  );
};

export default card;
