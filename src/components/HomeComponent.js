import React from 'react';
import { CardGroup,Card,CardBody,CardTitle,CardSubtitle,CardText,CardImg} from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderCard({data, isLoading, errMess}) {
  console.log(isLoading)
      if (isLoading) {
       return(
           <Card><Loading /></Card>
       );
     }
     if(errMess){
       return(
         <Card tag="h3" className="mx-3">{errMess}</Card>
       );
     }
        return(
                <Card>
                  <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                    <CardImg src={data.image} alt={data.name} />
                    <CardBody>
                    <CardTitle>{data.name}</CardTitle>
                    {data.designation ? <CardSubtitle>{data.designation}</CardSubtitle> : null }
                    <CardText>{data.description}</CardText>
                    </CardBody>
                  </FadeTransform>
                </Card>

        );

}

export default function Home(props) {
    return(
      <div className="container">
      <div className="row">{console.log(props)}
        <h4>Home</h4>
        <CardGroup>
          <RenderCard data={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}  />
          <RenderCard data={props.promotion} isLoading={props.promosLoading} errMess={props.promosErrMess}  />
          <RenderCard data={props.leader} isLoading={props.leadersLoading} errMess={props.leadersErrMess}  />
        </CardGroup>
      </div>
      </div>
    );
}
