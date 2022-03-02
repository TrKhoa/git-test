import { Card,CardTitle,CardText,CardFooter,Breadcrumb,BreadcrumbItem,Button,ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import React, { Component, } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

{/* Thiết kế phần Card hiển thị dữ liệu*/}
const RenderStaff = staff => {
  return (
    <div id="item" className="col-12 col-lg-4 col-md-5">
      <Card key={staff.id} outline="false">
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

class SalaryList extends Component {
  constructor(props) {
    super(props);

    /* Khai báo State dùng trong việc sắp xếp*/
    this.state = { data:this.props.staffs  };
  }

  renderByDefault(){
      this.props.staffs.sort((a,b) =>{

        /* Dựa trên kết quả thu được từ return để sắp xếp thứ tự*/
        if(a.name > b.name){
          return 1
        }else {
          return -1
        }
      })

      /* Chỉnh sửa lại State với kết quả thu được ở trên*/
      this.setState({"data":this.props.staffs});
  }

  renderById(){
      this.props.staffs.sort((a,b) =>{

        /* Dựa trên kết quả thu được từ return để sắp xếp thứ tự*/
        if(a.id < b.id){
          return 1
        }else {
          return -1
        }
      })

      /* Chỉnh sửa lại State với kết quả thu được ở trên*/
      this.setState({"data":this.props.staffs});
  }

  render(){
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
        <Button onClick={() => this.renderByDefault()}>Mặc định</Button>
        <Button onClick={() => this.renderById()}><i class="fa fa-sort-amount-desc" aria-hidden="true" /> ID</Button>
      </ButtonGroup>
       <div className="row">
       {this.state.data.map(staff =>(

         /* Hiển thị danh sách kết quả */
        <RenderStaff
          id={staff.id}
          name={staff.name}
          salaryScale={staff.salaryScale}
          overTime={staff.overTime}
        />
      ))
      }
       </div>
     </div>
  );}
}

export default SalaryList;
