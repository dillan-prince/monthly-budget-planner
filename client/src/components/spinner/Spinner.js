import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CircleLoader } from 'react-spinners';

import './Spinner.css';
import * as actions from '../../actions';

class Spinner extends Component {
  render() {
    return (
      <div className={`overlay ${this.props.loading ? '' : 'inactive'}`}>
        <div className="spinner">
          <CircleLoader color={'white'} loading={this.props.loading} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ loading }) {
  return { loading };
}

export default connect(mapStateToProps, actions)(Spinner);
