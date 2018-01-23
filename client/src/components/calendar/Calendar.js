import React, { Component } from 'react';

import Day from './Day';
import MONTHS from '../../utilities/months';
import getDays from '../../utilities/getDays';
import days from '../../utilities/calendarUtil';

class Calendar extends Component {
  state = { showBillModal: false };

  resize = () => this.forceUpdate();

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  render() {
    const today = new Date();

    return (
      <div>
        <div style={{ height: '4em', verticalAlign: 'middle' }}>
          <h5 style={{ display: 'inline-block' }}>{`${
            MONTHS[today.getMonth()]
          }, ${today.getFullYear()}`}</h5>
          <a
            onClick={() => this.setState({ showBillModal: true })}
            className="btn-floating btn-md right green darken-2"
            style={{ marginTop: '4.625px' }}
          >
            <i className="material-icons">add</i>
          </a>
        </div>
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
    return getDays().map((day) => {
      return (
        <td key={day} className="center-align" style={{ border: 'thin solid rgba(0, 0, 0, .2)' }}>
          {day}
        </td>
      );
    });
  }

  renderCalendar() {
    let calendar = [];

    for (let weekNumber = 0; weekNumber < days.length / 7; weekNumber++) {
      calendar.push(
        <tr key={`week-${weekNumber}`} style={{ position: 'relative' }}>
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

      weekDays.push(<Day key={index} day={days[index]} />);
    }

    return weekDays;
  }
}

export default Calendar;
