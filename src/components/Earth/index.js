import React from 'react';
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
      </div>
      <div className="right">
        b
      </div>
    </div>
  </Layout>
);
