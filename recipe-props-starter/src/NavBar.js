import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div>
                <header>
                    <h2><a>RecipeApp</a></h2>
                    <nav>
                        <li><a>New Recipe</a></li>
                        <li><a>Home</a></li>
                        <li><a>About Us</a></li>
                        <li><a>Contact</a></li>
                    </nav>
                </header>
            </div >
        )
    }
}

export default NavBar;