import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper green darken-2">
          <Link to={'/'} className="left brand-logo">
            Budget EZ
          </Link>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }

  renderContent() {
    switch (this.props.user) {
      case null:
        return;
      case false:
        return (
          <li>
            <a onClick={() => this.props.onLoginClicked()}>Log in</a>
          </li>
        );
      default:
        return (
          <li key="logout">
            <a href="/api/authentication/logout">Log out</a>
          </li>
        );
    }
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(Header);
