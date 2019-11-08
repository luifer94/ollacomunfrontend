import React from "react";
import axios from "axios";
import { stylesDefault } from "./styles";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";

import Popup from "../RegisterOlla/RegisterOlla";
import MarkerInfo from "../MarkerInfo/MarkerInfo";
const registerMessage = "¿Quieres registrar una olla común?";

export default class HomePage extends React.Component {
  state = {
    center: {
      lat: -17.783259,
      lng: -63.182214
    },
    zoom: 14,
    height: 0,
    places: [],
    markerPressed: null
  };

  componentDidMount() {
    console.log(process.env.API_URL);
    axios
      .get(`http://api.mauriballes.me/`)
      .then(res => {
        const places = res.data;
        this.setState({ places });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onMarkerPressed = ({ event, anchor, payload }) => {
    this.setState({
      markerPressed: payload
    });
  };
  onCloseMarkerPressed = () => {
    this.setState({
      markerPressed: null
    });
  };
  render() {
    const center = [this.state.center.lat, this.state.center.lng];
    return (
      <div style={stylesDefault.container}>
        <Map center={center} zoom={this.state.zoom} height={800}>
          {this.state.places.map(place => {
            return (
              <Marker
                key={place.id}
                anchor={[
                  parseFloat(place.latitude),
                  parseFloat(place.longitude)
                ]}
                payload={place}
                onClick={this.onMarkerPressed}
              />
            );
          })}
        </Map>

        {this.props.showRegisterOlla ? (
          <Popup text={registerMessage} closePopup={this.props.togglePopup} />
        ) : null}

        {this.state.markerPressed ? (
          <MarkerInfo
            title={this.state.markerPressed.name}
            description={this.state.markerPressed.description}
            closePopup={this.onCloseMarkerPressed}
          />
        ) : null}
      </div>
    );
  }
}
