import { Card,CardTitle,CardText,CardFooter,Breadcrumb,BreadcrumbItem,Button,ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FadeTransform } from 'react-animation-components';
import 'bootstrap/dist/css/bootstrap.css';
import { Loading } from './LoadingComponent';

//Tạo Render
function RenderStaff({staff,isLoading, errMess}){
  //Kiểm tra điều kiện và trả kết quả
  if (isLoading) //Nếu không có data
    return <Loading />
  else if (errMess) //Nếu có lỗi
    return <h4 className="container">{errMess}</h4>

  //Render khi nhận data
  return (
    <React.Fragment>
    {staff.map(staff =>(
    <div id="item" className="col-12 col-lg-4 col-md-5">
    <FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)' }}> {/*Hiệu ứng*/}
      <Card >
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
    </FadeTransform>
    </div>
  ))}
  </React.Fragment>
);

}

//Render
const SalaryList = (props) => {

  const [data,setData] = useState(props.staffs) //Khai báo hàm sắp xếp

  //Hàm xử lí sắp xếp
  function handleSort(selectedType){
    setData(
      data.slice().sort((a,b) =>{
        switch (selectedType) {
          case 1:
            if(a.name < b.name)
              return 1
            return -1
          default:
            if(a.name > b.name)
              return 1
            return -1
        }}))}

  return (
    <div>
    <Breadcrumb>
      <BreadcrumbItem>
        <Link to="/Nhan-vien">
          Nhân viên
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem
        active
        tag="span">
          Bảng lương
      </BreadcrumbItem>
    </Breadcrumb>

      {/*Nút sắp xếp*/}
      <ButtonGroup>
        <Button onClick={() => handleSort(0)}>Mặc định</Button>
        <Button onClick={() => handleSort(1)}><i className="fa fa-sort-amount-desc" aria-hidden="true" /> ID</Button>
      </ButtonGroup>

       <div className="row">
        <RenderStaff
          staff={data}
          isLoading={props.staffsLoading}
          errMess={props.staffsErrMess}
        />
       </div>
     </div>
  )
}

export default SalaryList;
