import React from 'react';
import { Link } from 'react-router-dom';
import Layout from 'Root/shared/Layout';
import Header from 'Root/shared/Header';
import TopPadding from 'Root/shared/Header/TopPadding';
import { cdn } from 'Root/config';
import styles from './index.less';

export default () => (
  <Layout>
    <Header />
    <TopPadding gap={200} />

    <div
      className={styles.aboutPic}
    >
      <img
        src={`${cdn}/about.png`}
        alt="about"
      />
    </div>

    <p
      className={styles.title}
    >
      This Earth Day pledge to plant a tree!
    </p>
    <div className={styles.container}>
      <div className="left">
        <p
          className="text"
        >
          Let’s all get together in this. Even more so than funds, we are raising awareness
          towards the existing
          threats on our planet and our eco-sysytems worldwide. We are launching our
          reforestation and tree
          plantation project called ‘Treejer’. It’s a tree planting community created by
          investors and volunteers.
          Using concepts such as social forestry, tokenomics and gamification, our
          international project aims
          to inspire various groups to join an inclusive and sustainable model of tree
          plantation.
        </p>
        <p className="title">
          How to support?
        </p>
        <p
          className="text"
        >
          At the moment we are accepting donations to support the conception stage of the project
          to take it
          to an MVP. Your donations will help us plant trees and validate our plantation model
          with planting
          and preservation cycles for volunteer communities who participate and sustain the drive.
        </p>
        <p
          className="title"
        >
          Who plants the trees?
        </p>
        <p
          className="text"
        >
          Voluntary groups of five members in local communities participating to start a Plantation
          Drive in
          available regions. These community groups are paid in crypto, so they can earn and keep
          their
          income even if they have no access to a bank. However, they have the option to change
          their
          earnings to fiat money.
        </p>
        <p
          className="title"
        >
          About Treejer
        </p>
        <p
          className="text"
        >
          Treejer is a Blockchain startup offering financial and non-financial incentives to
          individuals,
          businesses and governments to plant and preserve trees. Using concepts such as social
          forestry,
          tokenomics and gamification, this international project aims to inspire various groups
          to join an
          inclusive and sustainable model of tree plantation.
          <br />
          <Link
            href="/read-more"
            className="link"
          >
            READ MORE
          </Link>
        </p>
      </div>
      <div className="right">
        b
      </div>
    </div>
  </Layout>
);
