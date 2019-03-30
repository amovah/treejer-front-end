import React from 'react';
import { Link } from 'react-router-dom';
import Layout from 'Root/components/Layout';
import facebook from 'Root/assets/facebook.png';
import instagram from 'Root/assets/instagram.png';
import twitter from 'Root/assets/twitter.png';
import linkedin from 'Root/assets/linkedin.png';
import telegram from 'Root/assets/telegram.png';
import styles from './index.less';
import adoptATree from './adopt-a-tree.png';
import earnOxygen from './earn-oxygen.png';
import tradeYourOxygens from './trade-your-oxygens.png';
import tree from './tree.png';
import unicube from './unicube.png';
import flashback from './flashback.png';
import areatak from './areatak.png';
import aCircle from './a.png';
import getboarded from './getboarded.png';

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
            src={tree}
            alt="tree"
          />
        </div>
        <div className="location middle">
          <p>
            Middle East
          </p>
          <img
            src={tree}
            alt="tree"
          />
        </div>
        <div className="location africa">
          <p>
            Africa
          </p>
          <img
            src={tree}
            alt="tree"
          />
        </div>
        <div className="location southAmerica">
          <p>
            South America
          </p>
          <img
            src={tree}
            alt="tree"
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
          src={unicube}
          alt="unicube"
        />
        <img
          src={flashback}
          alt="flashback"
        />
        <img
          src={areatak}
          alt="areatak"
        />
        <img
          src={aCircle}
          alt="acircle"
        />
        <img
          src={getboarded}
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

    <div className={styles.footer}>
      <div className="someLinks">
        <Link
          to="/about"
        >
          About Us
        </Link>
        <Link
          to="/ambassadors"
        >
          Ambassadors
        </Link>
        <Link
          to="/careers"
        >
          Careers
        </Link>
        <Link
          to="/contact-us"
        >
          Contact Us
        </Link>
        <Link
          to="/refer-and-earn"
        >
          Refer And Eearn
        </Link>
        <Link
          to="/partners"
        >
          Partners
        </Link>
      </div>
      <div className="someLinks">
        <Link
          to="/planet-ecosystem"
        >
          Planet Ecosystem
        </Link>
        <Link
          to="/planters"
        >
          Planters
        </Link>
        <Link
          to="/preservers"
        >
          Preservers
        </Link>
        <Link
          to="/rangers"
        >
          Rangers
        </Link>
        <Link
          to="/adopters"
        >
          Adopters
        </Link>
        <Link
          to="/volunteers"
        >
          Volunteers
        </Link>
      </div>
      <div className="footerInfo">
        <p>
          Treejer is a Blockchain startup offering financial and non-financial incentives to
          individuals, businesses and governments to plant and preserve trees.
        </p>
        <Link
          to="/know-more"
        >
          Know More
        </Link>
      </div>
      <div className="socials">
        <div>
          <img
            src={facebook}
            alt="facebook"
          />
          <img
            src={instagram}
            alt="instagram"
          />
          <img
            src={twitter}
            alt="twitter"
          />
        </div>
        <div>
          <img
            src={linkedin}
            alt="linkedin"
          />
          <img
            src={telegram}
            alt="telegram"
          />
          <img
            src={telegram}
            alt="telegram"
          />
        </div>
        <p>
          Copyright © 2019, Treejer
        </p>
      </div>
    </div>
  </Layout>
);
