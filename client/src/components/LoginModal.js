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
        height: '200px'
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
              <a href="/api/authentication/facebook" className="btn blue">
                Facebook
              </a>
            </div>
            <div>
              <a href="/api/authentication/google" className="btn red">
                Google
              </a>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
