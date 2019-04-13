import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Logo from 'Root/assets/logo.png';
import styles from './index.less';
import User from './User';

class Header extends PureComponent {
  render() {
    return (
      <div className={styles.header}>
        <div>
          <Link
            to="/"
            className="logo"
          >
            <img
              src={Logo}
              alt="logo"
            />
          </Link>

          {
            !this.props.less
            && (
              <Fragment>
                <Link
                  to="/for-startups"
                >
                  for startups
                </Link>
                <Link
                  to="/about"
                >
                  about
                </Link>
                <Link
                  to="/contact"
                >
                  contact
                </Link>
                <Link
                  to="/become-a-planter"
                  className="unique"
                >
                  become a planter
                </Link>
              </Fragment>
            )
          }
        </div>

        <div>
          <User />
          {
            (!this.props.less && !this.props.user.logged)
            && (
              <Link
                to="/adopt-a-tree"
                className={classnames('adopt', this.props.white && 'white')}
              >
                adopt a tree
              </Link>
            )
          }
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
  }),
)(Header);
