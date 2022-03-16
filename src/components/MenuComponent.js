import React from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderMenu({dish, onClick}){
      return (
        <Card>
          <Link to={`/menu/${dish.id}`}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Link>
        </Card>
      );
    }

    const Menu = (props) => {

            const menu = props.dishes.map((dish) => {
              return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                  <RenderMenu dish={dish} onClick={props.onClick} />
                </div>
              )
            });

            return (
                <div className="container">
                    <div className="row">
                        {menu}
                    </div>
                </div>
            );

    }

export default Menu;
