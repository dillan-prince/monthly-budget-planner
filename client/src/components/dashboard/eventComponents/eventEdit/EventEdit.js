import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import './EventEdit.css';
import InputField from '../inputField/InputField';
import * as actions from '../../../../actions';

class EventEdit extends Component {
  state = { readyForReview: false };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(
          this.state.readyForReview
            ? this.submit.bind(this)
            : () => this.setState({ readyForReview: true })
        )}
        className="eventEdit"
      >
        <h4 className="title" id="title">
          Event Details
        </h4>

        <Field
          label="Name"
          id="nameInput"
          name="name"
          type="text"
          className="nameValue"
          maxLength="30"
          onKeyPress={this.handleKeyPress}
          disabled={this.state.readyForReview}
          component={InputField}
        />

        <Field
          label="Value"
          id="valueInput"
          name="value"
          type="number"
          onKeyPress={this.handleKeyPress}
          disabled={this.state.readyForReview}
          component={InputField}
        />

        <Field
          label="Date"
          id="dateInput"
          name="date"
          type="number"
          onKeyPress={this.handleKeyPress}
          disabled={this.state.readyForReview}
          component={InputField}
        />

        <div className="attributeLabel">Recurring?</div>
        <div className="switch">
          <label>
            No
            <Field
              id="recurringCheckbox"
              name="recurring"
              type="checkbox"
              disabled={this.state.readyForReview}
              component="input"
            />
            <span className="lever" />
            Yes
          </label>
        </div>

        <div className="attributeLabel">Type</div>
        <div>
          <div>
            <Field
              id="eventType-bill"
              name="type"
              type="radio"
              value="bill"
              disabled={this.state.readyForReview}
              component="input"
            />
            <label htmlFor="eventType-bill">Bill</label>
          </div>
          <div>
            <Field
              id="eventType-income"
              name="type"
              type="radio"
              value="income"
              disabled={this.state.readyForReview}
              component="input"
            />
            <label htmlFor="eventType-income">Income</label>
          </div>
        </div>

        {this.renderButtons()}
      </form>
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
          type="submit"
          className="btn right green darken-2"
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
          type="submit"
          className="btn right green darken-2"
        >
          <i className="material-icons">navigate_next</i>
        </button>
      ];
    }
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  submit(values) {
    this.props.insertEvent(values);
  }
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Name is required.';
  }

  if (!values.value) {
    errors.value = 'Value is required.';
  } else if (values.value <= 0) {
    errors.value = 'Value must be positive.';
  } else if ((values.value * 100) % 1 !== 0) {
    errors.value = 'Value must contain 2 decimals.';
  }

  if (!values.date) {
    errors.date = 'Date is required.';
  } else if (values.date < 1 || values.date > 31) {
    errors.date = 'Date must be between 1 and 31.';
  } else if (values.date % 1 !== 0) {
    errors.date = 'Date must be a whole number.';
  }

  return errors;
}

export default connect(null, actions)(
  reduxForm({
    validate,
    form: 'eventForm',
    destroyOnUnmount: true,
    initialValues: {
      name: 'Car Payment',
      value: 502.51,
      date: 18,
      recurring: true,
      type: 'bill'
    }
  })(EventEdit)
);
