import React, { Component } from 'react';
import './Projects.css';
import listProjects from './projects.json';

class Projects extends Component {
    render() {
        console.log(listProjects)
        return (
            <div className="projects-container">
                <h3 className="title bold">Projects</h3>
                <div className="projects-gallery">
                    {listProjects.map((item, k) => {
                        return (
                            <a href={item.url} rel="noopener noreferrer" target="_blank" className="anchor-item">
                            <div key={item.id} className="projects-gallery-item">
                                <div className="project-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <span className="project-text">
                                    {item.title}
                                </span>
                                
                                <span className="hello-name">
                                    {item.category}
                                </span>
                            </div>
                        </a>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Projects;