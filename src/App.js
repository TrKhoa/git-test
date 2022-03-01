import './App.css';
import { Navbar,NavbarBrand,NavLink } from 'reactstrap';
import { Switch,Route,Link } from 'react-router-dom';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { STAFFS,DEPARTMENTS } from './shared/staffs';
import StaffList from './components/StaffListComponent';
import StaffDetail from './components/StaffDetailComponent';
import DepartmentList from './components/DepartmentComponent';
import SalaryList from './components/SalaryComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS
    };
  }

  render(){

    const child=({ match })=> {
      return(
        <StaffDetail id={match.params.idStaff}/>
      )
    }

    return (
      <div className="App">
        <Navbar dark color="primary">
          <NavbarBrand href="*">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          <NavLink><Link className="text-white" to="/nhan-vien">Nhân viên</Link></NavLink>
          <NavLink><Link className="text-white" to="/phong-ban">Phòng ban</Link></NavLink>
          <NavLink><Link className="text-white" to="/bang-luong">Bảng lương</Link></NavLink>
        </Navbar>
        <Switch>
        <Route exact path="/" component={()=><StaffList staffs={this.state.staffs}/>} />
        <Route path="/nhan-vien" component={()=><StaffList staffs={this.state.staffs}/>} />
        <Route path="/phong-ban" component={()=><DepartmentList staffs={this.state.departments}/>} />
        <Route path="/bang-luong" component={()=><SalaryList staffs={this.state.staffs}/>} />
        //<Route path="/nhan-vien/:idStaff" component={child} />
        </Switch>
      </div>
    );
  }
}

export default App;
