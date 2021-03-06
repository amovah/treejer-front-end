import React, { Component } from 'react';
import { MoonLoader } from 'react-spinners';
import Layout from 'Root/shared/Layout';

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
      return (
        <Layout>
          <div
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <MoonLoader
              color="#67b68c"
            />
            <br />
            <p
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: '#646464',
              }}
            >
              Please Wait
            </p>
          </div>
        </Layout>
      );
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
