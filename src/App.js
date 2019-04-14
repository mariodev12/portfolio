import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Announcement from './components/Announcement/Announcement';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Announcement>
            <div>
              A new project is already available, go to the project section to find it! <span role="img" aria-label="great">🎉</span>
            </div>
          </Announcement> 
          <div className="App-container">
            <header className="App-header">
              <Footer />
              <Menu />
            </header>
            <section className="App-home">
              <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/about" component={About} />
            </section>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
