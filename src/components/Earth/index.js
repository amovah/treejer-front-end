import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from 'Root/shared/Layout';
import Header from 'Root/shared/Header';
import TopPadding from 'Root/shared/Header/TopPadding';
import { cdn } from 'Root/config';
import Box from 'Root/shared/Box';
import Button from 'Root/shared/Button';
import fetch from 'Root/fetch';
import styles from './index.less';

export default class extends Component {
  state = {
    email: '',
  }

  changeMail = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  subscribe = async (e) => {
    e.preventDefault();

    await fetch('/subscribes', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
      }),
    });
  }

  render() {
    return (
      <Layout>
        <Header />
        <TopPadding gap={200} />

        <div className={styles.aboutPic}>
          <img
            src={`${cdn}/about.png`}
            alt="about"
          />
        </div>

        <p className={styles.title}>
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
              At the moment we are accepting donations to support the conception stage
              of the project to take it
              to an MVP. Your donations will help us plant trees and validate our
              plantation model with planting
              and preservation cycles for volunteer communities who participate and sustain
              the drive.
            </p>
            <p
              className="title"
            >
              Who plants the trees?
            </p>
            <p
              className="text"
            >
              Voluntary groups of five members in local communities participating to
              start a Plantation Drive in available regions. These community groups
              are paid in crypto, so they can earn and keep their
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
                to="/read-more"
                className="link"
              >
                READ MORE
              </Link>
            </p>

            <div className="ill">
              Illustration
            </div>

            <div className="button">
              <Button
                className="button"
              >
                Visit GoFundMe Campaign
              </Button>
            </div>
          </div>

          <div className="right">
            <Box className="box">
              <div className="left">
                <p className="title">
                  Invitation to Planet Ecosystem
                </p>
                <p className="desc">
                  Get a thank you card with digital assets of Treejer and invitation to
                  Treejer&apos;s
                  Planet Ecosystem where you can create your personal forest.
                </p>
              </div>
              <div className="divider" />
              <p className="right">
                €10
              </p>
            </Box>

            <Box className="box">
              <div className="left">
                <p className="title">
                  A Tree Planted Under Your Name
                </p>
                <p className="desc">
                  Get custom digital tree graphic with your name and photo along with a collectible
                  (real) tree to add to your forest + EVERYTHING ABOVE
                </p>
              </div>
              <div className="divider" />
              <p className="right">
                €50
              </p>
            </Box>

            <Box className="box">
              <div className="left">
                <p className="title">
                  A Custom Designed T-Shirt
                </p>
                <p className="desc">
                  Get an ‘Earth Ambassador’ custom designed T-shirt shipped to your address
                  worldwide
                  + EVERYTHING ABOVE
                </p>
              </div>
              <div className="divider" />
              <p className="right">
                €200
              </p>
            </Box>

            <Box className="box">
              <div className="left">
                <p className="title">
                  Complete Ambassador Kit
                </p>
                <p className="desc">
                  Early crypto tokens with a tree reserved in your name. A complete Ambassador Kit
                  from Treejer + EVERYTHING ABOVE
                </p>
              </div>
              <div className="divider" />
              <p className="right">
                €500
              </p>
            </Box>

            <Box className="box">
              <div className="left">
                <p className="title">
                  A Plantation Drive in Your Name
                </p>
                <p className="desc">
                  Plantation credits on site with your contribution. Ambassador Kit + all above
                  benefits.
                </p>
              </div>
              <div className="divider" />
              <p className="right">
                €1000
              </p>
            </Box>
          </div>
        </div>

        <div className={styles.newsletter}>
          <p className="title">
            Subsribe to our newsletter for offers, updates and event promos
          </p>
          <form className="group">
            <input
              onChange={this.changeMail}
              placeholder="email@example.com"
            />
            <button
              type="submit"
              onClick={this.subscribe}
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        <div className={styles.padder} />
        <div className={styles.divider} />
        <div className={styles.padder} />

        <div className={styles.socials}>
          <img
            src={`${cdn}/socials/linkedin-black.png`}
            alt="linkedin"
          />
          <img
            src={`${cdn}/socials/instagram-black.png`}
            alt="instagram"
          />
          <img
            src={`${cdn}/socials/facebook-black.png`}
            alt="facebook"
          />
          <img
            src={`${cdn}/socials/medium-black.png`}
            alt="medium"
          />
          <img
            src={`${cdn}/socials/twitter-black.png`}
            alt="twitter"
          />
          <img
            src={`${cdn}/socials/telegram-black.png`}
            alt="telegram"
          />
        </div>

        <div className={styles.padder} />

        <p className={styles.copy}>
          Copyright © 2019, Treejer
        </p>
      </Layout>
    );
  }
}
