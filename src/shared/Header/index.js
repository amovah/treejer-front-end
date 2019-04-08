import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from 'Root/assets/logo.png';
import styles from './index.less';

class Header extends PureComponent {
  UserSectionView = () => {
    if (this.props.user.logged) {
      return (
        <p>
          Hello {this.props.user.name}!
        </p>
      );
    }

    return (
      <Link
        to="/sign-in"
        className="login"
      >
        Sign In
      </Link>
    );
  }

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
          {this.UserSectionView()}
          {
            !this.props.less
            && (
              <Link
                to="/adopt-a-tree"
                className="adopt"
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
