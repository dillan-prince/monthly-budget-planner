import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import * as actions from '../../../actions';

class AccountDropdown extends Component {
  state = { selectedAccount: null };

  componentWillReceiveProps(newProps) {
    if (newProps.accounts && newProps.accounts.length) {
      if (this.props.accounts) {
        if (newProps.accounts.length > this.props.accounts.length) {
          const newAccount = newProps.accounts.find((n) => {
            return this.props.accounts.every((o) => o._id !== n._id);
          });

          this.setState({ selectedAccount: newAccount._id }, this.emitChangeEvent);
        }
      } else {
        const defaultAccount = newProps.accounts.find((account) => account.isDefault);
        this.setState({ selectedAccount: defaultAccount._id }, this.emitChangeEvent);
      }
    }
  }

  render() {
    if (this.props.accounts && this.props.accounts.length) {
      return (
        <SelectField
          value={this.state.selectedAccount}
          onChange={this.handleChange.bind(this)}
          disabled={this.props.accounts.length === 1}
          style={{ maxWidth: '220px' }}
        >
          {this.renderAccountDropdownOptions()}
        </SelectField>
      );
    } else {
      return null;
    }
  }

  renderAccountDropdownOptions() {
    return this.props.accounts.map((account) => {
      return <MenuItem key={account._id} value={account._id} primaryText={account.name} />;
    });
  }

  handleChange(event, index, value) {
    this.setState({ selectedAccount: value }, this.emitChangeEvent);
  }

  emitChangeEvent() {
    this.props.accountSelected(this.state.selectedAccount);
  }
}

function mapStateToProps({ accounts }) {
  return { accounts };
}

export default connect(mapStateToProps, actions)(AccountDropdown);
