import React, { Component } from 'react';
import Modal from 'react-modal';

import fbLogo from '../assets/FB-f-Logo__white_29.png';
import googleLogo from '../assets/g-logo.png';

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
                className="btn"
                style={{
                  width: '130px',
                  height: '36px',
                  padding: '0',
                  marginBottom: '10px',
                  backgroundColor: '#4267b2'
                }}
              >
                <div>
                  <img
                    className="left"
                    src={fbLogo}
                    alt="facebook_logo"
                    width="32"
                    height="32"
                    style={{ margin: '2px 0 0 2px' }}
                  />
                  <span className="right" style={{ marginRight: '8.79px' }}>
                    Facebook
                  </span>
                </div>
              </a>
            </div>
            <div>
              <a
                href="/api/authentication/google"
                className="btn white black-text"
                style={{ width: '130px', height: '36px', padding: '0', marginBottom: '10px' }}
              >
                <div>
                  <img
                    className="left"
                    src={googleLogo}
                    alt="google_logo"
                    width="32"
                    height="32"
                    style={{ margin: '2px 0 0 2px' }}
                  />
                  <span className="right" style={{ marginRight: '17.67px' }}>
                    Google
                  </span>
                </div>
              </a>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
