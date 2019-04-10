import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import Box from 'Root/shared/Box';
import styles from './index.less';

class Modal extends Component {
  container = React.createRef();

  render() {
    return (
      <div
        className={classnames(styles.container, this.props.modal.show && 'active')}
        onClick={() => { console.log('yea'); }}
      >

        <Box
          className="modal"
        >
          {this.props.modal.content}
        </Box>
      </div>
    );
  }
}

export default connect(
  state => ({
    modal: state.modal,
  }),
)(Modal);
