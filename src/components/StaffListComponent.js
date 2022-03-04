import { Card,CardTitle,CardImg,InputGroup,Input,Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

{/* Thiết kế phần Card hiển thị dữ liệu*/}
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

export default function StaffList(prop){

  {/* Khai báo state dùng cho searchbar */}
  const [search,setSearch] = useState("")
  return (
    <div>
      <div className="col-12 bg-primary pb-2">

      {/* Searchbar */}
        <InputGroup className="col-md-3">
          <Button>Tìm</Button>

          {/* Nếu có sự thay đổi nào trên searchbar sẽ thay đổi state = dữ liệu hiện có trong searchbar */}
          <Input onChange={(event) => {setSearch(event.target.value)}} />
        </InputGroup>
      </div>
       <div className="row">

       {/* Sàng lọc dữ liệu bằng filter*/}
         { prop.staffs.filter((val) => {

           {/* Trả về toàn bộ nếu không có thay đổi so với ban đầu*/}
           if(search===""){
             return val

             {/* Đổi dữ liệu nhập và trong data thành chữ thường để so sánh*/}
           } else if (val.name.toLowerCase().includes(search.toLowerCase())){
             return val
           }

           {/* Liệt kê danh sách trong data dựa trên kết quả Filter*/}
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
