import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <ul>
                    <li className="footer-item">
                        <a href="https://github.com/mariodev12" target="blank">
                            <i className="fab fa-github fa-lg"></i>
                        </a>
                    </li>
                    <li className="footer-item">
                        <a href="https://www.youtube.com/channel/UCisGMoxaVxJMcbio2FBHORg" target="blank">
                            <i className="fab fa-youtube fa-lg"></i>
                        </a>
                    </li>
                    <li className="footer-item">
                        <a href="https://twitter.com/mariodev_" target="blank">
                            <i className="fab fa-twitter fa-lg"></i>
                        </a>
                    </li>
                    <li className="footer-item">
                        <a href="https://www.linkedin.com/in/mario-diez-399a9713b/" target="blank">
                            <i className="fab fa-linkedin fa-lg"></i>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Footer;