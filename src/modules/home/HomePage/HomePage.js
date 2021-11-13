import React from "react";
import axios from "axios";
import { Map, Marker } from "pigeon-maps"

import Popup from "../RegisterOlla/RegisterOlla";
import MarkerInfo from "../MarkerInfo/MarkerInfo";
import { MAP_CENTER, MAP_ZOOM, MAP_HEIGHT, POPUP_MESSAGE } from "./constants";
import { stylesDefault } from "./styles";

export default class HomePage extends React.Component {
  state = {
    places: [],
    markerPressed: null
  };

  componentDidMount() {
    axios
      .get(`https://${process.env.REACT_APP_API_URL}/`)
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
    return (
      <div style={stylesDefault.container}>
        <Map  center={MAP_CENTER} zoom={MAP_ZOOM} height={MAP_HEIGHT}>
          {this.state.places.map(place => {
            return (
              <Marker
                width={60}
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
          <Popup text={POPUP_MESSAGE} closePopup={this.props.togglePopup} />
        ) : null}

        {this.state.markerPressed ? (
          <MarkerInfo
            title={this.state.markerPressed.name}
            description={this.state.markerPressed.description}
            latitude={this.state.markerPressed.latitude}
            longitude={this.state.markerPressed.longitude}
            closePopup={this.onCloseMarkerPressed}
          />
        ) : null}
      </div>
    );
  }
}
