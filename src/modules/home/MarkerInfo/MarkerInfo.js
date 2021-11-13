import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button'

import { stylesDefault } from "./styles";

class MarkerInfo extends React.Component {
  getMapsLink(lat, long) {
    return `https://www.google.com/maps/search/?api=1&query=${lat},${long}`;
  }

  getDrivePhotoLink(photoId) {
    return `https://drive.google.com/thumbnail?id=${photoId}`;
  } 

  render() {
    function NewlineText(props) {
      const text = props.text.toString()+ "";
      const newText = text.split("\r\n").map((str,index) => <p key={index.toString()}>{str}</p>);
      return newText;
    }

    return (
      <div style={stylesDefault.popup}>
        <Modal.Dialog>
          <Modal.Header closeButton onClick={this.props.closePopup}>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {<NewlineText text={this.props.description} />}
          </Modal.Body>
          <Modal.Footer>
            <Button href={this.getMapsLink(this.props.latitude, this.props.longitude)} variant="success">Ir a google maps</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default MarkerInfo;
