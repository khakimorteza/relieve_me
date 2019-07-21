import React from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Stands from './Stands';
import CurrentLocation from './CurrentLocation';

import standsByBoro from '../css/standsByBoro.css'

class StandsByBorough extends React.Component {
  state = {
    manhattan: [],
    queens: [],
    brooklyn: [],
    bronx: [],
    lat: '',
    long: ''
  }

  componentDidMount () {
    this.fetchAllData('manhattan');
    this.fetchAllData('queens');
    this.fetchAllData('brooklyn');
    this.fetchAllData('bronx');
  }

  fetchAllData = async (route) => {
    await axios.get('/' + route)
    .then(res => {
      this.setState({
        [route]: res.data.data
      })
    })
  }

  render() {
    const { manhattan, queens, brooklyn, bronx } = this.state;
    return (
      <div className='byborough-container'>
        <Switch>
          <Route path='/byborough/manhattan' render={() => <Stands lat={this.props.lat} lng={this.props.lng} borough={manhattan}/>}/>
          <Route path='/byborough/queens' render={() => <Stands lat={this.props.lat} lng={this.props.lng} borough={queens}/>}/>
          <Route path='/byborough/brooklyn' render={() =><Stands lat={this.props.lat} lng={this.props.lng} borough={brooklyn}/>}/>
          <Route path='/byborough/bronx' render={() => <Stands lat={this.props.lat} lng={this.props.lng} borough={bronx}/>}/>
        </Switch>
      </div>
    )
  }
}

export default StandsByBorough;
