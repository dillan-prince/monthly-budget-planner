import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import LoginModal from './LoginModal';
import Dashboard from './Dashboard';

class App extends Component {
  state = { showLoginModal: false };

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header onLoginClicked={() => this.setState({ showLoginModal: true })} />
            <Route path="/" component={Landing} exact />
            <Route path="/dashboard" component={Dashboard} exact />
          </div>
        </BrowserRouter>
        <LoginModal
          onRequestClose={() => this.setState({ showLoginModal: false })}
          showLoginModal={this.state.showLoginModal}
        />;
      </div>
    );
  }

  renderLoginModal() {}
}

export default connect(null, actions)(App);
