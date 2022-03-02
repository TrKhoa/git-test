import { Card,CardTitle,CardText,CardFooter,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import dateFormat from 'dateformat';

class SalaryList extends Component {
  constructor(props){
    super(props)

  }


  render(){
    const menu = this.props.staffs.map((staff) => {
      return (
        <div id="item" className="col-12 col-lg-2 col-md-5">
          <Card key={staff.id} outline="false">
            <CardTitle tag="h3">{staff.name}</CardTitle>
            <CardText className="text-left">
            Mã nhân viên: {staff.id}<br />
            Hệ số lương: {staff.salaryScale}<br />
            Số giờ làm thêm: {staff.overTime}<br />
            </CardText>
            <CardFooter>
            Lương: {parseInt(staff.salaryScale)*3000000+parseInt(staff.overTime)*200000}
            </CardFooter>
          </Card>
        </div>
      );
    });
  return (
    <div>
    <Breadcrumb listTag="div">
      <BreadcrumbItem>
        <Link to="/Nhan-vien">
          Nhan vien
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem
        active
        tag="span">
          Bang luong
      </BreadcrumbItem>
    </Breadcrumb>
       <div className="row">
        { menu }
       </div>
     </div>
  );}
}

export default SalaryList;
