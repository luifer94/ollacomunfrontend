import React from 'react';
import {stylesDefault} from './styles'
import {Map, Marker} from 'google-maps-react';

export default class HomePage extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={16}
        style={stylesDefault.container}
        initialCenter={{lat: -17.783259, lng: -63.182214}}
      >
        <Marker position={{lat: 17.782309, lng: -63.185393}}/>
      </Map>
    );
  }
}
