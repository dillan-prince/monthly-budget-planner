import React, { Component } from 'react';

import './Day.css';

class Day extends Component {
  render() {
    const { date, isThisMonth, isToday, value, events } = this.props.day;

    return (
      <td className={`day ${isToday ? 'today' : isThisMonth ? 'thisMonth' : 'otherMonth'}`}>
        <div className="grid">
          <span className="date right">{date.getDate()}</span>
          <span className={`value left ${value > 0 ? 'green-text' : 'red-text'}`}>
            {value ? `$${this.formatNumberAsCurrency(value)}` : ''}
          </span>
        </div>
      </td>
    );
  }

  // https://stackoverflow.com/a/14428340/4722913
  formatNumberAsCurrency(value) {
    return value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  }
}

export default Day;
