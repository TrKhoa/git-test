import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        leaders: LEADERS,
        promotions: PROMOTIONS,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    const DishWithId=({match}) =>
    <DishDetail
        dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId))[0]}
        comments={this.state.comments.filter((comments) => comments.dishId === parseInt(match.params.dishId))}
      />

    const HomePage = () => {
        return(
            <Home
              dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
              promotion={this.state.promotions.filter((promotion)=>promotion.featured)[0]}
              leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
             />
        );
      }
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/menu/:dishId' component={DishWithId} />
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
          <Route exact path='/contactus' component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
