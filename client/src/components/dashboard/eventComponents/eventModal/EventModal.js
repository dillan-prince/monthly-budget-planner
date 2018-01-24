import React, { Component } from 'react';
import Modal from 'react-modal';

import './EventModal.css';
import EventEdit from '../eventEdit/EventEdit';
import EventReview from '../eventReview/EventReview';

class EventModal extends Component {
  state = { readyForReview: false };

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
          <div className="centered">{this.renderContent()}</div>
        </Modal>
      </div>
    );
  }

  renderContent() {
    return this.state.readyForReview ? (
      <EventReview back={() => this.setState({ readyForReview: false })} />
    ) : (
      <EventEdit cancel={() => this.props.cancel()} />
    );
  }
}

export default EventModal;
