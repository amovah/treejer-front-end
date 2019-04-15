import React from 'react';
import { Link } from 'react-router-dom';
import Layout from 'Root/shared/Layout';
import Footer from 'Root/shared/Footer';
import Header from 'Root/shared/Header';
import TopPadding from 'Root/shared/Header/TopPadding';
import { cdn } from 'Root/config';
import styles from './index.less';

export default () => (
  <Layout>
    <Header />
    <TopPadding />
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
            src={`${cdn}/home/adopt-a-tree.png`}
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
            src={`${cdn}/home/earn-oxygen.png`}
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
            src={`${cdn}/home/trade-your-oxygens.png`}
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

    <div className={styles.planterwithout}>
      <p className="title">
        #PlantersWithoutBorders
      </p>
      <p className="info">
        We are accepting local communities from different regions to join the Planet Ecosystem.
      </p>
      <div className="earth">
        <div className="location india">
          <p>
            India
          </p>
          <img
            src={`${cdn}/trees/acacia.png`}
            alt="acacia"
          />
        </div>
        <div className="location middle">
          <p>
            Middle East
          </p>
          <img
            src={`${cdn}/trees/acacia.png`}
            alt="acacia"
          />
        </div>
        <div className="location africa">
          <p>
            Africa
          </p>
          <img
            src={`${cdn}/trees/acacia.png`}
            alt="acacia"
          />
        </div>
        <div className="location southAmerica">
          <p>
            South America
          </p>
          <img
            src={`${cdn}/trees/acacia.png`}
            alt="acacia"
          />
        </div>
      </div>

      <div className="container">
        <Link
          to="start-a-plantation-drive-into-region"
        >
          Start A Plantation Drive in Your Region
        </Link>
      </div>
    </div>

    <div className={styles.divider} />

    <div className={styles.theytrusted}>
      <p className="title">
        They Trusted Treejer
      </p>

      <div className="orgs">
        <img
          src={`${cdn}/org-logos/unicube.png`}
          alt="unicube"
        />
        <img
          src={`${cdn}/org-logos/flashback.png`}
          alt="flashback"
        />
        <img
          src={`${cdn}/org-logos/areatak.png`}
          alt="areatak"
        />
        <img
          src={`${cdn}/org-logos/a.png`}
          alt="acircle"
        />
        <img
          src={`${cdn}/org-logos/getboarded.png`}
          alt="getboarded"
        />
      </div>

      <p className="subtext">
        Subsribe to our newsletter for offers, updates and event promos
      </p>
      <div className="subinput">
        <input
          placeholder="email@example.com"
        />
        <button
          type="button"
          onClick={() => {}}
        >
          subscribe
        </button>
      </div>
    </div>
    <Footer />
  </Layout>
);
