import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
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

            <Route path="/" component={this.renderLanding.bind(this)} exact />
            <Route path="/dashboard" component={Dashboard} exact />
          </div>
        </BrowserRouter>
      </div>
    );
  }

  renderLanding() {
    return <Landing showLoginModal={this.state.showLoginModal} />;
  }
}

export default connect(null, actions)(App);
