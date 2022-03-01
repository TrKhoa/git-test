import { Card,CardTitle,CardText,ButtonGroup,Button,CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import dateFormat from 'dateformat';

class StaffDetail extends Component {
  constructor(props){
    super(props)

  }

  render(){
    const info = () => {
      return (
        <div id="item" className="col-12 col-lg-2 col-md-5">
          <Card key={this.props.staffs.id}>
            <CardImg/>
            <CardTitle>{this.props.staffs.name}</CardTitle>
          </Card>
        </div>
      );
    }
  return (
    <div>
       <div className="row">
        { info }
       </div>
     </div>
  );}
}

export default StaffDetail;
