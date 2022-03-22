import React,{ useState } from 'react';
import { Card,CardTitle,CardImg,Row, Col,InputGroup,Input,Label,Button,
  Modal,ModalHeader,ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

import 'bootstrap/dist/css/bootstrap.css';

const RenderStaff = ({data, isLoading, errMess, search}) =>{
  if (isLoading) {
        return(
              <Loading />
        );
    }
    else if (errMess) {
        return(
              <h4>{errMess}</h4>
        );
    }
  return (
    <React.Fragment>
    { data.filter((val) => {
      if(search===""){
        return val
      } else if (val.name.toLowerCase().includes(search.toLowerCase())){
        return val
      }
    }).map((data) =>(
      <div id="item" className="col-6 col-lg-2 col-md-4">
        <Link to={`/nhan-vien/${data.id}`}>
          <Card key={data.id} >
            <CardImg src={"../"+data.image}/>
            <CardTitle >{data.name}</CardTitle>
          </Card>
        </Link>
      </div>
    ))}
    </React.Fragment>
  );

}

const required = value => value && value.length;
const minLength = min => value => (value && value.length >= min) || !value;
const maxLength = max => value => (value && value.length <= max) || !value;
const minValue = min => value => (value && value >= min) || !value;

const RenderError = ({model}) => {
  return(
    <Errors
      className="text-danger"
      model={model}
      show="touched"
      messages={{
          required: 'Required',
          minLength: 'Phải nhiều hơn hoặc bằng 5 kí tự',
          maxLength: 'Phải ít hơn hoặc bằng 30 kí tự',
          minValue: 'Giá trị phải lớn hơn hoặc bằng 0'
      }}
   />
  )
}

export default function StaffList(prop){

  const [search,setSearch] = useState("");
  const [modalStatus,setModalStatus] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setSearch(e.target.search.value);
  }

  const toggleModal = () => {
    setModalStatus(!modalStatus);
  }



  const RenderStaffAdd = ({contain,addStaff}) =>{

    const handleSubmitForm = (e) => {
          setModalStatus(!modalStatus);
          let id = Object.keys(prop.staffs).length;
          let image = "/assets/images/alberto.png";
          addStaff(id, e.name, e.dob, e.salaryScale, e.startDate, e.department, e.annualLeave, e.overTime, image)
    }

    return(
      <React.Fragment>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
        <LocalForm model="addStaff" onSubmit={(values) => handleSubmitForm(values)}>

          <Row className="form-group">
              <Label htmlFor="name" md={2}>Tên</Label>
              <Col md={10}>
                  <Control.text model=".name" id="name" name="name"
                      placeholder="Tên"
                      className="form-control"
                      validators={{ required, maxLength: maxLength(30), minLength: minLength(5) }}
                   />
                     <RenderError model=".name" />
              </Col>

          </Row>

          <Row className="form-group">
              <Label htmlFor="dob" md={2}>Ngày sinh</Label>
              <Col md={10}>
                  <Control type="date" model=".dob" id="dob" name="dob"
                      placeholder="Ngày sinh"
                      className="form-control"
                      validators={{ required  }}
                       />
                  <RenderError model=".dob" />
              </Col>
          </Row>
          <Row className="form-group">
              <Label htmlFor="startDate" md={2}>Ngày vào công ty</Label>
              <Col md={10}>
                  <Control type="date" model=".startDate" id="startDate" name="startDate"
                      placeholder="Ngày vào công ty"
                      className="form-control"
                      validators={{ required  }} />
                  <RenderError model=".startDate" />
              </Col>
          </Row>
          <Row className="form-group">
              <Label htmlFor="department" md={2}>Phòng ban</Label>
              <Col md={10}>
                  <Control.select model=".department" id="department" name="department"
                      placeholder="Phòng ban"
                      className="form-control"
                      validators={{ required  }}>
                  <option key="0" value="0" selected="selected">-------Chọn phòng ban----------</option>
                      {contain.map((val) =>
                          <option key={val.id} value={JSON.stringify(val)}>{val.name}</option>
                      )}
                  </Control.select>
                  <RenderError model=".department" />
              </Col>
          </Row>
          <Row className="form-group">
              <Label htmlFor="salaryScale" md={2}>Hệ số lương</Label>
              <Col md={10}>
                  <Control type="number" model=".salaryScale" id="salaryScale" name="salaryScale"
                      placeholder="Hệ số lương"
                      className="form-control"
                      validators={{ required, minValue :minValue(0) }} />
                  <RenderError model=".salaryScale" />
              </Col>
          </Row>
          <Row className="form-group">
              <Label htmlFor="annualLeave" md={2}>Số ngày nghỉ còn lại</Label>
              <Col md={10}>
                  <Control type="number" model=".annualLeave" id="annualLeave" name="annualLeave"
                      placeholder="Số ngày nghỉ còn lại"
                      className="form-control"
                      validators={{ required, minValue :minValue(0)  }} />
                  <RenderError model=".annualLeave" />
              </Col>
          </Row>
          <Row className="form-group">
              <Label htmlFor="overTime" md={2}>Số ngày làm thêm</Label>
              <Col md={10}>
                  <Control type="number" model=".overTime" id="overTime" name="overTime"
                      placeholder="Số ngày làm thêm"
                      className="form-control"
                      validators={{ required, minValue :minValue(0)  }} />
                  <RenderError model=".overTime" />
              </Col>
          </Row>
          <Row className="form-group">
              <Col md={{size:10, offset: 2}}>
                  <Button type="submit" color="primary">
                  Xác nhận
                  </Button>
              </Col>
          </Row>
          </LocalForm>
        </ModalBody>
      </React.Fragment>
    )
  }


  return (

    <div>
      <div className="col-12 bg-primary pb-2">
        <form onSubmit={handleSubmit}>
          <InputGroup className="col-md-3">
            <Button onClick={toggleModal} className="bg-dark">Thêm</Button>
            <Input name="search" />
            <Button type="submit" value="Submit">Tìm</Button>
          </InputGroup>
        </form>
      </div>
      <Modal isOpen={modalStatus} size="lg" toggle={() => setModalStatus(!modalStatus)}>
        <RenderStaffAdd contain={prop.department} addStaff={prop.addStaff}/>
      </Modal>

       <div className="row">
           <RenderStaff
            data={prop.staffs}
            isLoading={prop.staffsLoading}
            errMess={prop.staffsErrMess}
            search={search}
           />
       </div>

     </div>
  )
}
