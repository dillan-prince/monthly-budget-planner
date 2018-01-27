import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class AccountDropdown extends Component {
  state = {
    selectedAccount: this.props.accounts
      ? this.props.accounts.find((account) => account.isDefault)._id
      : null
  };

  render() {
    if (this.props.accounts && this.props.accounts.length) {
      const defaultAccount = this.props.accounts.find((account) => account.isDefault);

      return (
        <SelectField
          value={this.state.selectedAccount || defaultAccount._id}
          onChange={this.handleChange.bind(this)}
          disabled={this.props.accounts.length === 1}
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
    this.setState({ selectedAccount: value });
  }
}

export default AccountDropdown;
