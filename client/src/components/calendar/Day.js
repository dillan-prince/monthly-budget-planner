import React, { Component } from 'react';

class Day extends Component {
  state = { ...this.props };

  render() {
    const { date, isThisMonth, isToday } = this.state.day;

    return (
      <td
        style={{
          backgroundColor: isThisMonth
            ? isToday ? 'rgba(56, 142, 60, .2)' : 'white'
            : 'rgba(0, 0, 0, .1)',
          height: '10vh',
          width: `${100 / 7}%`,
          padding: '0',
          verticalAlign: 'top',
          border: 'thin solid rgba(0, 0, 0, .2)'
        }}
      >
        <div style={{ fontSize: '.8em' }}>
          <span className="right">{date}</span>
        </div>
      </td>
    );
  }
}

export default Day;
