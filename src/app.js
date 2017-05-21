import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './scenes/Home';
import About from './scenes/About';
import Products from './scenes/Products';
import Contact from './scenes/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    )
  }
}

export default App;
