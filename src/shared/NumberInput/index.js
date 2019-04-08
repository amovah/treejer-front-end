import React, { Component } from 'react';
import styles from './index.less';

export default class extends Component {
  state = {
    value: this.props.value || 0,
  }

  input = React.createRef();

  onChange = (e) => {
    const value = e.target.value || 0;
    this.setState({
      value,
    });

    this.props.onChange(value);
  }

  minus = () => {
    if (typeof this.props.min !== 'undefined') {
      if (this.state.value - 1 >= this.props.min) {
        this.setState(prev => ({
          value: prev.value - 1,
        }));
      }
    } else {
      this.setState(prev => ({
        value: prev.value - 1,
      }));
    }
  }

  plus = () => {
    if (typeof this.props.max !== 'undefined') {
      if (this.state.value + 1 >= this.props.max) {
        this.setState(prev => ({
          value: prev.value + 1,
        }));
      }
    } else {
      this.setState(prev => ({
        value: prev.value + 1,
      }));
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <button
          type="button"
          onClick={this.minus}
        >
          -
        </button>
        <input
          type="number"
          ref={this.input}
          onChange={this.onChange}
          value={this.state.value}
          {...this.props}
        />
        <button
          type="button"
          onClick={this.plus}
        >
          +
        </button>
      </div>
    );
  }
}
