import { Card,CardTitle,CardText, Button } from 'reactstrap';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import dateFormat from 'dateformat';

class StaffList extends Component {
  constructor(props){
    super(props)

    this.state = {
      selectedStaff: null,
      selectedColumnNumber: "col-12 col-lg-3 col-md-5",
    }
  }

  onStaffSelect(staff) {
    this.setState({ selectedStaff: staff});
  }

  handleColumn(prop){
    switch (prop) {
      case 1:
        this.setState({ selectedColumnNumber: "col-12"})
        break;
      case 2:
        this.setState({ selectedColumnNumber: "col-5"})
        break;
      case 3:
        this.setState({ selectedColumnNumber: "col-3"})
        break;
      case 6:
        this.setState({ selectedColumnNumber: "col-1"})
        break;
      default:
        this.setState({ selectedColumnNumber: "col-12 col-lg-3 col-md-5"})
    }
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
        <div id="item" className={ this.state.selectedColumnNumber +" m-1"}>
          <Card key={staff.id} onClick={() => this.onStaffSelect(staff)}>
            <CardTitle>{staff.name}</CardTitle>
          </Card>
        </div>
      );
    });
  return (
    <div className="container">
    <div className="text-right">
      <Button onClick={ () => {this.handleColumn(0)}}>Default</Button>
      <Button onClick={ () => {this.handleColumn(1)}}>1</Button>
      <Button onClick={ () => {this.handleColumn(2)}}>2</Button>
      <Button onClick={ () => {this.handleColumn(3)}}>3</Button>
      <Button onClick={ () => {this.handleColumn(6)}}>6</Button>
    </div>
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
