import React, { Component } from 'react';
import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <header className="App-header">
            <Logo />
            <Menu />
          </header>
          <section className="App-home">
            <Home />
          </section>
          <footer className="App-footer">
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
