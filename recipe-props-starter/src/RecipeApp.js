import React, { Component } from 'react';
import Recipe from './Recipe';
import logo from './logo.svg';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Recipe />
      </div>
    );
  }
}

export default RecipeApp;