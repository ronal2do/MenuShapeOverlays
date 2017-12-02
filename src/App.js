import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import withMenu from './Menu';

const MENU_ITEMS = [{
    id: 0,
    label: 'Home',
    link: '/none'
  },{
    id: 2,
    label: 'News',
    link: '/none'
  },{
    id: 3,
    label: 'About',
    link: '/none'
  },{
    id: 4,
    label: 'Contact',
    link: '/none'
  }
]

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
    );
  }
}

export default withMenu({items: MENU_ITEMS})(App);
