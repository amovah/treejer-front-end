import React from 'react';
import Header from 'Root/shared/Header';
import TopPadding from 'Root/shared/Header/TopPadding';
import Layout from 'Root/shared/Layout';
import Footer from 'Root/shared/Footer';
import Box from 'Root/shared/Box';
import { cdn } from 'Root/config';
import lazy from 'Root/lazy';
import loadUserTrees from 'Root/actions/user/loadTrees';
import loadTrees from 'Root/actions/trees/load';
import styles from './index.less';
import Trees from './Trees';
import SeedBox from './SeedBox';
import PadDivider from './PadDivider';
import VouchView from './VouchView';
import WaitWarning from './WaitWarning';
import JoinView from './JoinView';
import UserDetails from './UserDetails';
import ForestView from './ForestView';

const Planet = () => (
  <Layout>
    <img
      className={styles.planetImage}
      src={`${cdn}/planet.png`}
      alt="planet"
    />

    <Header white />
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

    <Trees />

    <PadDivider gap={150} />

    <div className={styles.addToTree}>
      <p className="title">
        Plantation Drives
      </p>
      <div className="boxes">
        <SeedBox
          pic={`${cdn}/drives/seydbar.png`}
          title="Seydbar School"
          desc="50 Trees in Iran"
        />
        <SeedBox
          pic={`${cdn}/drives/roosta.png`}
          title="RoostaGol"
          desc="0 Trees in Iran"
        />
        <SeedBox
          pic={`${cdn}/drives/golestan.png`}
          title="Golestan Villages"
          desc="1500 Trees in Iran"
        />
        <SeedBox
          pic={`${cdn}/drives/kerman.png`}
          title="Kerman Villages"
          desc="0 Trees in Iran"
        />
        <SeedBox
          pic={`${cdn}/drives/tehran.png`}
          title="Tehran Villages"
          desc="0 Trees in Iran"
        />
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

export default lazy(async () => {
  const funcs = [loadUserTrees(), loadTrees()];
  await Promise.all(funcs);
})(Planet);
