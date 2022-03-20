import React,{useState} from 'react';
import { CardGroup, Card, CardImg, CardText, CardBody,CardTitle,
   Breadcrumb, BreadcrumbItem,Button,Modal,ModalHeader,ModalBody,Row,Col,Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';

function RenderDish({dish}) {
    if (dish != null)
        return(
          <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
            <Card>
                <CardImg top src={"../"+dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
        );
    else
        return(
            <div></div>
        );
}

  function RenderComments({comments, postComment, dishId}) {
    if (comments != null)

        return(
              <Card>
                  <CardBody className="text-left">
                    <CardTitle>Comments</CardTitle>
                    <Stagger in>
                    {comments.map(comment =>(
                      <CardText>
                      <Fade in>
                        {comment.comment}<br />
                        {"- "+comment.author + ", "+new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                      </Fade></CardText>
                    ))}
                    </Stagger>
                    <CommentForm dishId={dishId} postComment={postComment} />
                  </CardBody>
              </Card>
        );
    else
        return(
            <div></div>
        );
  }

    const CommentForm=({dishId,postComment})=>{
      const [modalState,setModalState] = useState(false);

      const required = value => value && value.length;
      const minLength = min => value => (value && value.length >= min) || !value;
      const maxLength = max => value => (value && value.length <= max) || !value;
      const minValue = min => value => (value && value >= min) || !value;
      const maxValue = max => value => (value && value <= max) || !value;

      const handleSubmit = (values) =>{
        postComment(dishId, values.rating, values.author, values.comment);
      }

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
              minValue: 'Giá trị phải lớn hơn hoặc bằng 0',
              maxValue: 'Giá trị bé hơn hoặc bằng 5'
          }}
         />)}

      return(
        <>
          <Button onClick={()=>setModalState(!modalState)}>Add comments</Button>

          <Modal isOpen={modalState} size="lg" toggle={() => setModalState(!modalState)}>
            <ModalHeader>
              Comment
            </ModalHeader>

            <ModalBody>
              <LocalForm onSubmit={(values) => handleSubmit(values)}>

                <Row className="form-group">
                  <Label htmlFor="rating" md={2}>Rating</Label>
                  <Col md={10}>
                    <Control type="number" model=".rating" id="rating" name="rating"
                        placeholder="Rating"
                        className="form-control"
                        validators={{
                          required,
                          minValue: minValue(0),
                          maxValue : maxValue(5) }}
                     />
                     <RenderError model=".rating" />
                  </Col>
                </Row>

                <Row className="form-group">
                  <Label htmlFor="author" md={2}>Name:</Label>
                  <Col md={10}>
                    <Control.text model=".author" id="author" name="author"
                        placeholder="Name"
                        className="form-control"
                        validators={{
                          required,
                          minLength : minLength(5),
                          maxLength: maxLength(30) }}
                     />
                     <RenderError model=".author" />
                  </Col>
                </Row>

                <Row className="form-group">
                  <Label htmlFor="comment" md={2}>Comment:</Label>
                  <Col md={10}>
                    <Control.textarea model=".comment" id="comment" name="comment"
                        className="form-control"
                        validators={{ required }}
                     />
                     <RenderError model=".comment" />
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
          </Modal>
        </>
      )
    }

    const DishDetail = (props) => {
      if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.dish != null)
      return (
        <div className="container">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>
        <div className="row">
            <div className="col-12 col-md-5 m-1">
              <RenderDish dish={props.dish} comments={props.comments}/>
            </div>
            <div className="col-12 col-md-6 m-1">
              <RenderComments comments={props.comments}
                postComment={props.postComment}
                dishId={props.dish.id}
              />
            </div>

        </div>
        </div>
    );
    }

export default DishDetail;
