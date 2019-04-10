import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import Box from 'Root/shared/Box';
import closeModal from 'Root/actions/modal/close';
import styles from './index.less';

class Modal extends Component {
  container = React.createRef();

  componentDidMount() {
    this.container.current.addEventListener('click', (e) => {
      if (e.target === this.container.current) {
        closeModal();
      }
    });
  }

  render() {
    return (
      <div
        className={classnames(styles.container, this.props.modal.show && 'active')}
        ref={this.container}
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
