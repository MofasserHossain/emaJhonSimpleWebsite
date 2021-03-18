import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const Shipment = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <>
      <p>
        Name {loggedInUser.displayName} email {loggedInUser.email}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ display: 'block', margin: '20px 0' }}
          name="name"
          defaultValue={loggedInUser.displayName}
          ref={register({ required: true })}
        />
        {errors.name && <span>This field is required</span>}
        <input
          style={{ display: 'block', margin: '20px 0' }}
          name="email"
          defaultValue={loggedInUser.email}
          ref={register({ required: true })}
        />
        {errors.email && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </>
  );
};

export default Shipment;
