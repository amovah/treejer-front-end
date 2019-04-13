import React from 'react';
import Header from 'Root/shared/Header';
import TopPadding from 'Root/shared/Header/TopPadding';
import Layout from 'Root/shared/Layout';
import Footer from 'Root/shared/Footer';
import Box from 'Root/shared/Box';
import styles from './index.less';
import TreeBox from './TreeBox';
import SeedBox from './SeedBox';
import PadDivider from './PadDivider';
import VouchView from './VouchView';
import WaitWarning from './WaitWarning';
import JoinView from './JoinView';
import UserDetails from './UserDetails';
import ForestView from './ForestView';
import planet from './planet.png';

export default () => (
  <Layout>
    <img
      className={styles.planetImage}
      src={planet}
      alt="planet"
    />

    <Header />
    <TopPadding gap={190} />

    <UserDetails />

    <Box className={styles.collectTreeBoxes}>
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

    <ForestView />
    <JoinView />

    <Footer />
  </Layout>
);
