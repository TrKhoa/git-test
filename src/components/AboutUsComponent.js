import React from 'react';
import { Card, CardImg,CardTitle,CardSubtitle,CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderMember({member, onClick}){
      return (
        <Card>
          <CardImg width="100%" src={member.image} alt={member.name} />
          <CardTitle>{member.name}</CardTitle>
          <CardSubtitle>{member.designation}</CardSubtitle>
          <CardText>{member.description}</CardText>
        </Card>
      );
    }

    const About = (props) => {

            const listMember = props.members.map((members) => {
              return(
                <div key={members.id} className="col-12 col-md-4 my-2">
                  <RenderMember member={members}/>
                </div>
              )
            });

            return (
                <div className="container">
                    <div className="row text-left">
                        {listMember}
                    </div>
                </div>
            );

    }

export default About;
