import React, { Component } from 'react';
import Modal from 'react-modal';

import './ContentModal.css';

class ContentModal extends Component {
  render() {
    const customStyles = {
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, .5)'
      },
      content: {
        top: '37.5%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        minWidth: '350px',
        overflow: 'hidden'
      }
    };

    return (
      <div>
        <Modal isOpen={this.props.isOpen} ariaHideApp={false} style={customStyles}>
          <div className="centered">{this.props.content}</div>
        </Modal>
      </div>
    );
  }
}

export default ContentModal;
