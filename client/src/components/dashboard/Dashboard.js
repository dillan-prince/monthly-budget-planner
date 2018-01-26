import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Dashboard.css';
import * as actions from '../../actions';
import Calendar from './calendarComponents/calendar/Calendar';
import MONTHS from '../../utilities/months';

import ContentModal from './content/contentModal/ContentModal';
import EventEdit from './eventComponents/eventEdit/EventEdit';
import AccountEdit from './accountComponents/accountEdit/AccountEdit';

class Dashboard extends Component {
  state = { showAccountModal: false, showEventModal: false };

  componentDidMount() {
    this.props.fetchAccounts();
  }

  render() {
    const today = new Date();

    return (
      <div>
        <h3>Hey{this.props.user ? `, ${this.props.user.name}!` : '!'}</h3>

        <hr />

        <div className="calendarMenu">
          <h5 className="date">{`${MONTHS[today.getMonth()]}, ${today.getFullYear()}`}</h5>

          {this.renderAccountDropdown()}

          <div className="headerButtons">
            {this.renderNewAccountButton()}
            {this.renderNewEventButton()}
          </div>
        </div>

        <ContentModal
          content={<AccountEdit cancel={() => this.setState({ showAccountModal: false })} />}
          isOpen={this.state.showAccountModal}
        />

        <ContentModal
          content={<EventEdit cancel={() => this.setState({ showEventModal: false })} />}
          isOpen={this.state.showEventModal}
        />

        <Calendar />
      </div>
    );
  }

  renderAccountDropdown() {
    if (this.props.accounts && this.props.accounts.length) {
      return (
        <div className="accountDropdown">
          <a className="dropdown-button btn green darken-2 button" data-activates="accountDropdown">
            Accounts
          </a>

          <ul id="accountDropdown" className="dropdown-content">
            {this.renderAccountDropdownOptions()}
          </ul>
        </div>
      );
    }
  }

  renderAccountDropdownOptions() {
    return this.props.accounts.map((account) => {
      return <li key={account._id}>{account.name}</li>;
    });
  }

  renderNewAccountButton() {
    return (
      <a
        onClick={() => this.setState({ showAccountModal: true })}
        className="btn left green darken-2 button"
      >
        <i className="material-icons">add</i>
        <i className="material-icons">account_balance</i>
      </a>
    );
  }

  renderNewEventButton() {
    return (
      <a
        onClick={() => this.setState({ showEventModal: true })}
        disabled={!this.props.accounts || !this.props.accounts.length}
        className="btn right green darken-2 button eventButton"
      >
        <i className="material-icons">add</i>
        <i className="material-icons">event</i>
      </a>
    );
  }
}

function mapStateToProps({ user, accounts }) {
  return { user, accounts };
}

export default connect(mapStateToProps, actions)(Dashboard);
