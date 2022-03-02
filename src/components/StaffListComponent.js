import { Card,CardTitle,CardImg,InputGroup,Input,Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import React,{ useState } from 'react';
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
  const [search,setSearch] = useState("")
  return (
    <div>
    <div className="col-12 bg-primary pb-2">
      <InputGroup className="col-md-3">
      <Button>
        Tìm
      </Button>
        <Input onChange={(event) => {setSearch(event.target.value)}} />
      </InputGroup>
    </div>
     <div className="row">
       { prop.staffs.filter((val) => {
         if(search==""){
           return val
         } else if (val.name.toLowerCase().includes(search.toLowerCase())){
           return val
         }
       }).map(data =>(
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
