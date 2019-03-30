import React from 'react';
import { Link } from 'react-router-dom';
import Layout from 'Root/components/Layout';
import styles from './index.less';

export default () => (
  <Layout>
    <div className={styles.tellingStory}>
      <p className="head">
        Telling the Story of One Planet
      </p>
      <p className="info">
        In a world full of indifference, a grand movement is rising to stand for the future. You
        might be the next link within this green chain. Adopt your unique tree and let locals plant
        it!
      </p>

      <div className="buttons">
        <Link
          to="/go-to-planet"
          className="goToPlanet"
        >
          Go To the Planet
        </Link>
        <div className="counter">
          <p className="count">
            1500 Trees
          </p>
          <p className="details">
            adopted by Treejer users
          </p>
        </div>
      </div>
    </div>

    <div className={styles.divider} />
  </Layout>
);
