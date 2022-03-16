import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, CardGroup, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderDish({dish}) {
        if (dish != null)
            return(
                  <Card>
                      <CardImg top src={dish.image} alt={dish.name} />
                      <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                      </CardBody>
                  </Card>
            );
        else
            return(
                <div></div>
            );
    }

    function RenderComments({comments}) {
        if (comments != null)
            return(
                  <Card>
                      <CardBody className="text-left">
                        <CardTitle>Comments</CardTitle>
                        {comments.map(comment =>(
                          <CardText>
                            {comment.comment}<br />
                            {"- "+comment.author + ", "+new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                          </CardText>
                        ))}

                      </CardBody>
                  </Card>
            );
        else
            return(
                <div></div>
            );
    }

    const DishDetail = (props) => {

            return (
              <div className="container">
                <div className="row">
                  <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    <CardGroup>
                      <RenderDish dish={props.dish} />
                      <RenderComments comments={props.comments} />
                    </CardGroup>
                  </div>
                </div>
              </div>
            );
    }

export default DishDetail;
