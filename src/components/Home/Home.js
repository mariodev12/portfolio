import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <span className="hello-name">Hello, I'm Mario Diez</span>
                <h3 className="title">Frontend developer from Barcelona.</h3>
                <p className="description">
                    I'm always thinking about what problem 
                    I can solve with code and able to make 
                    it real is awesome. 
                    You can find me teaching React Native on Youtube or open sourcing some project on Github.
                    
                </p>
                <a href="#" className="email-link">
                    <span>If you want to know more about me, get in touch here.</span>
                </a>
            </div>
        );
    }
}

export default Home;