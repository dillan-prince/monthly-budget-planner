import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import './EventEdit.css';
import InputField from '../eventFields/nameInput/nameInput';
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
          disabled={this.state.readyForReview}
          component={InputField}
        />

        <Field
          label="Value"
          id="valueInput"
          name="value"
          type="number"
          min="0"
          disabled={this.state.readyForReview}
          component={InputField}
        />

        <Field
          label="Date"
          id="dateInput"
          name="date"
          type="number"
          min="1"
          max="31"
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

  submit(values, errors) {
    console.log('submit:', values);

    this.props.showSpinner(true);

    setTimeout(() => {
      this.props.showSpinner(false);
      this.props.cancel();
    }, 1500);
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
  }

  if (!values.date) {
    errors.date = 'Date is required.';
  } else if (values.date < 1 || values.date > 31) {
    errors.date = 'Date must be between 1 and 31.';
  } else if (values.date % 1 != 0) {
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
      recurring: false,
      type: 'bill'
    }
  })(EventEdit)
);
