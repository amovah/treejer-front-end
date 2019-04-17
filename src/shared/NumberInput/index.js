import React, { Component } from 'react';
import styles from './index.less';

export default class extends Component {
  input = React.createRef();

  onChange = (e) => {
    let value = parseInt(e.target.value, 10) || this.props.min || 0;
    if (this.props.min && value < this.props.min) {
      value = this.props.min;
    }
    if (this.props.max && value > this.props.max) {
      value = this.props.max;
    }

    e.target.value = value;

    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  minus = () => {
    const currentValue = parseInt(this.input.current.value, 10);
    if (typeof this.props.min !== 'undefined') {
      if (currentValue - 1 >= this.props.min) {
        this.props.onChange(currentValue - 1);
        this.input.current.value = currentValue - 1;
      }
    } else {
      this.props.onChange(currentValue - 1);
      this.input.current.value = currentValue - 1;
    }
  }

  plus = () => {
    const currentValue = parseInt(this.input.current.value, 10);
    if (typeof this.props.max !== 'undefined') {
      if (currentValue + 1 >= this.props.max) {
        this.props.onChange(currentValue + 1);
        this.input.current.value = currentValue + 1;
      }
    } else {
      this.props.onChange(currentValue + 1);
      this.input.current.value = currentValue + 1;
    }
  }

  render() {
    const { defaultalue, ...rest } = this.props;
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
          // value={this.state.value}
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
