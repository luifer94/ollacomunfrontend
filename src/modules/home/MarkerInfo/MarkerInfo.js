import React from 'react';
import { stylesDefault } from './styles'

import Modal from "react-bootstrap/Modal";

class MarkerInfo extends React.Component {
    render() {
        return (
            <div style={stylesDefault.popup}>
                <Modal.Dialog>
                    <Modal.Header closeButton onClick={this.props.closePopup}>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>{this.props.description}</p>
                    </Modal.Body>

                </Modal.Dialog>
            </div>
        );
    }
}

export default MarkerInfo;