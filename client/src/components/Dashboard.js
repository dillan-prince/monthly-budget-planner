import React, { Component } from 'react';
import { connect } from 'react-redux';

import Calendar from './calendar/Calendar';

class Dashboard extends Component {
  render() {
    if (this.props.user) {
      const dateCreated = new Date(this.props.user.dateCreated);
      console.log(dateCreated);
    }

    return (
      <div>
        <h3>Hey{this.props.user ? `, ${this.props.user.name}!` : '!'}</h3>
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
