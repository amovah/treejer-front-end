import React from 'react';
import history from 'Root/history';
import Header from 'Root/shared/Header';
import Layout from 'Root/shared/Layout';
import Footer from 'Root/shared/Footer';
import Box from 'Root/shared/Box';
import styles from './index.less';
import TreeBox from './TreeBox';
import SeedBox from './SeedBox';
import PadDivider from './PadDivider';
import VouchView from './VouchView';
import WaitWarning from './WaitWarning';

export default () => (
  <Layout>
    <Header />

    <div className={styles.sectionOne}>
      <div className="padding" />
      <div className="userSection">
        a
      </div>
      <Box className="box">
        <p>
          Collect Trees
        </p>
        <div className="divider" />
        <p>
          Earn Oxygens
        </p>
        <div className="divider" />
        <p>
          Trade Trees<span>SOON</span>
        </p>
        <div className="divider" />
        <p>
          Trade Oxygens<span>SOON</span>
        </p>
      </Box>
    </div>

    <WaitWarning />

    <div className={styles.addToTree}>
      <p className="title">
        Add A Tree to Your Forest
      </p>
      <div className="boxes">
        <TreeBox />
        <TreeBox />
        <TreeBox />
        <TreeBox />
      </div>
    </div>

    <PadDivider gap={150} />

    <div className={styles.addToTree}>
      <p className="title">
        Plantation Drives
      </p>
      <div className="boxes">
        <SeedBox />
        <SeedBox />
        <SeedBox />
        <SeedBox />
        <SeedBox />
      </div>
    </div>

    <PadDivider gap={150} />

    <VouchView />

    <PadDivider gap={150} />

    <Box className={styles.waitlist}>
      <div className="left">
        <p className="title">
          Join the Planet Waitlist!
        </p>
        <p className="desc">
          Planet is an Invite-Only ecosystem where likeminded people can have collectible trees.
          If you know someone who cares for the environment you can invite her/him to join us :)
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <button
          type="button"
          onClick={() => history.push('/sign-up')}
        >
          SIGN UP
        </button>
      </div>
      <div className="right">
        Illustrator
      </div>
    </Box>

    <PadDivider gap={300} />

    <Footer />
  </Layout>
);
