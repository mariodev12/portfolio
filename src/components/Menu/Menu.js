import React, { Component } from 'react';

import "./Menu.css";

class Menu extends Component {
    render() {
        return (
            <div className="header-menu">
                <ul>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Resume</a>
                    </li>
                    <li>
                        <a>Projects</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Menu;