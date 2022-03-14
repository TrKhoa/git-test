import React from 'react';
import { Card,CardTitle,CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

const RenderStaff = prop =>{
  return (
    <div id="item" className="col-6 col-lg-2 col-md-4">
      <Link to={`/nhan-vien/${prop.id}`}>
        <Card key={prop.id} >
          <CardImg src={"../"+prop.image}/>
          <CardTitle >{prop.name}</CardTitle>
        </Card>
      </Link>
    </div>
  );
}

export default function SearchStaffs(prop){

  const store = localStorage.getItem('search');
  return (
    <div>
       <div className="row">
         { prop.staffs.filter((val) => {
           if(val.current===""){
             return val
           } else if (val.name.toLowerCase().includes(store.toLowerCase())){
             return val
           }
         }).map((data) =>(
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
