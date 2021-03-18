import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';

export const initializeFirebaseFramework = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
};

export const handleGoogleSignIn = async () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((res) => {
      const { displayName, photoURL, email } = res.user;
      const signedInUser = {
        isSigned: true,
        displayName: displayName,
        email: email,
        photo: photoURL,
        success: true,
      };
      return signedInUser;
    })
    .catch((error) => {
      // const newUser = { ...user };
      // newUser.error = error.message;
      // setUser(newUser);
    });
};

export const handleSignOut = async () => {
  return firebase
    .auth()
    .signOut()
    .then((res) => {
      const user = {
        isSigned: false,
        displayName: '',
        email: '',
        photo: '',
      };
      return user;
    })
    .catch((error) => {});
};

export const handleFbSignIn = async () => {
  var fbProvider = new firebase.auth.FacebookAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then((result) => {
      var user = result.user;
      user.success = true;
      return user;
      // console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const setValidUser = async (name, email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const newUser = res.user;
      newUser.error = '';
      newUser.success = true;
      updateUser(name);
      return newUser;
    })
    .catch((error) => {
      const newUser = {};
      newUser.error = error.message;
      newUser.success = false;
      console.log(error);
      return newUser;
    });
};

export const setValidLogin = async (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const newUser = res.user;
      newUser.error = '';
      newUser.success = true;
      return newUser;
    })
    .catch((error) => {
      const newUser = {};
      newUser.error = error.message;
      console.log(error);
      newUser.success = false;
      return newUser;
    });
};

const updateUser = (name) => {
  const user = firebase.auth().currentUser;
  user
    .updateProfile({
      displayName: name,
    })
    .then(function () {
      console.log('user Information Updated');
    })
    .catch(function (error) {
      console.log(error);
    });
};
