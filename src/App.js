import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Review from './components/Review/Review';
import Notfound from './components/Notfound/Notfound';
import Details from './components/ProductDetails/Details';
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Profile from './components/Profile/Profile';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Container>
          <Switch>
            <Route exact path="/">
              {/* <Home /> */}
              <Shop />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/review">
              <Review />
            </Route>
            <PrivateRoute path="/manage">
              <Inventory />
            </PrivateRoute>
            <Route path="/product/:key">
              <Details></Details>
            </Route>
            <PrivateRoute path="/shipment">
              <Shipment></Shipment>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
        </Container>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

// function Home() {
//   const [greetings, setGreetings] = useState(false);
//   return (
//     <div>
//       <h3>Welcome</h3>
//       <button onClick={() => setGreetings(!greetings)}>
//         Click For Show data
//       </button>
//       <Greetings greetings={greetings}></Greetings>
//     </div>
//   );
// }

// function Greetings(props) {
//   const data = props.greetings;
//   return (
//     <>
//       <div>
//         <h3>Greetings</h3>
//         <p>{data ? 'Hello. Welcome Home' : 'This is not your home'}</p>
//       </div>
//       <div>
//         <h3>Friends</h3>
//         <p>{data && 'Friend'}</p>
//       </div>
//     </>
//   );
// }
function Inventory() {
  return (
    <div>
      <h3>Inventory Coming soon</h3>
    </div>
  );
}
