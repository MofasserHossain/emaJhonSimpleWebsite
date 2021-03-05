import React /*, { useEffect, useState }*/ from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Review from './components/Review/Review';
import Notfound from './components/Notfound/Notfound';
import Details from './components/ProductDetails/Details';

function App() {
  return (
    <>
      <Header></Header>
      <Container>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/review">
              <Review />
            </Route>
            <Route path="/manage">
              <Inventory />
            </Route>
            <Route path="/product/:key">
              <Details></Details>
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
        </Router>
      </Container>
    </>
  );
}

export default App;

function Home() {
  return (
    <div>
      <h3>Welcome</h3>
    </div>
  );
}
function Inventory() {
  return (
    <div>
      <h3>Inventory Coming soon</h3>
    </div>
  );
}
