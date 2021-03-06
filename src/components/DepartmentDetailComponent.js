import React from "react";
import { Card,CardImg,CardBody,CardSubtitle,Breadcrumb,BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import { Loading } from './LoadingComponent';

//Tạo render
const RenderStaffItem = ({ staff }) => {
  return (
    <FadeTransform in transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}> {/*Hiệu ứng*/}
      <Link to={`/nhan-vien/${staff.id}`}>
        <Card>
          <CardImg width="100%" src={staff.image} alt={staff.name} />
          <CardBody>
            <CardSubtitle>{staff.name}</CardSubtitle>
          </CardBody>
        </Card>
      </Link>
    </FadeTransform>
  );
};

//Render
const DepartmentDetail = (props) => {
  const staffs = props.staff.map((val) => (
    <div className="col-6 col-md-4 col-lg-2 mt-3 mb-3" key={val.id}>
      <RenderStaffItem staff={val} />
    </div>
  ));

  if (props.staff != null && props.department !=null) {
    return (
      <div className="container">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/departments">Phòng ban</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{props.department.name}</BreadcrumbItem>
      </Breadcrumb>
      <div className="row mb-3">{staffs}</div>
      </div>
    );
  } else {
    return <Loading />; //Trả về Loading khi chưa nhận được dữ liệu
  }
};

export default DepartmentDetail;
