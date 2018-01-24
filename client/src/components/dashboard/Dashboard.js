import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Dashboard.css';
import * as actions from '../../actions';
import Calendar from './../calendarComponents/calendar/Calendar';
import MONTHS from '../../utilities/months';

class Dashboard extends Component {
  state = { showBillModal: false };

  render() {
    const today = new Date();

    return (
      <div>
        <h3>Hey{this.props.user ? `, ${this.props.user.name}!` : '!'}</h3>
        <hr />
        <div className="calendarMenu">
          <h5 className="month">{`${MONTHS[today.getMonth()]}, ${today.getFullYear()}`}</h5>
          <a
            onClick={() => this.setState({ showBillModal: true })}
            className="btn-floating btn-md right green darken-2 eventButton"
          >
            <i className="material-icons">add</i>
          </a>
        </div>
        <Calendar />
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, actions)(Dashboard);
