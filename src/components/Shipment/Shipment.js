import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';

const Shipment = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    const saveCard = getDatabaseCart();
    const productData = {
      ...loggedInUser,
      shipment: data,
      products: saveCard,
      orderTime: new Date(),
    };
    console.log(productData);
    fetch('https://infinite-ocean-55806.herokuapp.com/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data) {
          processOrder();
          alert('Your Order Placed Successfully');
        }
      });
  };

  const inputStyle = {
    display: 'block',
    margin: '20px 0',
    padding: '10px 20px',
    width: '300px',
  };
  return (
    <>
      <p>
        Name {loggedInUser.displayName} email {loggedInUser.email}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={inputStyle}
          name="name"
          defaultValue={loggedInUser.displayName}
          ref={register({ required: true })}
        />
        {errors.name && <span>This field is required</span>}
        <input
          style={inputStyle}
          name="email"
          defaultValue={loggedInUser.email}
          ref={register({ required: true })}
        />
        {errors.email && <span>This field is required</span>}
        <input
          style={inputStyle}
          name="address"
          placeholder="Please enter your address"
          ref={register({ required: true })}
        />
        {errors.address && <span>This field is required</span>}
        <input
          style={inputStyle}
          name="phone"
          placeholder="Please enter your phone number"
          ref={register({ required: true })}
        />
        {errors.phone && <span>This field is required</span>}

        <input style={{ padding: '10px 20px' }} type="submit" />
      </form>
    </>
  );
};

export default Shipment;
