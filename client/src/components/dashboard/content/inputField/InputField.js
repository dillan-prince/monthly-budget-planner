import React, { Component } from 'react';

import './InputField.css';

class InputField extends Component {
  render() {
    const {
      label,
      input,
      id,
      type,
      className,
      onKeyPress,
      disabled,
      maxLength,
      meta: { error, touched, active }
    } = this.props;

    return (
      <div className={`input-field ${className || ''}`}>
        <input
          {...input}
          id={id}
          type={type}
          className={`${className} validate ${
            touched && !active ? (error ? 'invalid' : 'valid') : ''
          }`}
          onKeyPress={onKeyPress}
          disabled={disabled}
          maxLength={maxLength}
        />
        <label
          htmlFor={input.name}
          data-error={error}
          className={`${input.value || active || (touched && error) ? 'active' : ''}`}
          style={{ color: touched && error && !active ? '#F44336' : '' }}
        >
          {label}
        </label>
      </div>
    );
  }
}

export default InputField;
