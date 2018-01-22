import React, { Component } from 'react';
import Modal from 'react-modal';

class LoginModal extends Component {
  state = { showLoginModal: this.props.showLoginModal };

  render() {
    const customStyles = {
      content: {
        top: '25%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        height: '215px'
      }
    };

    return (
      <div id="loginModal">
        <Modal
          isOpen={this.state.showLoginModal}
          onRequestClose={() => this.setState({ showLoginModal: false })}
          style={customStyles}
          ariaHideApp={false}
        >
          <div className="center-align">
            <h4>Log in with...</h4>
            <div>
              <a
                href="/api/authentication/facebook"
                className="btn blue"
                style={{ width: '150px', height: '36px', padding: '0', marginBottom: '10px' }}
              >
                <div>
                  <img
                    className="left"
                    src="https://picsee.co/images/social_facebook.png"
                    alt="facebook_logo"
                    width="32"
                    height="32"
                    style={{ margin: '2px 0 0 2px' }}
                  />
                  <span className="right" style={{ marginRight: '20px' }}>
                    Facebook
                  </span>
                </div>
              </a>
            </div>
            <div>
              <a
                href="/api/authentication/google"
                className="btn white black-text"
                style={{ width: '150px', height: '36px', padding: '0', marginBottom: '10px' }}
              >
                <div>
                  <img
                    className="left"
                    src="https://developers.google.com/identity/images/g-logo.png"
                    alt="google_logo"
                    width="32"
                    height="32"
                    style={{ margin: '2px 0 0 2px' }}
                  />
                  <span className="right" style={{ marginRight: '28.5px' }}>
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
