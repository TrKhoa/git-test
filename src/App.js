/* import css */
import './App.css';

/* import modules */
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

/* import component */
import Main from './components/MainComponent';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App container-xl ">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
