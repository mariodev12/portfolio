import React, { Component } from 'react';
import './Logo.css';

import LogoImage from '../../asets/md-logo.png';

class Logo extends Component {
    render() {
        return (
            <div>
                <img src={LogoImage} className="logo" alt="logo"/>
            </div>
        );
    }
}



export default Logo;