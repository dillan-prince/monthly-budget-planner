import React, { Component } from 'react';
import { connect } from 'react-redux';

import Calendar from './calendar/Calendar';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3>
          Hey{this.props.user ? `, ${this.props.user.name}!` : '!'} Here's your monthly budget:
        </h3>
        <hr />
        <Calendar />
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(Dashboard);
