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
import OurFeatures from './OurFeatures.js';
import FadeIn from 'react-fade-in';


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
        <div>
          <FadeIn>
            <Home 
              trip0={this.state.trips.filter((trip) => trip.featured)[0]}
              trip1={this.state.trips.filter((trip) => trip.featured)[1]}
              trip2={this.state.trips.filter((trip) => trip.featured)[2]}
            />
            <OurFeatures />
          </FadeIn>
        </div>
          
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