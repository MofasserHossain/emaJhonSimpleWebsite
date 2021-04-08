import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import {
  handleFbSignIn,
  handleGoogleSignIn,
  handleSignOut,
  initializeFirebaseFramework,
  setValidUser,
  setValidLogin,
} from './LoginManager';

function Login() {
  // . location
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: '/' } };
  // .state
  const [toggleUser, setToggleUser] = useState(false);
  const [user, setUser] = useState({
    isSigned: false,
    displayName: '',
    email: '',
    photo: '',
    password: '',
    error: '',
    success: false,
  });
  //. firebase initialize
  initializeFirebaseFramework();
  //. context api
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
      console.log(res);
    });
  };
  const googleSignOut = () => {
    handleSignOut().then((res) => {
      handleResponse(res, false);
    });
  };
  const FbSignIn = () => {
    handleFbSignIn().then((res) => {
      handleResponse(res, true);
    });
  };
  const handleSubmit = (e) => {
    if (toggleUser && user.email && user.password) {
      setValidUser(user.name, user.email, user.password).then((res) => {
        handleResponse(res, true);
      });
    }
    if (!toggleUser && user.email && user.password) {
      setValidLogin(user.email, user.password).then((res) => {
        handleResponse(res, true);
      });
    }
    e.preventDefault();
  };
  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };
  const handleChange = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      isFieldValid = e.target.value.length > 6 && /\d{1}/.test(e.target.value);
    }
    if (isFieldValid) {
      const newUser = { ...user };
      newUser[e.target.name] = e.target.value;
      setUser(newUser);
    }
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Hello World!</h3>
      {user.isSigned ? (
        <button onClick={googleSignOut}>Sing Out</button>
      ) : (
        <button onClick={googleSignIn}>Sing In With Google</button>
      )}
      <br />
      <button type="button" onClick={FbSignIn}>
        Sign With Facebook
      </button>
      {user.isSigned && (
        <div>
          <img style={{ width: '200px' }} src={user.photo} alt="" />
          <h3>Welcome : {user.displayName}</h3>
          <p>User Email : {user.email}</p>
        </div>
      )}

      <h1>Our Own Authentication System</h1>
      <input
        type="checkbox"
        onChange={() => setToggleUser(!toggleUser)}
        name="newUser"
        id=""
      />
      <label htmlFor="newUser">Create New User</label>
      <form onSubmit={handleSubmit}>
        {toggleUser && (
          <input
            type="text"
            onBlur={handleChange}
            required
            name="name"
            placeholder="Enter Your Name"
          />
        )}
        <br />
        <input
          type="text"
          onBlur={handleChange}
          required
          name="email"
          placeholder="Enter Your Email"
        />
        <br />
        <input
          type="password"
          onBlur={handleChange}
          required
          name="password"
          placeholder="Enter Your Password"
        />
        <br />
        <input type="submit" value={toggleUser ? 'Sign Up' : 'Log In'} />
      </form>
      <p style={{ color: 'red' }}>{user.message}</p>
      {user.success && (
        <p style={{ color: 'green' }}>
          User {toggleUser ? 'Created' : 'Logged In'} Successfully
        </p>
      )}
    </div>
  );
}

export default Login;
