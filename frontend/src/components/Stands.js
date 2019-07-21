import React from "react";
// import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
// import MarkerDisplay from './Maps/MarkerDisplay';

import MapContainer from './Maps/MapContainer';

import { withRouter, Link } from "react-router-dom";

import standsByBoro from "../css/standsByBoro.css";

const Stands = props => {
  const goBack = () => {
    props.history.goBack();
  };

  const standsList = props.borough.map(stand => {
    return (
      <>
        <ul key={stand.id}>
          <li>
            <span>Car-type: {stand.car_type}</span>
          </li>
          <li>
            <span>Street: {stand.street}</span>
          </li>
          <li>
            <span>Cross-streets: {stand.cross_streets}</span>
          </li>
        </ul>

      </>
    );
  });
  return (
    <>
      <div className="stands_container">
        <div className="stands-list">{standsList}</div>
        <div className="the_map">
          <MapContainer lat={props.lat} lng={props.lng} locations={props.borough} />
        </div>
      </div>
      <Link className="link-home" to="#" onClick={goBack}>
        Back
      </Link>
    </>
  );
};

export default withRouter(Stands);
