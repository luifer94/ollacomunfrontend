import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

import { stylesDefault } from "./styles";

const NewlineText = (props) => {
  const text = props.text.toString() + "";
  const newText = text
    .split("\r\n")
    .map((str, index) => <p key={index.toString()}>{str}</p>);
  return newText;
};

const MarkerInfo = ({ place, closePopup }) => {
  const getMapsLink = (lat, long) => {
    return `https://www.google.com/maps/search/?api=1&query=${lat},${long}`;
  };

  const getDrivePhotoLink = (photoId) => {
    return `https://drive.google.com/uc?export=view&id=${photoId}`;
  };

  return (
    <div style={stylesDefault.popup}>
      <Modal.Dialog>
        <Modal.Header closeButton onClick={closePopup}>
          <Modal.Title>{place.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {<NewlineText text={place.description} />}
          {place.images && (
            <Carousel>
              {place.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={getDrivePhotoLink(image)}
                    alt="First slide"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            href={getMapsLink(place.latitude, place.longitude)}
            variant="success"
          >
            Ir a google maps
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default MarkerInfo;
