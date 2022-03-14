import { Card,CardTitle,CardText } from 'reactstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const RenderDepartment = (prop) =>{
  return (
    prop.departments.map(data => (
    <div id="item" className="col-12 col-lg-3 col-md-5 m-lg-2">
      <Card body key={data.id} outline="false">
        <CardTitle tag="h3">{data.name}</CardTitle>
        <CardText className="text-left">Số lượng nhân viên:{data.numberOfStaff}</CardText>
      </Card>
    </div>)))
}

const DepartmentList = (prop) => {

  return (
    <div>
       <div className="row">
           <RenderDepartment departments={prop.department} />
       </div>
     </div>
  )
}

export default DepartmentList;
