import { Card,CardTitle } from 'reactstrap';
import React from 'react';
import { FadeTransform } from 'react-animation-components';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Loading} from './LoadingComponent';

const RenderDepartment = ({departments,isLoading,errMess}) =>{
  if (isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{errMess}</h4>
                    </div>
                </div>
            );
        }
  return (
    departments.map(data => (
    <div id="item" className="col-12 col-lg-3 col-md-5 m-lg-2">
    <FadeTransform  in
        transformProps={{
            exitTransform: 'scale(0.5) translateY(-50%)'
        }}>
      <Link to={`/phong-ban/${data.id}`}>
      <Card body key={data.id} outline="false">
        <CardTitle tag="h3">{data.name}</CardTitle>
      </Card>
      </Link>
    </FadeTransform>
    </div>)))
}

const DepartmentList = (prop) => {

  return (
    <div>
       <div className="row">
           <RenderDepartment departments={prop.department} isLoading={prop.departmentsLoading} errMess={prop.departmentsErrMess} />
       </div>
     </div>
  )
}

export default DepartmentList;
