import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <h3 className="title bold">About me.</h3>
                <p>
                    I'm <span className="bold">Mario Díez</span>, Frontend developer and Javascript enthusiast from Barcelona. When I'm not learning a new technology, I'm making a React Native app for iOS or an Alexa Skill. Sometimes I make videos on Youtube, teaching React Native.
                </p>
                <p>
                    All my work is on Github, there is a lot to come and I'm eager about it. If you want to get in touch with me send me an email <a className="bold-href" href="mailto:contacto@mariodiezgarcia.com">here</a>.
                </p>
            </div>
        );
    }
}

export default About;