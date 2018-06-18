import React, { Component } from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {

  static defaultProps = {
    recipes: [
      {
        title: "Spaghetti",
        instructions: "Mix the flour and Water",
        ingreditents: ["Flour", "Water"],
        img: "spaghetti.jpg"
      },
      {
        title: "Milkshake",
        instructions: "Blend the ice cream, milk and cream. Then pour into Glass, then add whipped cream to top, and grate chocolate over",
        ingreditents: ["Ice-cream", "Whipped cream", "Milk", "Grated Chocolate"],
        img: "milkshake.jpg"
      },
      {
        title: "Avocado Toast",
        instructions: "Toast the bread, smash the avocado, butter the toast, add avo and salt and peper to taste",
        ingreditents: ["avocado", "bread", "salt and pepper", "butter"],
        img: "avocado.jpg"
      }
    ]
  }

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const recipes = this.props.recipes.map((r, index) => (
      <Recipe key={index} {...r} />
    ));

    return (
      <div className="recipe-list">
        {recipes}
      </div>
    )
  }
}

export default RecipeList;