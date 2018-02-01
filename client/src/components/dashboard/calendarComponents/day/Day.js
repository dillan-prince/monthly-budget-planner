import React, { Component } from 'react';

import './Day.css';

class Day extends Component {
  render() {
    const { date, isThisMonth, isToday, value, events } = this.props.day;

    return (
      <td className={`day ${isToday ? 'today' : isThisMonth ? 'thisMonth' : 'otherMonth'}`}>
        <div className="grid">
          <div className="date right">{date.getDate()}</div>
          <div className={`value left ${value > 0 ? 'green-text' : 'red-text'}`}>
            {this.renderValue(value)}
          </div>
          <div className="events">
            <ul>{this.renderEvents(events)}</ul>
          </div>
        </div>
      </td>
    );
  }

  renderValue(value) {
    if (!value) {
      return null;
    }

    return this.formatValueForDisplaying(value);
  }

  renderEvents(events) {
    if (!events) {
      return null;
    }

    const maxNumEvents = 2;
    let eventsToDisplay = [];

    for (let i = 0; i < Math.min(maxNumEvents, events.length); i++) {
      const valueToDisplay = this.formatValueForDisplaying(events[i]);

      eventsToDisplay.push(
        <li key={i}>
          <div className={`${events[i] > 0 ? 'green-text' : 'red-text'}`}>{valueToDisplay}</div>
        </li>
      );
    }

    if (events.length > maxNumEvents) {
      eventsToDisplay.push(<li key="ellipses">...</li>);
    }

    return eventsToDisplay;
  }

  /* https://stackoverflow.com/a/14428340/4722913
  *  Formats a number as currency with:
  *    2 decimals
  *    '.' for the decimal point, 
  *    ',' to mark thousands group
  */
  formatNumberAsCurrency(value) {
    return value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  }

  formatValueForDisplaying(value) {
    if (window.innerWidth < 740) {
      return `${value > 0 ? '+' : value === 0 ? '' : '-'}$`;
    }

    if (Math.abs(value) > 1e6) {
      return `${value <= 0 ? '-' : ''}$${value.toExponential(2)}`;
    }

    return `${value <= 0 ? '-' : ''}$${this.formatNumberAsCurrency(Math.abs(value))}`;
  }
}

export default Day;
