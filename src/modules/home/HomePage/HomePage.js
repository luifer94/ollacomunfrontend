import React from 'react';
import {stylesDefault} from './styles'
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

export default class HomePage extends React.Component {
  state = {
    center: {
      lat: -17.783259,
      lng: -63.182214,
    },
    position: {
      lat: -17.782309,
      lng: -63.185393,
    },
    zoom: 15,
  };

  render() {
    const center = [this.state.center.lat, this.state.center.lng];
    const position = [this.state.position.lat, this.state.position.lng];
    return (
      <div style={stylesDefault.container}>
        <Map
          center={center}
          zoom={this.state.zoom}
          height={500}
        >
          <Marker anchor={position} payload={1} onClick={({event, anchor, payload}) => {
          }}/>
        </Map>
      </div>
    );
  }
}
