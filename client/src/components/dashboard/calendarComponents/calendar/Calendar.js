import React, { Component } from 'react';

import './Calendar.css';
import Day from '../day/Day';
import getDayNames from '../../../../utilities/getDayNames';
import getDaysForMonth from '../../../../utilities/getDaysForMonth';

class Calendar extends Component {
  state = { showBillModal: false };

  componentWillMount() {
    this.days = getDaysForMonth(new Date());
    this.resize = () => this.forceUpdate();
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  render() {
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

    for (let weekNumber = 0; weekNumber < this.days.length / 7; weekNumber++) {
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

      weekDays.push(<Day key={index} day={this.days[index]} />);
    }

    return weekDays;
  }
}

export default Calendar;
