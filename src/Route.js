import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import Product1 from './Components/Product1';
import ProductItem from './Components/ProductItem';
import NavBar from './Components/Navbar';
import Button from './Components/buttons';
import Men from './Components/Men';
import Women from './Components/Women';
import Children from './Components/Children';


function RouteConfig() {

  return (
	<div>
        <Router>
        <NavBar />
        
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route exact path="/product" component={Product}/>
          <Route path="/product/:id" component={ProductItem} />
          <Route path="/product1/Men" component={Men} />
          <Route path="/product1/Women" component={Women} />
          <Route path="/product1/Children" component={Children} />

                <Route path="*" component={()=><h2>404 Not Found</h2>}/>
        </Switch>
        <Button />
       </Router>
	</div>
  );
}

export default RouteConfig;
