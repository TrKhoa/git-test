/* import css */
import './App.css';

/* import modules */
import React, { Component } from 'react';
import { configureStore } from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

/* import component */
import Main from './components/MainComponent';

const store = configureStore();

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App container-xl ">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
