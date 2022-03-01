import { Card,CardTitle,CardText,ButtonGroup,Button,CardImg } from 'reactstrap';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import dateFormat from 'dateformat';

class StaffList extends Component {
  constructor(props){
    super(props)

    this.state = {
      selectedStaff: null,
      selectedColumnNumber: "col-12 col-lg-2 col-md-5",
    }
  }

  onStaffSelect(staff) {
    this.setState({ selectedStaff: staff});
  }
  render(){
    const menu = this.props.staffs.map((staff) => {
      return (
        <div id="item" className={ "col-12 "+this.state.selectedColumnNumber}>
          <Card key={staff.id} outline="false" onClick={() => this.onStaffSelect(staff)}>
            <CardImg/>
            <CardTitle>{staff.name}</CardTitle>
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

export default StaffList;
