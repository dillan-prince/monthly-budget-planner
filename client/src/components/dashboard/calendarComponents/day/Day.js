import React, { Component } from 'react';

import './Day.css';

class Day extends Component {
  state = { ...this.props };

  render() {
    const { date, isThisMonth, isToday } = this.state.day;

    return (
      <td className={`day ${isToday ? 'today' : isThisMonth ? 'thisMonth' : 'otherMonth'}`}>
        <div>
          <span className="right">{date}</span>
        </div>
      </td>
    );
  }
}

export default Day;
