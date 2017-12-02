import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';

const MENU_ITEMS = [{
    id: 0,
    label: 'Xulapa',
    link: '/none'
  },{
    id: 2,
    label: 'Xulapa 2',
    link: '/none'
  },{
    id: 3,
    label: 'Xulapa 3',
    link: '/none'
  },{
    id: 4,
    label: 'Xulapa 4',
    link: '/none'
  }
]

class App extends Component {
  render() {
    return (
      <Menu items={MENU_ITEMS}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Menu>
    );
  }
}

export default App;
