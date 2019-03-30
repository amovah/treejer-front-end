import React from 'react';
import { Link } from 'react-router-dom';
import Layout from 'Root/components/Layout';
import styles from './index.less';
import adoptATree from './adopt-a-tree.png';
import earnOxygen from './earn-oxygen.png';
import tradeYourOxygens from './trade-your-oxygens.png';

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

    <div className={styles.treejernutshell}>
      <p className="head">
        TREEJER&apos;S PLANET IN A NUTSHELL
      </p>

      <div className="threethere">
        <div className="content">
          <img
            src={adoptATree}
            alt="adopt-a-tree"
          />
          <p className="title">
            Adopt A Tree
          </p>
          <p className="details">
            Adopt a real tree and add it to your
            personal forest in the Planet
          </p>
          <Link
            to="/know-more"
            className="link"
          >
            KNOW MORE
          </Link>
        </div>
        <div className="verticalDivider" />
        <div className="content">
          <img
            src={earnOxygen}
            alt="earn-oxygen"
          />
          <p className="title">
            Earn Oxygen
          </p>
          <p className="details">
            Get rewards for making a positive
            impact on the environment
          </p>
          <Link
            to="/know-more"
            className="link"
          >
            KNOW MORE
          </Link>
        </div>
        <div className="verticalDivider" />
        <div className="content">
          <img
            src={tradeYourOxygens}
            alt="trade-your-oxygens"
          />
          <p className="title">
            Trade Your Oxygens
            Earn Oxygen
          </p>
          <p className="details">
            Exchange your earned Oxygen (O2) for
            products, services or money!
          </p>
          <Link
            to="/know-more"
            className="link"
          >
            KNOW MORE
          </Link>
        </div>
      </div>


      <div className="treejerContainer">
        <Link
          to="/treejer-for-bussiness"
          className="treejer"
        >
          Treejer for Business
        </Link>
      </div>
    </div>

    <div className={styles.divider} />

  </Layout>
);
