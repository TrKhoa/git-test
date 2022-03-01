import './App.css';
import { Navbar,NavbarBrand,NavLink } from 'reactstrap';
import { Switch,Route,Link } from 'react-router-dom';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { STAFFS } from './shared/staffs';
import StaffList from './components/StaffListComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
    };
  }
  render(){
    return (
      <div className="App container-xxl">
        <Navbar dark color="success">
          <NavbarBrand href="#">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          <NavLink><Link className="text-white" to="/">Nhân viên</Link></NavLink>
          <NavLink><Link className="text-white" to="/">Nhân viên</Link></NavLink>
          <NavLink><Link className="text-white" to="/">Nhân viên</Link></NavLink>
        </Navbar>
        <Switch>
        <Route path="/" component={()=><StaffList staffs={this.state.staffs}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
