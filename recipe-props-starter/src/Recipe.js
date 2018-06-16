import './Recipe.css';
import React, { Component } from 'react';

class Recipe extends Component {
  render() {
    const { title, img, instructions } = this.props;
    const ingredients = this.props.ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>
    });
    return (
      <div className="recipe-card">
        <div className="recipe-img">
          <img src={img} alt={title}></img>
        </div>
        <div className="recipe-text">
          <h3 className="recipe-title">{title}</h3>
          <h4>Ingredients:</h4>
          <ul>{ingredients}</ul>
          <h4>Instructions:</h4>
          <p>{instructions}</p>
        </div>
      </div>
    );
  }
}

export default Recipe;