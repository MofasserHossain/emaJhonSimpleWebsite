import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Profile = () => {
  const [loggedInUser] = useContext(UserContext);
  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h3 style={{ marginBottom: '20px' }}>Signed In User Info</h3>
      {loggedInUser.isSigned && (
        <div>
          {loggedInUser.photo && (
            <img
              style={{ width: '200px', borderRadius: '50%' }}
              src={loggedInUser.photo}
              alt="profile"
            />
          )}
          <h3 style={{ marginTop: '30px' }}>
            User Name : {loggedInUser.displayName}
          </h3>
          <h4 style={{ marginBottom: '20px' }}>
            User Email : {loggedInUser.email}
          </h4>
        </div>
      )}
    </div>
  );
};

export default Profile;
