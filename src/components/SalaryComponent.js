import { Card,CardTitle,CardText,CardFooter,Breadcrumb,BreadcrumbItem,Button,ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Loading } from './LoadingComponent';

function RenderStaff({staff,isLoading, errMess}){
  if (isLoading) {
        return(
              <Loading />
        );
    }
    else if (errMess) {
        return(
              <h4>{errMess}</h4>
        );
    }
  return (
    <React.Fragment>

    {staff.map(staff =>(
    <div id="item" className="col-12 col-lg-4 col-md-5">
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
    </div>
  ))}
  </React.Fragment>
);

}

const SalaryList = (props) => {

  const [data,setData] = useState(props.staffs)

  function handleSort(selectedType){
    setData(
      data.slice().sort((a,b) =>{
        switch (selectedType) {
          case 1:
            if(a.name < b.name){
              return 1
            }else {
              return -1
            }
            break;
          default:
            if(a.name > b.name){
              return 1
            }else {
              return -1
            }
        }
      }))}

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
