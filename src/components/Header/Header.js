import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt={logo} />
      </Link>
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/review">Review</Link>
        <Link to="/manage">Manage Inventory here</Link>
        <Link to="/profile">
          {loggedInUser.isSigned && (
            <img
              style={{ width: '50px', borderRadius: '50%' }}
              src={loggedInUser.photo}
              alt="profile"
            />
          )}
          Profile
        </Link>
        <Link to="/login">log In</Link>
        <button onClick={() => setLoggedInUser({})}>Sing Out</button>
      </nav>
    </div>
  );
};

export default Header;
