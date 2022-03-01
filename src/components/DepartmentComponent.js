import { Card,CardTitle,CardText,ButtonGroup,Button,CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import dateFormat from 'dateformat';

class DepartmentList extends Component {
  constructor(props){
    super(props)

  }

  render(){
    const menu = this.props.departments.map((department) => {
      return (
        <div id="item" className="col-12 col-lg-2 col-md-5">
          <Card key={department.id} outline="false">
            <CardTitle>{department.name}</CardTitle>
          </Card>
        </div>
      );
    });
  return (
    <div>
       <div className="row">
        { menu }
       </div>
     </div>
  );}
}

export default DepartmentList;
