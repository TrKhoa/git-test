import React, { component } from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
		<div className="container">
			<NavbarBrand href="#">Ringstone</NavbarBrand>
		</div>
	  </Navbar>
    <Menu />
    </div>
  );
}

export default App;
