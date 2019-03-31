import React from 'react';
import Layout from 'Root/components/Layout';
import Footer from 'Root/components/Footer';
import Socials from 'Root/components/Socials';
import styles from './index.less';

export default () => (
  <Layout>
    <Socials />

    <div className={styles.illusterate}>
      Illusterate
    </div>

    <div className={styles.section}>
      <p className="title">
        About Treejer
      </p>

      <p className="content">
        Treejer is a Blockchain startup offering financial and non-financial
        incentives to individuals, businesses and governments to plant and
        preserve trees. Using concepts such as social forestry, tokenomics
        and gamification, this international project aims to inspire various
        groups to join an inclusive and sustainable model of tree
        plantation.
      </p>
    </div>

    <div className={styles.section}>
      <p className="title">
        Planet Ecosystem
      </p>

      <p className="content">
        To make this happen, Treejer is developing a Blockchain-powered
        ecosystem called the Planet. This ecosystem gives reward and
        reputation to its contributing members from both demand
        (adoption) and supply (plantation) sides.
      </p>
    </div>

    <div className={styles.section}>
      <p className="title">
        Who plants the trees?
      </p>

      <p className="content">
        Voluntary groups of five members in local communities can apply
        to start a Plantation Drive anywhere in available regions. These
        community groups are paid in crypto, so they can earn and keep
        their income even if they have no access to a bank. However, they
        have the option to change their earnings to fiat money.
      </p>
    </div>

    <Footer />
  </Layout>
);
