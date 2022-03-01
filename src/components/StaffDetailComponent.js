import { Card,CardTitle,CardText,ButtonGroup,Button,CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import dateFormat from 'dateformat';

class StaffDetail extends Component {
  render(){
    return (
      <div>
        <div className="row">
          <div id="item" className="col-12 col-lg-2 col-md-5">
            <Card key="5" outline="false">
              <CardTitle>{this.props.staff[0].name}</CardTitle>
            </Card>
          </div>
        </div>
      </div>
    );}
}

export default StaffDetail;
