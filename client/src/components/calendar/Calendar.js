import React, { Component } from 'react';

import Day from './Day';
import MONTHS from '../../utilities/months';
import days from '../../utilities/calendarUtil';

class Calendar extends Component {
  render() {
    const today = new Date();

    return (
      <div>
        <h5>{`${MONTHS[today.getMonth()]}, ${today.getFullYear()}`}</h5>
        <table className="centered">
          <tbody>
            <tr>
              <th>Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
            {this.renderCalendar()}
          </tbody>
        </table>
      </div>
    );
  }

  renderCalendar() {
    let calendar = [];

    for (let weekNumber = 0; weekNumber < 5; weekNumber++) {
      calendar.push(<tr key={`week-${weekNumber}`}>{this.renderWeek(weekNumber)}</tr>);
    }

    return calendar;
  }

  renderWeek(weekNumber) {
    let weekDays = [];

    for (let dayNumber = 0; dayNumber < 7; dayNumber++) {
      let index = weekNumber * 7 + dayNumber;

      weekDays.push(<Day key={index} day={days[index]} />);
    }

    return weekDays;
  }
}

export default Calendar;
