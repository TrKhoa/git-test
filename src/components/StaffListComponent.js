import './App.css';
import { Navbar,NavbarBrand } from 'reactstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="#">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
      </div>
    </Navbar>
    </div>
  );
}

export default App;
