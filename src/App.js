import './App.css';
import image from './assets/images/alberto.png'
import { Navbar,NavbarBrand,NavLink,NavItem,Collapse,Nav } from 'reactstrap';
import { Switch,Route,Link,Redirect } from 'react-router-dom';
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
        <StaffDetail staff={this.state.staffs.filter((staff) => staff.id==parseInt(match.params.idStaff))} />
      )
    }

    return (
      <div className="App container-xxl">
        <Navbar
            color="primary"
            expand="md"
            dark
          >
            <NavbarBrand>
              reactstrap
            </NavbarBrand>
            <Collapse navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink>
                    <Link className="text-white" to="/nhan-vien">Nhân viên</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link className="text-white" to="/phong-ban">Phòng ban</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link className="text-white" to="/bang-luong">Bảng lương</Link>
                  </NavLink>
                </NavItem>
                </Nav>
            </Collapse>
          </Navbar>

        <Switch>
        <Route exact path="/" component={()=><StaffList staffs={this.state.staffs}/>} />
        <Route path="/nhan-vien/:idStaff" component={child} />
        <Route path="/nhan-vien" component={()=><StaffList staffs={this.state.staffs}/>} />
        <Route path="/phong-ban" component={()=><DepartmentList departments={this.state.departments}/>} />
        <Route path="/bang-luong" component={()=><SalaryList staffs={this.state.staffs}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
