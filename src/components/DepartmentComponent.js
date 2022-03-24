import { Card,CardTitle } from 'reactstrap';
import React from 'react';
import { FadeTransform } from 'react-animation-components';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Loading} from './LoadingComponent';

//Tạo Render
const RenderDepartment = ({departments,isLoading,errMess}) =>{
  if (isLoading)
    return <Loading />
  else if (errMess)
    return <h4 className="container">{errMess}</h4>

  return (
    departments.map(data => (
    <div id="item" className="col-12 col-lg-3 col-md-5 m-lg-2">
    <FadeTransform in transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}> {/*Hiệu ứng*/}
      <Link to={`/phong-ban/${data.id}`}>
      <Card body key={data.id} outline="false">
        <CardTitle tag="h3">{data.name}</CardTitle>
      </Card>
      </Link>
    </FadeTransform>
    </div>)))
}

//Render
const DepartmentList = (prop) => {

  return (
       <div className="row">
           <RenderDepartment departments={prop.department} isLoading={prop.departmentsLoading} errMess={prop.departmentsErrMess} />
       </div>
  )
}

export default DepartmentList;
