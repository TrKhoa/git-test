import React from 'react';
import { CardGroup,Card,CardBody,CardTitle,CardSubtitle,CardText,CardImg} from 'reactstrap';

function RenderCard({data}){
  return(
    <Card className="m-1">
      <CardImg src={data.image} />
      <CardTitle>{data.name}</CardTitle>
      {data.designation ? <CardSubtitle>{data.designation}</CardSubtitle> : null }
      <CardText>{data.description}</CardText>
    </Card>
  )
}

export default function Home(props) {
    return(
      <div className="container">
      <div className="row">
        <h4>Home</h4>
        <CardGroup>
          <RenderCard data={props.dish} />
          <RenderCard data={props.promotion} />
          <RenderCard data={props.leader} />
        </CardGroup>
      </div>
      </div>
    );
}
