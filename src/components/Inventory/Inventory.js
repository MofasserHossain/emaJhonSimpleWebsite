import React from 'react';
import { useForm } from 'react-hook-form';

const Inventory = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // const product = {};
    fetch('https://infinite-ocean-55806.herokuapp.com/addProduct', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log('result ', result);
      });
  };

  const inputStyle = {
    display: 'block',
    margin: '20px 0',
    padding: '10px 20px',
    width: '300px',
  };

  const error = {
    color: 'red',
    display: 'block',
  };
  return (
    <div>
      <h3>Hello</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Enter Your Product Name</label>
        <input
          style={inputStyle}
          name="name"
          label="Enter Your Product Name"
          placeholder="Please enter your product Name"
          ref={register({ required: true })}
        />
        {errors.name && <span style={error}>This field is required</span>}
        <label htmlFor="">Please enter your product Quantity</label>
        <input
          style={inputStyle}
          name="email"
          placeholder="Please enter your product Quantity"
          ref={register({ required: true })}
        />
        {errors.email && <span style={error}>This field is required</span>}
        <label htmlFor="">Please enter your product Price</label>
        <input
          style={inputStyle}
          name="address"
          placeholder="Please enter your product Price"
          ref={register({ required: true })}
        />
        {errors.address && <span style={error}>This field is required</span>}
        <label htmlFor="">Upload Your Product Image</label>
        <input
          style={inputStyle}
          name="phone"
          type="file"
          ref={register({ required: true })}
        />
        {errors.phone && <span style={error}>This field is required</span>}

        <input style={{ padding: '10px 20px' }} type="submit" />
      </form>
    </div>
  );
};

export default Inventory;
