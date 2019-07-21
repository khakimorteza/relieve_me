import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Homepage from './components/Homepage';
import { geolocated, geoPropTypes } from "react-geolocated";
import StandsByBorough from './components/StandsByBorough';
import CurrentLocation from './components/CurrentLocation';


class App extends Component {
  state = {
    lat: "",
    long: ""
  };

  componentWillReceiveProps(props){
    const { coords } = props;
    if(!coords) return null;
    this.setState({
      lat: coords.latitude,
      long: coords.longitude
    });
  }

  // handleLocation = () => {
  //   const { coords } = this.props;
  //   if(!coords) return null;
  //   this.setState({
  //     lat: coords.latitude,
  //     long: coords.longitude
  //   });
  // };

  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <div className="App">
        
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/byborough' render={(props) => <StandsByBorough {...props} lat={this.state.lat} lng={this.state.long} />}/>
          <Route path='/currentlocation' component={CurrentLocation}/>
        </Switch>
      </div>
    ) : (
      <div>Getting the location data&hellip; </div> 
    );
  }
}

App.propTypes = Object.assign({}, App.propTypes, geoPropTypes);
// Using ES6 object spread syntax
App.propTypes = { ...App.propTypes, ...geoPropTypes };

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(App);
