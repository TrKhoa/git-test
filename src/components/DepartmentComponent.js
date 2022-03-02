import { Card,CardTitle,CardText,CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import dateFormat from 'dateformat';

const RenderDepartment = prop =>{
  return (
    <div id="item" className="col-12 col-lg-3 col-md-5 m-lg-2">
      <Card body key={prop.id} outline="false">
        <CardTitle tag="h3">{prop.name}</CardTitle>
        <CardText className="text-left">Số lượng nhân viên:{prop.numberOfStaff}</CardText>
      </Card>
    </div>
  );
}

class DepartmentList extends Component {

  render(){
  return (
    <div>
       <div className="row">
       { this.props.departments.map(data => (
         <RenderDepartment
          id={data.id}
          name={data.name}
          numberOfStaff={data.numberOfStaff}
         />
       ))}
       </div>
     </div>
  );}
}

export default DepartmentList;
