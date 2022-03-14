import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css'

import { Switch,Route,Redirect } from 'react-router-dom';
import React, { Component } from 'react';

import { STAFFS,DEPARTMENTS } from '../shared/staffs';

import Header from '../components/HeaderComponent';
import StaffList from '../components/StaffListComponent';
import StaffDetail from '../components/StaffDetailComponent';
import SearchStaffs from '../components/SearchComponent'
import DepartmentList from '../components/DepartmentComponent';
import SalaryList from '../components/SalaryComponent';
import Footer from '../components/FooterComponent';

class Main extends Component {
  store() {
    if(!localStorage.getItem('staffs')){
      localStorage.setItem('staffs',JSON.stringify(STAFFS));
    }
  }

  constructor(props) {
    super(props);

    this.store();
    const Store = JSON.parse(localStorage.getItem('staffs'));
    this.state = {
      staffs: Store,
      departments: DEPARTMENTS
    };
  }

  changeState(){
    this.setState({
      'staffs': JSON.parse(localStorage.getItem('staffs'))
    })
  }

  render(){
    const child=({ match })=> {
      return(
        <StaffDetail staff={this.state.staffs.filter((staff) => staff.id===parseInt(match.params.idStaff))} />
      )
    }

    return (
      <div className="App container-xl ">
        <Header />

        <Switch>
          <Route exact path="/" component={()=><StaffList staffs={this.state.staffs} departments={this.state.departments} changeState={() => this.changeState()} />} />
          <Route path="/nhan-vien/:idStaff" component={child} />
          <Route path="/nhan-vien" component={()=><StaffList staffs={this.state.staffs} departments={this.state.departments} changeState={() => this.changeState()} />} />
          <Route path="/tim-kiem" component={()=><SearchStaffs staffs={this.state.staffs} />} />
          <Route path="/phong-ban" component={()=><DepartmentList departments={this.state.departments}/>} />
          <Route path="/bang-luong" component={()=><SalaryList staffs={this.state.staffs}/>} />
          <Redirect to="/" />
        </Switch>
        
        <Footer />
      </div>
    );
  }
}

export default Main;
