import React, { Component } from 'react';
import './Announcement.css';

class Announcement extends Component {
    render() {
        return (
            <div className="announcement">
                <div className="announcement-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Announcement;