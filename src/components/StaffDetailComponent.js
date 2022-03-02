import { Card,CardTitle,CardText,CardImg,CardBody,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import dateFormat from 'dateformat';

class StaffDetail extends Component {
  render(){
    const staff = this.props.staff[0];
    return (
      <div>
      <Breadcrumb listTag="div">
        <BreadcrumbItem>
          <Link to="/Nhan-vien">
            Nhân viên
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem
          active
          tag="span">
            {staff.name}
        </BreadcrumbItem>
    </Breadcrumb>
        <div className="row">
          <div id="item" className="col-12 col-lg-3 col-md-4">
            <CardImg src={"../"+staff.image} className="img-fluid" />
          </div>
          <div id="item" className="col-12 col-lg-9 col-md-8">
            <Card body key="5" className="text-left border-0">
            <CardBody className="col-12 col-md-8 col-lg-9">
              <CardTitle>{staff.name}</CardTitle>
              <CardText>
                Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}<br />
                Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}<br />
                Phòng ban: {staff.department.name}<br />
                Số ngày nghỉ còn lại: {staff.annualLeave}<br />
                Số ngày đã làm thêm: {staff.overTime}
              </CardText>
            </CardBody>
            </Card>
            </div>
        </div>
      </div>
    );}
}

export default StaffDetail;
