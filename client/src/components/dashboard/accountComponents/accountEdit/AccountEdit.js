import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import './AccountEdit.css';
import InputField from '../../content/inputField/InputField';
import * as actions from '../../../../actions';

class AccountEdit extends Component {
  state = { readyForReview: false };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(
          this.state.readyForReview
            ? this.submit.bind(this)
            : () => this.setState({ readyForReview: true })
        )}
        className="accountEdit"
      >
        <h4 className="title" id="title">
          {`${this.state.readyForReview ? 'Review Account' : 'Edit Account'}`}
        </h4>

        <Field
          label="Account Name"
          id="accountNameInput"
          name="name"
          type="text"
          className="nameInput"
          maxLength="25"
          onKeyPress={this.handleKeyPress}
          disabled={this.state.readyForReview}
          component={InputField}
        />

        <Field
          label="Initial Value"
          id="accountInitialValueInput"
          name="initialValue"
          type="number"
          className="initialValueInput"
          onKeyPress={this.handleKeyPress}
          disabled={this.state.readyForReview}
          component={InputField}
        />

        <div className="defaultCheckbox">
          <Field
            id="defaultCheckbox"
            name="isDefault"
            type="checkbox"
            disabled={this.state.readyForReview}
            component="input"
          />
          <label htmlFor="defaultCheckbox">Make this my default account</label>
        </div>

        <div className="buttons">{this.renderButtons()}</div>
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
    await this.props.insertAccount(values);
    this.props.cancel();
  }
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Name is required.';
  }

  if (!values.initialValue) {
    errors.initialValue = 'Initial Value is required.';
  } else if ((values.initialValue * 100) % 1 !== 0) {
    errors.initialValue = 'Inital Value must contain 2 decimals.';
  }

  return errors;
}

export default connect(null, actions)(
  reduxForm({
    validate,
    form: 'accountForm',
    destroyOnUnmount: true,
    initialValues: {
      isDefault: false
    }
  })(AccountEdit)
);
