import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css'

import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import Header from '../components/HeaderComponent';
import StaffList from '../components/StaffListComponent';
import StaffDetail from '../components/StaffDetailComponent';
import DepartmentList from '../components/DepartmentComponent';
import DepartmentDetail from '../components/DepartmentDetailComponent';
import SalaryList from '../components/SalaryComponent';
import Footer from '../components/FooterComponent';

import { postStaff,fetchStaff, fetchDepartment } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments
  }
}

const mapDispatchToProps = dispatch => ({
    fetchStaffs: () => { dispatch(fetchStaff())},
    fetchDepartments: () => { dispatch(fetchDepartment())},
    postStaff : (staffId, name, dob, salaryScale, startDate, department, annualLeave, overTime, image) => dispatch(postStaff(staffId, name, dob, salaryScale, startDate, department, annualLeave, overTime, image)),
  });

class Main extends Component {

  componentDidMount() {
    this.props.fetchStaffs();
    this.props.fetchDepartments();
  }

  render(){

    const StaffListPage = () => {
      return(
          <StaffList
              staffs={this.props.staffs.staffs}
              staffsLoading={this.props.staffs.isLoading}
              staffsErrMess={this.props.staffs.errMess}
              department={this.props.departments.departments}
              postStaff={this.props.postStaff}
          />
      );
    }

    const DepartmentsPage = () => {
      return(
          <DepartmentList
          department={this.props.departments.departments}
          departmentsLoading={this.props.departments.isLoading}
          departmentsErrMess={this.props.departments.errMess}
          />
      );
    }

    const SalaryPage = () => {
      return(
          <SalaryList
              staffs={this.props.staffs.staffs}
              staffsLoading={this.props.staffs.isLoading}
              staffsErrMess={this.props.staffs.errMess}
              department={this.props.departments.departments}
          />
      );
    }

    const child=({ match })=> {

      return(
        <StaffDetail
        staff={this.props.staffs.staffs.filter((staff) => staff.id===parseInt(match.params.idStaff))}
        staffsLoading={this.props.staffs.isLoading}
        staffsErrMess={this.props.staffs.errMess}
        departments={this.props.departments.departments}
        departmentsLoading={this.props.departments.isLoading}
        departmentsErrMess={this.props.departments.errMess}
        />
      )
    }

    const departmentChild=({ match })=> {

      return(
        <DepartmentDetail
        staff={this.props.staffs.staffs.filter((staff) => staff.departmentId===match.params.idDepartment)}
        department={this.props.departments.departments.filter((departments) => departments.id===match.params.idDepartment)[0]}
        />
      )
    }

    return (
      <div className="container-xl ">
        <Header />

        <Switch>
          <Route exact path="/" component={StaffListPage} />
          <Route path="/nhan-vien/:idStaff" component={child} />
          <Route path="/nhan-vien" component={StaffListPage} />
          <Route path="/phong-ban/:idDepartment" component={departmentChild} />
          <Route path="/phong-ban" component={DepartmentsPage} />
          <Route path="/bang-luong" component={SalaryPage}/>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
