import './Recipe.css';
import React, { Component } from 'react';

class Recipe extends Component {
  render() {
    const { title } = this.props;
    const ingredients = this.props.ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>
    });
    return (
      <div>
        <div>
          Recipe {title}
          <ul>{ingredients}</ul>
        </div>
      </div>
    );
  }
}

export default Recipe;