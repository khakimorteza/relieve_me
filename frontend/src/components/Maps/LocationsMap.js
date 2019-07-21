import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import {withRouter} from 'react-router-dom'
import MarkerDisplay from "./MarkerDisplay";


const LocationsMap = withScriptjs(withGoogleMap((props) =>{
  //map through props and pass it down
  const { locations } = props
  
  if (!locations){return null}
  let markers = locations.map((location) => {
    return <MarkerDisplay lat={props.lat} lng={props.lng} location={{lat: location.lat, lng: location.long}} />
  })                  
  return (
      <GoogleMap
        defaultZoom={11}
        center={props.match.url === "/byborough/queens" ? {lat:  40.739145, lng: -73.857762} :
                props.match.url === "/byborough/bronx" ? {lat:  40.857038, lng: -73.869684} :
                props.match.url === "/byborough/brooklyn" ? {lat:  40.659368, lng: -73.941130} : 
                props.match.url === "/byborough/manhattan" ? {lat:  40.787101, lng: -73.964766} : {lat:  40.7329992, lng: -73.9539064} }
        >
        {markers}
      </GoogleMap>
    );
  }
))

export default withRouter(LocationsMap);