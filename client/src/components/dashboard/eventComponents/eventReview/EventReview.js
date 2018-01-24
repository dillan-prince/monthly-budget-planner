import React, { Component } from 'react';

class EventReview extends Component {
  render() {
    return (
      <div className="eventReview">
        <h4>Event - Review</h4>
        <button className="btn" onClick={() => this.props.back()}>
          Back
        </button>
        <button className="btn" onClick={() => alert('Confirm')}>
          Confirm
        </button>
      </div>
    );
  }
}

export default EventReview;
