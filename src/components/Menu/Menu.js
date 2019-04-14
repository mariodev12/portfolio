import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./Menu.css";

class Menu extends Component {
    render() {
        return (
            <div className="header-menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Menu;