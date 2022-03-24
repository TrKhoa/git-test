import React,{ useState } from 'react';
import { FadeTransform } from 'react-animation-components';
import { Card,CardTitle,CardImg,Row, Col,InputGroup,Input,Label,Button,
  Modal,ModalHeader,ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

import 'bootstrap/dist/css/bootstrap.css';

//Tạo Render
const RenderStaff = ({data, isLoading, errMess, search}) =>{
  //Kiểm tra điều kiện và trả kết quả
  if (isLoading) //Nếu không có data
    return <Loading />
  else if (errMess) //Nếu có lỗi
    return <h4 className="container">{errMess}</h4>

  //Render khi nhận data
  return (
    <React.Fragment>
    {/*Xử lí phần search*/}
    { data.filter((val) => {
      if(search==="" || val==undefined){
        return val
      } else if (val.name!==undefined && val.name.toLowerCase().includes(search.toLowerCase())){
        return val
      }
    }).map((data) =>(
      <div id="item" className="col-6 col-lg-2 col-md-4">
        <FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)' }}> {/*Hiệu ứng*/}
          <Link to={`/nhan-vien/${data.id}`}>
            <Card key={data.id} >
              <CardImg src={"../"+data.image}/>
              <CardTitle >{data.name}</CardTitle>
            </Card>
          </Link>
        </FadeTransform>
      </div>
    ))}
    </React.Fragment>
  );

}

//Điều kiện xác minh
const required = value => value && value.length;
const minLength = min => value => (value && value.length >= min) || !value;
const maxLength = max => value => (value && value.length <= max) || !value;
const minValue = min => value => (value && value >= min) || !value;

//Render phần báo lỗi
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

//Render
export default function StaffList(prop){

  //Khai báo lưu trữ cho search
  const [search,setSearch] = useState("");
  const [modalStatus,setModalStatus] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setSearch(e.target.search.value);
  }

  const toggleModal = () => {
    setModalStatus(!modalStatus);
  }

  return (

    <div>
      <div className="col-12 bg-primary pb-2">
        <form onSubmit={handleSubmit}>
          <InputGroup className="col-md-3">
            <Input name="search" />
            <Button type="submit" value="Submit">Tìm</Button>
          </InputGroup>
        </form>
      </div>

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
