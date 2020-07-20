import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import Product1 from './Components/Product1';
import ProductItem from './Components/ProductItem';
import NavBar from './Components/Navbar';
import Button from './Components/buttons';



function RouteConfig() {

  return (
    <div>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/product1" component={Product1} />

          <Route path="/product/:id" component={ProductItem} />
          <Route path="/product1/:id" component={Product1} />




          <Route path="*" component={() => <h2>404 Not Found</h2>} />
        </Switch>
        <br />
        <hr />
        <Button />
      </Router>
    </div>
  );
}

export default RouteConfig;
