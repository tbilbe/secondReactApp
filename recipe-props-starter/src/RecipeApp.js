import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Recipe
          title="Pasta"
          ingredients={["Flour", "Water"]}
          instructions="Add the flour to water and mix"
          img="spaghetti.jpg"
        />
      </div>
    );
  }
}

export default RecipeApp;
