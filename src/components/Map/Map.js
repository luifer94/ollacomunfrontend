import React, { useState, useEffect } from "react";
import { Map, Marker } from "pigeon-maps";

import MarkerInfo from "../MarkerInfo/MarkerInfo";
import { MAP_CENTER, MAP_ZOOM, MAP_HEIGHT } from "./constants";
import { stylesDefault } from "./styles";

import { getPlaces } from "../../api/places";

const CustomMap = () => {
  const [places, setPlaces] = useState([]);
  const [markerPressed, setMarkerPressed] = useState(null);

  const fetchPlaces = async () => {
    try {
      const placesApi = await getPlaces();
      setPlaces(placesApi);
    } catch (error) {
      console.log("error is: " + error);
    }
  };
  useEffect(() => {
    fetchPlaces();
  }, []);

  const onMarkerPressed = ({ event, anchor, payload }) => {
    setMarkerPressed(payload);
  };

  const onCloseMarkerPressed = () => {
    setMarkerPressed(null);
  };
  
  return (
    <div style={stylesDefault.container}>
      <Map center={MAP_CENTER} zoom={MAP_ZOOM} height={MAP_HEIGHT}>
        {places.map((place) => {
          return (
            <Marker
            width={60}
            key={place.id}
            anchor={[
              parseFloat(place.latitude),
              parseFloat(place.longitude),
            ]}
            payload={place}
            onClick={onMarkerPressed}
          />
          );
        })}
      </Map>

      {markerPressed ? (
        <MarkerInfo place={markerPressed} closePopup={onCloseMarkerPressed} />
      ) : null}
    </div>
  );
};

export default CustomMap;
