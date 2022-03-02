import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { Switch,Route } from 'react-router-dom';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { STAFFS,DEPARTMENTS } from './shared/staffs';
import NavigationBar from './components/NavbarComponent';
import StaffList from './components/StaffListComponent';
import StaffDetail from './components/StaffDetailComponent';
import DepartmentList from './components/DepartmentComponent';
import SalaryList from './components/SalaryComponent';
import Footer from './components/FooterComponent';


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
        <StaffDetail staff={this.state.staffs.filter((staff) => staff.id===parseInt(match.params.idStaff))} />
      )
    }

    return (
      <div className="App container-xl ">
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={()=><StaffList staffs={this.state.staffs}/>} />
          <Route path="/nhan-vien/:idStaff" component={child} />
          <Route path="/nhan-vien" component={()=><StaffList staffs={this.state.staffs}/>} />
          <Route path="/phong-ban" component={()=><DepartmentList departments={this.state.departments}/>} />
          <Route path="/bang-luong" component={()=><SalaryList staffs={this.state.staffs}/>} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
