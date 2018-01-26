import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Header from './header/Header';
import Landing from './landing/Landing';
import LoginModal from './loginModal/LoginModal';
import Dashboard from './dashboard/Dashboard';
import Spinner from './spinner/Spinner';

class App extends Component {
  state = { showLoginModal: false, loading: true };

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header onLoginClicked={() => this.setState({ showLoginModal: true })} />
            <Route path="/" component={this.props.user ? Dashboard : Landing} exact />
          </div>
        </BrowserRouter>

        <Spinner />
        <LoginModal
          onRequestClose={() => this.setState({ showLoginModal: false })}
          showLoginModal={this.state.showLoginModal}
        />
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, actions)(App);
