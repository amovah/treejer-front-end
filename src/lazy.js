import React, { Component } from 'react';

class Lazy extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const {
      action,
    } = this.props;

    try {
      await action();
      this.setState({
        loading: false,
      });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const {
      loading,
    } = this.state;

    if (loading) {
      return null;
    }

    const { SoBeIT, action, ...rest } = this.props;
    return <SoBeIT {...rest} />;
  }
}

export default action => component => () => (
  <Lazy
    action={action}
    SoBeIT={component}
  />
);
