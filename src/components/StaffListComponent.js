import React,{ useState,usePrevious } from 'react';
import { Card,CardTitle,CardImg,Form,FormGroup,Row, Col,InputGroup,Input,Label,Button,
  Modal,ModalHeader,ModalBody } from 'reactstrap';
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

const required = value => value && value.length;
const minLength = min => value => (value && value.length >= min) || !value;
const maxLength = max => value => (value && value.length <= max) || !value;
const minValue = min => value => (value && value >= min) || !value;

export default function StaffList(prop){

  const store = JSON.parse(localStorage.getItem('staffs'));
  const [search,setSearch] = useState("");
  const [modalStatus,setModalStatus] = useState(false);
  const [form,setForm] = useState({
    id: '',
    name: '',
    dob: '',
    images: '',
    startDate: '',
    salaryScale: '',
    annualLeave: '',
    overTime: '',
   })

  const handleSubmit = (e) =>{
    e.preventDefault();
    setSearch(e.target.search.value);
  }

  const toggleModal = () => {
    setModalStatus(!modalStatus);
    setForm({
      ...form,
      id: Object.keys(store).length,
      image: '/assets/images/alberto.png'
    })
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setModalStatus(!modalStatus);
    const newStorage = store;
    [store][0].push(form);
    localStorage.setItem('staffs',JSON.stringify(newStorage));
    prop.changeState();
}

  const handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setForm({
          ...form,
          [name]: value,
        })
    }

  return (

    <div>
      <div className="col-12 bg-primary pb-2">
      <form onSubmit={handleSubmitForm}>
          <InputGroup className="col-md-3">
            <Button onClick={toggleModal} className="bg-dark">Thêm</Button>
              <Input name="search" />
              <Button onClick={()=>localStorage.clear()}>Tìm</Button>
          </InputGroup>
          </form>
      </div>
      <Modal isOpen={modalStatus} size="lg" toggle={() => setModalStatus(!modalStatus)}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
        <Form onSubmit={(values) => handleSubmitForm(values)}>
            <FormGroup row>
                <Label htmlFor="name" md={2}>Tên</Label>
                <Col md={10}>
                    <Input type="text" id="name" name="name"
                        placeholder="Tên"
                        value={form.name}
                        onChange={handleInputChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor="dob" md={2}>Ngày sinh</Label>
                <Col md={10}>
                    <Input type="date" id="dob" name="dob"
                        placeholder="Ngày sinh"
                        value={form.dob}
                        onChange={handleInputChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor="startDate" md={2}>Ngày vào công ty</Label>
                <Col md={10}>
                    <Input type="date" id="startDate" name="startDate"
                        placeholder="Ngày vào công ty"
                        value={form.startDate}
                        onChange={handleInputChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor="department" md={2}>Email</Label>
                <Col md={10}>
                  <Input type="select" name="department"
                      value={form.contactType}
                      onChange={handleInputChange}>
                      <option key="0">-------Chọn phòng ban----------</option>
                      {prop.departments.map((val) =>
                        <option key={val.id}>{val.name}</option>
                      )}
                </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor="salaryScale" md={2}>Hệ số lương</Label>
                <Col md={10}>
                    <Input type="text" id="salaryScale" name="salaryScale"
                        placeholder="Hệ số lương"
                        value={form.salaryScale}
                        onChange={handleInputChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor="salaryScale" md={2}>Số ngày nghỉ còn lại</Label>
                <Col md={10}>
                    <Input type="number" id="annualLeave" name="annualLeave"
                        placeholder="Số ngày nghỉ còn lại"
                        value={form.annualLeave}
                        onChange={handleInputChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor="salaryScale" md={2}>Số ngày đã làm thêm</Label>
                <Col md={10}>
                    <Input type="number" id="overTime" name="overTime"
                        placeholder="Số ngày đã làm thêm"
                        value={form.overTime}
                        onChange={handleInputChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col md={{size: 10, offset: 2}}>
                    <Button type="submit" color="primary">
                        Send Feedback
                    </Button>
                </Col>
            </FormGroup>
        </Form>
        </ModalBody>
      </Modal>

       <div className="row">
         { prop.staffs.filter((val) => {
           if(search===""){
             return val
           } else if (val.name.toLowerCase().includes(search.toLowerCase())){
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
