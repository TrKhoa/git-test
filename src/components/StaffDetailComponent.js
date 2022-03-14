import { Card,CardTitle,CardText,CardImg,CardBody,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import dateFormat from 'dateformat';

function Info({data}){
  return(
    <div className="row">
      <div id="item" className="col-12 col-lg-3 col-md-4">

        <CardImg src={"../"+data.image} className="img-fluid" />
      </div>
      <div id="item" className="col-12 col-lg-9 col-md-8">
        <Card body key="5" className="text-left border-0">
          <CardBody className="col-12 col-md-8 col-lg-9">
            <CardTitle>{data.name}</CardTitle>
            <CardText>
              Ngày sinh: {dateFormat(data.doB, "dd/mm/yyyy")}<br />
              Ngày vào công ty: {dateFormat(data.startDate, "dd/mm/yyyy")}<br />
              Phòng ban: {data.department.id ? data.department.name : JSON.parse(data.department).name}<br />
              Số ngày nghỉ còn lại: {data.annualLeave}<br />
              Số ngày đã làm thêm: {data.overTime}
            </CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

const StaffDetail = (props) =>{
    const staff = props.staff[0];
    return (
      <div>

      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/Nhan-vien">
            Nhân viên
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active tag="span">
          {staff.name}
        </BreadcrumbItem>
      </Breadcrumb>

      <Info data={staff} />
      </div>
    )
}

export default StaffDetail;
