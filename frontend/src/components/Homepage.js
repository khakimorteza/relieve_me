import React from "react";
import { Link } from "react-router-dom";
import { geolocated, geoPropTypes } from "react-geolocated";
import "../css/Homepage.css";
import loc_icon from "../assets/kisspng-map-computer-icons-clip-art-map-red-pin-png-5ab1ace8b19201.6464219015215935767273.png";

class Homepage extends React.Component {
  state = {
    lat: "",
    long: ""
  };
  handleLocation = () => {
    const { coords } = this.props;
    this.setState({
      lat: coords.latitude,
      long: coords.longitude
    });
  };
  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <>
        <div className="container">
          <div className="home_title">
            <h1>Welcome to Relieve Me!</h1>
          </div>
          <h6 className="subtitle">
            An app for Taxi and For-Hire-Vehicle drivers who are on the go and
            need to "go"!
          </h6>
          <div className="locationIcon">
            <Link to="/">
              <img
                src={loc_icon}
                onClick={this.handleLocation}
                alt=""
                width="50px"
              />
            </Link>
          </div>
          <div className="curr_loc">
            <p>Find Your Current Location</p>
          </div>
          <br />
          <br />
          <div className="browseByBoro"> OR Browse By Borough</div>
          <div className="boro_links">
            <Link to="/byborough/bronx">Bronx</Link>
            <Link to="/byborough/brooklyn">Brooklyn</Link>
            <Link to="/byborough/manhattan">Manhattan</Link>
            <Link to="/byborough/queens">Queens</Link>
          </div>
        </div>
      </>
    ) : (
            <div>Getting the location data&hellip; </div>
          );
  }
} // Using Object.assign
Homepage.propTypes = Object.assign({}, Homepage.propTypes, geoPropTypes);
// Using ES6 object spread syntax
Homepage.propTypes = { ...Homepage.propTypes, ...geoPropTypes };

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Homepage);
