import React from 'react';
import { Link } from 'react-router-dom';
import SignLayout from 'Root/components/SignLayout';
import Input from 'Root/components/Input';
import styles from './index.less';

export default () => (
  <SignLayout>
    <div className={styles.container}>
      <p className="title">
        Sign In to Treejer
      </p>

      <p className="details">
        Please enter your details below
      </p>

      <Input
        placeholder="Email Address"
        style={{
          width: '100%',
          marginBottom: 30,
        }}
      />
      <Input
        placeholder="Password"
        type="password"
        style={{
          width: '100%',
          marginBottom: 30,
        }}
      />
      <button
        type="button"
        className="button"
      >
        Next
      </button>

      <div className="notMember">
        <span>
          Not a member?
        </span>
        <Link
          to="/sign-up"
          className="goTo"
        >
          Sign Up
        </Link>
      </div>
    </div>
  </SignLayout>
);
