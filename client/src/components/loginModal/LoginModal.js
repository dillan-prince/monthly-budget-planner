import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import './LoginModal.css';
import * as actions from '../../actions';
import fbLogo from '../../assets/FB-f-Logo__white_29.png';
import googleLogo from '../../assets/g-logo.png';

class LoginModal extends Component {
  render() {
    const customStyles = {
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, .5)'
      },
      content: {
        top: '25%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        height: '225px',
        overflow: 'hidden'
      }
    };

    return (
      <div id="loginModal">
        <Modal
          isOpen={this.props.showLoginModal}
          onRequestClose={() => this.props.onRequestClose()}
          style={customStyles}
          ariaHideApp={false}
        >
          <div className="center-align">
            <h4>Log in with...</h4>
            <div>
              <a
                href="/api/authentication/facebook"
                className="btn loginButton facebook"
                onClick={() => this.props.showSpinner()}
              >
                <div>
                  <img
                    className="left logo"
                    src={fbLogo}
                    alt="facebook_logo"
                    width="32"
                    height="32"
                  />
                  <span className="loginButtonText">Facebook</span>
                </div>
              </a>
            </div>
            <div>
              <a
                href="/api/authentication/google"
                className="btn white black-text loginButton"
                onClick={() => this.props.showSpinner()}
              >
                <div>
                  <img
                    className="left logo"
                    src={googleLogo}
                    alt="google_logo"
                    width="32"
                    height="32"
                  />
                  <span className="loginButtonText">Google</span>
                </div>
              </a>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default connect(null, actions)(LoginModal);
