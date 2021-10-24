import React, { Component } from 'react';
import Menu from './MenuComponent';
import TripDetail from './TripDetailComponent'
import About from './AboutComponent'
import { TRIPS } from '../shared/trips';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trips: TRIPS,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  render() {
    const HomePage = () => {
      return(
          <Home 
              trip={this.state.trips.filter((trip) => trip.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const TripWithId = ({match}) => {
      return(
          <TripDetail trip={this.state.trips.filter((trip) => trip.id === parseInt(match.params.tripId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.tripId === parseInt(match.params.tripId,10))} />
      );
    };

    const AboutPage = () => <About leaders={this.state.leaders}/>


    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <Menu trips={this.state.trips} />} />
          <Route path='/menu/:tripId' component={TripWithId} />
          <Route exact path='/contactus' component={Contact} />
          <Route exact path='/aboutus' component={AboutPage} />
          <Redirect to="/home" />
        </Switch>
        <Footer/>     
      </div>
    );
  }
}

export default Main;