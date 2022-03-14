import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css'

import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import Header from '../components/HeaderComponent';
import StaffList from '../components/StaffListComponent';
import StaffDetail from '../components/StaffDetailComponent';
import DepartmentList from '../components/DepartmentComponent';
import SalaryList from '../components/SalaryComponent';
import Footer from '../components/FooterComponent';

const mapStateToProps = state => {
  console.log(state.staffs);
  return {
    staffs: state.staffs,
    departments: state.departments
  }
}

class Main extends Component {
  render(){

    const child=({ match })=> {
      return(
        <StaffDetail staff={this.props.staffs.filter((staff) => staff.id===parseInt(match.params.idStaff))} />
      )
    }

    return (
      <div className="container-xl ">
        <Header />{console.log(this.props)}

        <Switch>
          <Route exact path="/" component={()=><StaffList staffs={this.props.staffs} department={this.props.departments}/>} />
          <Route path="/nhan-vien/:idStaff" component={child} />
          <Route path="/nhan-vien" component={()=><StaffList staffs={this.props.staffs} department={this.props.departments} />} />
          <Route path="/phong-ban" component={()=><DepartmentList department={this.props.departments}/>} />
          <Route path="/bang-luong" component={()=><SalaryList staffs={this.props.staffs}/>} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
