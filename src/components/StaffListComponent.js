import { Card,CardTitle,CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const RenderStaff = prop =>{
  return (
    <div id="item" className="col-6 col-lg-2 col-md-4">
      <Link to={`/nhan-vien/${prop.id}`}>
        <Card key={prop.id} outline="false">
          <CardImg src={"../"+prop.image}/>
          <CardTitle >{prop.name}</CardTitle>
        </Card>
      </Link>
    </div>
  );
}

export default function StaffList(prop){

  return (
    <div>
       <div className="row">
       { prop.staffs.map(data =>(
         <RenderStaff
          id={data.id}
          image={data.image}
          name={data.name}
         />
       ))}
       </div>
     </div>
  )
}
