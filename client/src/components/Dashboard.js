import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h1>Hi{this.props.user ? `, ${this.props.user.name}!` : '!'}</h1>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(Dashboard);
