import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainBoard from './components/MainBoard'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Recipe Box</h2>
          </div>
          <p className="App-intro"></p>
          <MainBoard/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
