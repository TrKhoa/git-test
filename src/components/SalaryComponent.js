import { Card,CardTitle,CardText,CardFooter,Breadcrumb,BreadcrumbItem,Button,ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import React, { Component,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

{/* Thiết kế phần Card hiển thị dữ liệu*/}
function RenderStaff(staff){
  return (
    <div id="item" className="col-12 col-lg-4 col-md-5">
      <Card >
        <CardTitle tag="h3">{staff.name}</CardTitle>
        <CardText className="text-left">
          Mã nhân viên: {staff.id}<br />
          Hệ số lương: {staff.salaryScale}<br />
          Số giờ làm thêm: {staff.overTime}<br />
        </CardText>

        {/* lấy dữ liệu truyển vào chuyển sang dạng int rồi tính tiền lương*/}
        <CardFooter>
          Lương: {parseInt(staff.salaryScale)*3000000+parseInt(staff.overTime)*200000}
        </CardFooter>
      </Card>
    </div>
  );
}

const SalaryList = (props) => {

  /* Khai báo State dùng trong việc sắp xếp*/
  const [data,setData] = useState(props.staffs)

  /* Hàm xữ lí sắp xếp*/
  function handleSort(selectedType){
    
    /* Chỉnh sửa lại State với kết quả thu được*/
    setData(

      /* Dùng slice trong trường hợp này để tạo bản sao */
      data.slice().sort((a,b) =>{

        /* Chọn phương thức sắp xếp*/
        switch (selectedType) {
          case 1:

            /* Dựa trên kết quả thu được từ return để sắp xếp thứ tự*/
            if(a.name < b.name){
              return 1
            }else {
              return -1
            }
            break;
          default:

            /* Dựa trên kết quả thu được từ return để sắp xếp thứ tự*/
            if(a.name > b.name){
              return 1
            }else {
              return -1
            }
        }
      }))}

  return (
    <div>

    {/* Tạo phần hiển vị trí hiện tại trên cấu trúc Website*/}
    <Breadcrumb listTag="div">
      <BreadcrumbItem>
        <Link to="/Nhan-vien">
          Nhân viên
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem
        active
        tag="span">
          Bảng lương
      </BreadcrumbItem>
    </Breadcrumb>

    {/* Lựa chọn phương thức sắp xếp*/}
      <ButtonGroup>
        <Button onClick={() => handleSort(0)}>Mặc định</Button>
        <Button onClick={() => handleSort(1)}><i className="fa fa-sort-amount-desc" aria-hidden="true" /> ID</Button>
      </ButtonGroup>
       <div className="row">
       {data.map(staff =>(

         /* Hiển thị danh sách kết quả */
        <RenderStaff
          id={staff.id}
          name={staff.name}
          salaryScale={staff.salaryScale}
          overTime={staff.overTime}
        />
      ))}
       </div>
     </div>
  )
}

export default SalaryList;
