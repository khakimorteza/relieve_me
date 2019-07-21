import React from "react";


import { geolocated, geoPropTypes } from "react-geolocated";


class CurrentLocation extends React.Component {
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
    console.log(this.state);

    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <button onClick={this.handleLocation}>get loati</button>
    ) : (
      //   <table>
      //     <tbody>
      //       <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
      //       <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>

      //     </tbody>
      //   </table>
      <div>Getting the location data&hellip; </div>
    );
  }
}

// Using Object.assign
CurrentLocation.propTypes = Object.assign(
  {},
  CurrentLocation.propTypes,
  geoPropTypes
);
// Using ES6 object spread syntax
CurrentLocation.propTypes = { ...CurrentLocation.propTypes, ...geoPropTypes };

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(CurrentLocation);
