import { Card,CardTitle,CardText } from 'reactstrap';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import dateFormat from 'dateformat';

class StaffList extends Component {
  constructor(props){
    super(props)

    this.state = {
      selectedStaff: null
    }
  }

  onStaffSelect(staff) {
    this.setState({ selectedStaff: staff});
  }

  renderStaff(staff) {
    if(staff!=null){
      return(
      <Card outline body color="primary" className="col-12 text-left">
        <CardTitle tag="h2">{staff.name}</CardTitle>
        <CardText tag="h4">
          Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}<br />
          Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}<br />
          Phòng ban: {staff.department.name}<br />
          Số ngày nghỉ còn lại: {staff.annualLeave}<br />
          Số ngày đã làm thêm: {staff.overTime}
        </CardText>
      </Card>);
    }
  }
  render(){
    const menu = this.props.staffs.map((staff) => {
      return (
        <div className="col-12 col-lg-3 col-md-5 m-1">
          <Card key={staff.id} onClick={() => this.onStaffSelect(staff)}>
            <CardTitle>{staff.name}</CardTitle>
          </Card>
        </div>
      );
    });
  return (
    <div className="container">
       <div className="row">
        { menu }
       </div>
      <div className="row">
        <div  className="col-12 col-md-5 m-1">
          {this.renderStaff(this.state.selectedStaff)}
        </div>
      </div>
     </div>
  );}
}

export default StaffList;
