import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class RecurringDropdown extends Component {
  state = { selection: '1' };

  render() {
    return (
      <SelectField
        value={this.state.selection}
        onChange={(event, index, value) => this.setState({ selection: value })}
        style={{ maxWidth: '135.5px' }}
        labelStyle={{ color: 'rgb(56, 152, 60)' }}
        selectedMenuItemStyle={{ color: 'rgb(56, 152, 60)' }}
      >
        {this.renderRecurringOptions()}
      </SelectField>
    );
  }

  renderRecurringOptions() {
    return [
      <MenuItem key="daily" value="1" primaryText="Daily" />,
      <MenuItem key="weekly" value="7" primaryText="Weekly" />,
      <MenuItem key="biweekly" value="14" primaryText="Biweekly" />,
      <MenuItem key="semimonthly" value="-1" primaryText="Semimonthly" />,
      <MenuItem key="monthly" value="-2" primaryText="Monthly" />
    ];
  }
}

export default RecurringDropdown;
