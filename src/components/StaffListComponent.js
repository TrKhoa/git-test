import React,{ useState,useRef } from 'react';
import { Card,CardTitle,CardImg,Form,FormGroup,Row, Col,InputGroup,Input,Label,Button,
  Modal,ModalHeader,ModalBody, FormFeedback } from 'reactstrap';
import { Link,withRouter } from 'react-router-dom';

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

const initialState = {
  id: '',
  name: '',
  dob: '',
  images: '',
  startDate: '',
  salaryScale: '',
  annualLeave: '',
  overTime: '',
}

function StaffList(prop){

  const store = JSON.parse(localStorage.getItem('staffs'));
  let search = useRef("khoa");

  const [modalStatus,setModalStatus] = useState(false);
  const [error,setError] = useState({
    name:''
  });
  const [form,setForm] = useState({
    id: '',
    name: '',
    dob: '',
    images: '',
    startDate: '',
    department: '',
    salaryScale: '',
    annualLeave: '0',
    overTime: '0',
  })

  const[touched,setTouched] = useState({
    name: false,
    dob: false,
    startDate: false,
    salaryScale: false,
    department: true,
    annualLeave: false,
    overTime: false,
  })

  const handleBlur = (field) => (e) =>{
    setTouched({ ...touched, [field] : true})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    search.current = e.target.search.value;
    localStorage.setItem('search',search.current);
    prop.history.push('/tim-kiem')
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
    console.log(JSON.stringify(newStorage));
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
        console.log(JSON.stringify(form));
    }

    const validate = (name,dob,startDate,department,salaryScale,annualLeave,overTime) => {
        const error = {
          name: '',
          dob: '',
          startDate: '',
          department: '',
          salaryScale: '',
          annualLeave: '',
          overTime: '',
          isAvailable:false
        };

        if (touched.name && name.length < 3)
          error.name = 'Tên phải nhiều hơn 3 kí tự';
        if (touched.dob && dob=="")
          error.dob = 'Vui lòng điền ngày sinh';
        if (touched.startDate && startDate=="")
          error.startDate = 'Vui lòng nhập ngày vào';
        if (touched.salaryScale && salaryScale=="")
          error.salaryScale = 'Vui lòng nhập hệ số lương';
        if (touched.annualLeave && annualLeave=="")
          error.annualLeave = 'Vui lòng nhập số ngày';
        if (touched.overTime && overTime=="")
          error.overTime = 'Vui lòng nhập số ngày';
        if (
          touched.name && touched.dob && touched.startDate && touched.department
          && error.name ==='' && error.dob ==='' && error.startDate==='' &&
          error.department ==='' && error.salaryScale ==='' && error.overTime ==='')
          error.isAvailable = true
        return error;
    }

    const errors = validate(form.name,form.dob,form.startDate,Form.department,form.salaryScale,form.annualLeave,form.overTime)

  return (

    <div>

      <div className="col-12 bg-primary pb-2">
        <form onSubmit={handleSubmit}>
          <InputGroup className="col-md-3">
            <Button onClick={toggleModal} className="bg-dark">Thêm</Button>
            <Input name="search" />
            <Button type='submit' name='submit'>Tìm</Button>
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
                        valid={errors.name===''}
                        invalid={errors.name!=''}
                        onChange={handleInputChange}
                        onBlur={handleBlur('name')}/>
                    <FormFeedback>{errors.name }</FormFeedback>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor="dob" md={2}>Ngày sinh</Label>
                <Col md={10}>
                    <Input type="date" id="dob" name="dob"
                        placeholder="Ngày sinh"
                        value={form.dob}
                        valid={errors.dob===''}
                        invalid={errors.dob!=''}
                        onChange={handleInputChange}
                        onBlur={handleBlur('dob')}/>
                    <FormFeedback>{errors.dob }</FormFeedback>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor="startDate" md={2}>Ngày vào công ty</Label>
                <Col md={10}>
                    <Input type="date" id="startDate" name="startDate"
                        placeholder="Ngày vào công ty"
                        value={form.startDate}
                        valid={errors.startDate===''}
                        invalid={errors.startDate!=''}
                        onChange={handleInputChange}
                        onBlur={handleBlur('startDate')}/>
                    <FormFeedback>{errors.startDate }</FormFeedback>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor="department" md={2}>Phòng ban</Label>
                <Col md={10}>
                  <Input type="select" name="department"
                      value={form.department}
                      valid={errors.department===''}
                      invalid={errors.department!=''}
                      onChange={handleInputChange}
                      onBlur={handleBlur('department')}>
                      <option key="0" value="0" selected="selected">-------Chọn phòng ban----------</option>
                      {prop.departments.map((val) =>
                          <option key={val.id} value={JSON.stringify(val)}>{val.name}</option>
                      )}
                </Input>
                <FormFeedback>{errors.department }</FormFeedback>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor="salaryScale" md={2}>Hệ số lương</Label>
                <Col md={10}>
                    <Input type="number" id="salaryScale" name="salaryScale"
                        placeholder="Hệ số lương"
                        value={form.salaryScale}
                        valid={errors.salaryScale===''}
                        invalid={errors.salaryScale!=''}
                        onChange={handleInputChange}
                        onBlur={handleBlur('salaryScale')}
                        min="0"/>
                    <FormFeedback>{errors.salaryScale }</FormFeedback>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor="annualLeave" md={2}>Số ngày nghỉ còn lại</Label>
                <Col md={10}>
                    <Input type="number" id="annualLeave" name="annualLeave"
                        placeholder="Số ngày nghỉ còn lại"
                        value={form.annualLeave}
                        valid={errors.annualLeave===''}
                        invalid={errors.annualLeave!=''}
                        onChange={handleInputChange}
                        onBlur={handleBlur('annualLeave')}
                        min="0"/>
                    <FormFeedback>{errors.annualLeave }</FormFeedback>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor="overTime" md={2}>Số ngày đã làm thêm</Label>
                <Col md={10}>
                    <Input type="number" id="overTime" name="overTime"
                        placeholder="Số ngày đã làm thêm"
                        value={form.overTime}
                        valid={errors.overTime===''}
                        invalid={errors.overTime!=''}
                        onChange={handleInputChange}
                        onBlur={handleBlur('overTime')}
                        min="0"/>
                    <FormFeedback>{errors.overTime }</FormFeedback>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col md={{size: 10, offset: 2}}>
                    <Button type="submit" color="primary" disabled={!errors.isAvailable}>
                        Send Feedback
                    </Button>
                </Col>
            </FormGroup>
        </Form>
        </ModalBody>
      </Modal>

       <div className="row">
         { prop.staffs.map((data) =>(
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

export default withRouter(StaffList);
