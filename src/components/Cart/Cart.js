import React from 'react';
import './Cart.css';
const Cart = (props) => {
  const cart = props.cart;
  // console.log(cart);
  // /reduce method has two value 1st call back function and 2nd initial value. call back function has two parameter 1st parameter is initial value and 2nd is which value i want to addition .
  //   const totalPrice = cart.reduce(
  //     (total, product) => total + product.price * product.quantity,
  //     0
  //   );
  //   debugger;
  //   console.log(totalPrice);
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    totalPrice = totalPrice + product.price * (product.quantity || 1);
    // debugger;
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
  const grandTotalPrice = totalPrice + shippingCost + tax;
  return (
    <>
      <h2>Order Summery</h2>
      <h5>Items ordered : {cart.length}</h5>
      <p>Product Price : $ {formatNumber(totalPrice)}</p>
      <p>Tax : $ {formatNumber(tax)}</p>
      <p>Shipping Cost : ${shippingCost}</p>
      <p>total Price : $ {formatNumber(grandTotalPrice)}</p>
      {props.children}
    </>
  );
};

export default Cart;
