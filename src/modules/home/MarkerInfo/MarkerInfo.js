import React from "react";
import { stylesDefault } from "./styles";

import Modal from "react-bootstrap/Modal";

class MarkerInfo extends React.Component {
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
        </Modal.Dialog>
      </div>
    );
  }
}

export default MarkerInfo;
