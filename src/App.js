/* import css */
import './App.css';

/* import modules */
import React, { Component } from 'react';

/* import component */
import Main from './components/MainComponent';

class App extends Component {

  render(){

    return (
      <div className="App container-xl ">
        <Main />
      </div>
    );
  }
}

export default App;
