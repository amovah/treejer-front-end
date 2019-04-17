import React, { Component } from 'react';
import styles from './index.less';

export default class extends Component {
  state = {
    value: this.props.defaultValue || 0,
  }

  input = React.createRef();

  onChange = (e) => {
    let value = parseInt(e.target.value, 10) || this.props.min || 0;
    if (this.props.min && value < this.props.min) {
      value = this.props.min;
    }
    if (this.props.max && value > this.props.max) {
      value = this.props.max;
    }

    this.setState({
      value,
    });
    e.target.value = value;

    if (this.props.onChange) {
      this.props.onChange(value);
    }
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
    const { defaultValue, ...rest } = this.props;
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
          value={this.state.value}
          {...rest}
          onChange={this.onChange}
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
