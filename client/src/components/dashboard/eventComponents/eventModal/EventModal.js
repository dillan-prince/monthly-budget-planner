import React, { Component } from 'react';
import Modal from 'react-modal';

import './EventModal.css';
import EventEdit from '../eventEdit/EventEdit';

class EventModal extends Component {
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
        <Modal isOpen={this.props.showEventModal} ariaHideApp={false} style={customStyles}>
          <div className="centered">
            <EventEdit cancel={() => this.props.cancel()} />
          </div>
        </Modal>
      </div>
    );
  }
}

export default EventModal;
