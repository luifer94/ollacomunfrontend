import React from 'react';
import { stylesDefault } from './styles'

import Modal from "react-bootstrap/Modal";

class RegisterOlla extends React.Component {
    render() {
        return (
            <div style={stylesDefault.popup}>
                <Modal.Dialog>
                    <Modal.Header closeButton onClick={this.props.closePopup}>
                        <Modal.Title>{this.props.text}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <h4 style={stylesDefault.test}>
                            Envia un mensaje de whatsapp al número: +591 77777 con los siguientes puntos:
                    </h4>
                        <ol>
                            <li>
                                Fotografías de carnet de identidad: Anverso y Reverso. (OBLIGATORIO)
                        </li>
                            <li>
                                Nombre de la persona o organización. (OBLIGATORIO)
                        </li>
                            <li>
                                Coordenadas de la olla común (OBLIGATORIO)
                        </li>
                            <li>
                                Descripción extra. (OPCIONAL)
                        </li>
                        </ol>
                    </Modal.Body>

                </Modal.Dialog>
            </div>
        );
    }
}

export default RegisterOlla;