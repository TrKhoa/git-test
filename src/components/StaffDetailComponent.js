import { Card,CardTitle,CardText,CardImg,CardBody,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import dateFormat from 'dateformat';
import { FadeTransform } from 'react-animation-components';
import 'bootstrap/dist/css/bootstrap.css';
import {Loading} from './LoadingComponent';

//tạo Render
function Info({data, departments}){
  if(data !==undefined && departments !==null){
  return(
    <React.Fragment>
    <Breadcrumb>
      <BreadcrumbItem>
        <Link to="/Nhan-vien">
          Nhân viên
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem active tag="span">
        {data.name}
      </BreadcrumbItem>
    </Breadcrumb>

    <FadeTransform in transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}>{/*Hiệu ứng*/}
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
              Phòng ban: {departments !== undefined ? departments.filter((val)=>val.id===data.departmentId)[0].name : ""}<br />
              Số ngày nghỉ còn lại: {data.annualLeave}<br />
              Số ngày đã làm thêm: {data.overTime}
            </CardText>
          </CardBody>
        </Card>
      </div>
    </div>
    </FadeTransform>
    </React.Fragment>
  )
}
else return <Loading />} //Trả về Loading khi chưa nhận được dữ liệu

//Render
const StaffDetail = (props) =>{
    const staff = props.staff[0];
    return (
      <div><Info data={staff} departments={props.departments} /></div>
    )
}

export default StaffDetail;
