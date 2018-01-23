import React, { Component } from 'react';
import { connect } from 'react-redux';

import Calendar from './calendar/Calendar';
import MONTHS from '../utilities/months';

class Dashboard extends Component {
  render() {
    const today = new Date();

    return (
      <div>
        <h3>Hey{this.props.user ? `, ${this.props.user.name}!` : '!'}</h3>
        <hr />
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
        <Calendar />
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(Dashboard);
