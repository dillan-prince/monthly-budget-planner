import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';

import './EventEdit.css';
import InputField from '../../content/inputField/InputField';
import RecurringDropdown from '../recurringDropdown/RecurringDropdown';
import * as actions from '../../../../actions';

class EventEdit extends Component {
  state = { readyForReview: false };

  render() {
    console.log(this.props.recurring);

    return (
      <form
        onSubmit={this.props.handleSubmit(
          this.state.readyForReview
            ? this.submit.bind(this)
            : () => this.setState({ readyForReview: true })
        )}
        className="eventEdit"
      >
        <div className="title">
          <h4 id="title">{`${this.state.readyForReview ? 'Review Event' : 'Edit Event'}`}</h4>
        </div>

        <Field
          label="Event Name"
          id="eventNameInput"
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
          className="valueInput"
          onKeyPress={this.handleKeyPress}
          disabled={this.state.readyForReview}
          component={InputField}
        />

        <Field
          label="Date"
          id="dateInput"
          name="date"
          type="number"
          className="dateInput"
          onKeyPress={this.handleKeyPress}
          disabled={this.state.readyForReview}
          component={InputField}
        />

        <div className="attributeLabel typeLabel">Type</div>
        <div className="typeRadioButtons">
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

        <div className="attributeLabel recurringLabel">Recurring?</div>
        <div className="switch recurringSwitch">
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

        <div
          className="attributeLabel howOftenLabel"
          style={{ display: this.props.recurring ? 'block' : 'none' }}
        >
          How often?
        </div>
        <div
          className="recurringDropdown"
          style={{ display: this.props.recurring ? 'block' : 'none' }}
        >
          <RecurringDropdown />
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

  async submit(values) {
    await this.props.insertEvent(values, this.props.selectedAccount._id);
    this.props.cancel();
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

const selector = formValueSelector('eventForm');
function mapStateToProps(state) {
  const { selectedAccount } = state;

  return { selectedAccount, recurring: selector(state, 'recurring') };
}

export default connect(mapStateToProps, actions)(
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
