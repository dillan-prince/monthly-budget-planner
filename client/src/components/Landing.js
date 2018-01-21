import React, { Component } from 'react';

import LoginModal from './LoginModal';

class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Landing</h1>
        <LoginModal showLoginModal={this.props.showLoginModal} />
      </div>
    );
  }
}

export default Landing;
