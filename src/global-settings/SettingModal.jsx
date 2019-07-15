import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import ColorPicker from './ColorPicker'
import ListType from './ListType'
export default class SettingModal extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <Button variant="outline-info" onClick={this.handleShow} >
          Settings
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            Site Settings
          </Modal.Header>
          <Modal.Body>
            <ColorPicker />
            <hr />
            <ListType />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
