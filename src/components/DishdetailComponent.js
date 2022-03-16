import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, CardGroup } from 'reactstrap';

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

    function RenderComments({dish}) {
        if (dish != null)
            return(
                  <Card>
                      <CardBody className="text-left">
                        <CardTitle>Comments</CardTitle>
                        {dish.comments.map(comment =>(
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
                    <div className="row">{console.log(props)}
                      <div  className="col-12 col-md-5 m-1">
                        <CardGroup>
                        <RenderDish dish={props.dish} />
                        <RenderComments dish={props.dish} />
                        </CardGroup>
                      </div>
                    </div>
            );
    }

export default DishDetail;
