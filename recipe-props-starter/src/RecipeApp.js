import React, { Component } from 'react';
// import Recipe from './Recipe';
import NavBar from './NavBar';
import RecipeList from './RecipeList';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
