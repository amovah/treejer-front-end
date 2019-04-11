import React from 'react';
import Header from 'Root/shared/Header';
import Layout from 'Root/shared/Layout';
import Footer from 'Root/shared/Footer';
import Box from 'Root/shared/Box';
import Button from 'Root/shared/Button';
import styles from './index.less';
import TreeBox from './TreeBox';
import SeedBox from './SeedBox';
import PadDivider from './PadDivider';

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

    <PadDivider gap={150} />

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

    <Box className={styles.vouchBox}>
      <div className="left">
        Illustrator
      </div>
      <div className="right">
        <p className="have">
          Have a voucher?
        </p>
        <p className="claim">
          Claim Your Tree!
        </p>
        <input
          placeholder="Voucher Code"
        />
        <Button
          style={{
            width: '100%',
          }}
        >
          SUBMIT
        </Button>
      </div>
    </Box>

    <PadDivider gap={150} />

    <Footer />
  </Layout>
);
