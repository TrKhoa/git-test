import React from 'react';
import { CardGroup,Card,CardBody,CardTitle,CardSubtitle,CardText,CardImg} from 'reactstrap';
import { Loading } from './LoadingComponent';

function RenderCard({data, isLoading, errMess}) {

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
    else
        return(
          <CardGroup>
          <Card>
              <CardImg src={data.dish.image} alt={data.dish.name} />
              <CardBody>
              <CardTitle>{data.dish.name}</CardTitle>
              {data.dish.designation ? <CardSubtitle>{data.dish.designation}</CardSubtitle> : null }
              <CardText>{data.dish.description}</CardText>
              </CardBody>
          </Card>
          <Card>
              <CardImg src={data.promotion.image} alt={data.promotion.name} />
              <CardBody>
              <CardTitle>{data.promotion.name}</CardTitle>
              {data.promotion.designation ? <CardSubtitle>{data.promotion.designation}</CardSubtitle> : null }
              <CardText>{data.promotion.description}</CardText>
              </CardBody>
          </Card>
          <Card>
              <CardImg src={data.leader.image} alt={data.leader.name} />
              <CardBody>
              <CardTitle>{data.leader.name}</CardTitle>
              {data.leader.designation ? <CardSubtitle>{data.leader.designation}</CardSubtitle> : null }
              <CardText>{data.leader.description}</CardText>
              </CardBody>
          </Card>
          </CardGroup>
        );

}

export default function Home(props) {
    return(
      <div className="container">
      <div className="row">
        <h4>Home</h4>
        <CardGroup>
          <RenderCard data={props} isLoading={props.dishesLoading} errMess={props.dishesErrMess}  />
        </CardGroup>
      </div>
      </div>
    );
}
