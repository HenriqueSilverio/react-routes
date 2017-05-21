import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render(props) {
    return (
      <header>
        <h1>React App</h1>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {this.props.title &&
          <h2>{this.props.title}</h2>
        }

        {this.props.description &&
          <p>{this.props.description}</p>
        }
      </header>
    );
  }
}

export default Header;
