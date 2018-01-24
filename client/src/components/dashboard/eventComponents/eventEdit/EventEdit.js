import React, { Component } from 'react';
import { connect } from 'react-redux';

import './EventEdit.css';
import * as actions from '../../../../actions';

class EventEdit extends Component {
  state = { readyForReview: false };

  render() {
    return (
      <div className="eventEdit">
        <h4 className="title" id="title">
          Event Details
        </h4>

        <input
          id="nameInput"
          type="text"
          className="nameValue input"
          placeholder="Name"
          maxLength="30"
          disabled={this.state.readyForReview}
        />

        <input
          id="valueInput"
          type="number"
          className="input"
          placeholder="Value"
          min="0"
          disabled={this.state.readyForReview}
        />

        <input
          id="dateInput"
          type="number"
          className="input"
          placeholder="Date"
          min="1"
          max="31"
          disabled={this.state.readyForReview}
        />

        <div className="recurringLabel">Recurring?</div>
        <div className="switch">
          <label>
            No
            <input id="recurringCheckbox" type="checkbox" disabled={this.state.readyForReview} />
            <span className="lever" />
            Yes
          </label>
        </div>

        <div className="eventTypeLabel">Type</div>
        <div>
          <div>
            <input
              type="radio"
              id="eventType-income"
              name="eventType"
              disabled={this.state.readyForReview}
            />
            <label htmlFor="eventType-income">Income</label>
          </div>
          <div>
            <input
              type="radio"
              id="eventType-bill"
              name="eventType"
              disabled={this.state.readyForReview}
            />
            <label htmlFor="eventType-bill">Bill</label>
          </div>
        </div>

        {this.renderButtons()}
      </div>
    );
  }

  renderButtons() {
    if (this.state.readyForReview) {
      return [
        <button
          key="backButton"
          id="backButton"
          className="btn left red darken-2"
          onClick={() => this.setState({ readyForReview: false })}
        >
          <i className="material-icons">navigate_before</i>
        </button>,
        <button
          key="confirmButton"
          id="confirmButton"
          className="btn right green darken-2"
          onClick={() => this.submit()}
        >
          <i className="material-icons">check</i>
        </button>
      ];
    } else {
      return [
        <button
          key="closeButton"
          id="closeButton"
          className="btn left red darken-2"
          onClick={() => this.props.cancel()}
        >
          <i className="material-icons">close</i>
        </button>,
        <button
          key="continueButton"
          id="continueButton"
          className="btn right green darken-2"
          onClick={() => this.setState({ readyForReview: true })}
        >
          <i className="material-icons">navigate_next</i>
        </button>
      ];
    }
  }

  submit() {
    this.props.showSpinner(true);

    setTimeout(() => {
      console.log('submitted');
      this.props.showSpinner(false);
    }, 1500);
  }
}

export default connect(null, actions)(EventEdit);
