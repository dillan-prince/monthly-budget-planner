import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Calendar.css';
import Day from '../day/Day';
import getDayNames from '../../../../utilities/getDayNames';
import getAccountHistory from '../../../../utilities/getAccountHistory';

class Calendar extends Component {
  state = { selectedAccount: null, selectedMonth: new Date(), accountHistory: [] };

  componentWillMount() {
    this.resize = () => this.forceUpdate();
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  componentWillReceiveProps({ selectedAccount, selectedMonth }) {
    if (selectedAccount) {
      console.log(selectedAccount);
      this.setState({ selectedAccount }, this.updateAccountHistory);
    }

    if (selectedMonth) {
      this.setState({ selectedMonth });
    }
  }

  render() {
    if (this.state.accountHistory) {
      return (
        <div>
          <table className="striped">
            <tbody>
              <tr>{this.renderHeader()}</tr>
              {this.renderCalendar()}
            </tbody>
          </table>
        </div>
      );
    } else {
      return null;
    }
  }

  renderHeader() {
    return getDayNames().map((day) => {
      return (
        <td key={day} className="center-align bordered">
          {day}
        </td>
      );
    });
  }

  renderCalendar() {
    let calendar = [];

    for (let weekNumber = 0; weekNumber < this.state.accountHistory.length / 7; weekNumber++) {
      calendar.push(
        <tr key={`week-${weekNumber}`} className="relative">
          {this.renderWeek(weekNumber)}
        </tr>
      );
    }

    return calendar;
  }

  renderWeek(weekNumber) {
    let weekDays = [];

    for (let dayNumber = 0; dayNumber < 7; dayNumber++) {
      let index = weekNumber * 7 + dayNumber;
      weekDays.push(<Day key={index} day={this.state.accountHistory[index]} />);
    }

    return weekDays;
  }

  updateAccountHistory() {
    const history = getAccountHistory(
      this.state.selectedAccount,
      new Date(this.state.selectedMonth.getFullYear(), this.state.selectedMonth.getMonth() + 1, 0)
    );

    this.setState({ accountHistory: history });
  }
}

function mapStateToProps({ selectedAccount }) {
  return { selectedAccount };
}

export default connect(mapStateToProps)(Calendar);
