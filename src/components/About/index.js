import React, { PureComponent } from 'react';
import Layout from 'Root/shared/Layout';
import Footer from 'Root/shared/Footer';
import Socials from 'Root/shared/Socials';
import Header from 'Root/shared/Header';
import TopPadding from 'Root/shared/Header/TopPadding';
import maple from 'Root/assets/maple.png';
import Box from 'Root/shared/Box';
import styles from './index.less';
import Ermia from './Ermia.png';
import Ali from './Ali.png';
import Alireza from './Alireza.png';
import Bahareh from './Bahareh.png';
import Shivam from './Shivam.png';
import Saeed from './Saeed.png';
import Negar from './Negar.png';
import John from './John.png';
import Nora from './Nora.png';

export default class extends PureComponent {
  componentDidMount() {
    global.window.scrollTo(0, 0);
  }

  render() {
    return (
      <Layout>
        <Header />
        <TopPadding />

        <Socials />

        <div className={styles.illustrate}>
          illustrate
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

        <div className={styles.ourTeam}>
          <div className="title">
            <img
              src={maple}
              alt="forest"
            />
            <p>
              Meet Our Team
            </p>
            <img
              src={maple}
              alt="forest"
            />
          </div>

          <div className="row">
            <Box className="card">
              <img
                src={Ermia}
                alt="Ermia"
              />
              <p className="name">
                Ermia Saharkhiz
              </p>
              <p className="role">
                Cofounder and CEO
              </p>
            </Box>
            <Box className="card">
              <img
                src={Ali}
                alt="Ali"
              />
              <p className="name">
                Ali Hamidian
              </p>
              <p className="role">
                Cofounder and COO
              </p>
            </Box>
            <Box className="card">
              <img
                src={Alireza}
                alt="Alireza"
              />
              <p className="name">
                Alireza Arabi
              </p>
              <p className="role">
                Cofounder and CTO
              </p>
            </Box>
          </div>
          <div className="row">
            <Box className="card">
              <img
                src={Bahareh}
                alt="Bahareh"
              />
              <p className="name">
                Bahareh Tavakoli
              </p>
              <p className="role">
                Art Director
              </p>
            </Box>
            <Box className="card">
              <img
                src={Shivam}
                alt="Shivam"
              />
              <p className="name">
                Shivam Dhawan
              </p>
              <p className="role">
                Strategy Advisor
              </p>
            </Box>
            <Box className="card">
              <img
                src={Saeed}
                alt="Saeed"
              />
              <p className="name">
                Saeed Khoshbakht
              </p>
              <p className="role">
                Blockchain Advisor
              </p>
            </Box>
          </div>
          <div className="row">
            <Box className="card">
              <img
                src={Negar}
                alt="Negar"
              />
              <p className="name">
                Negar Ekrami
              </p>
              <p className="role">
                Climate Researcher
              </p>
            </Box>
            <Box className="card">
              <img
                src={John}
                alt="John"
              />
              <p className="name">
                John Doe
              </p>
              <p className="role">
                CMO
              </p>
            </Box>
            <Box className="card">
              <img
                src={Nora}
                alt="Nora"
              />
              <p className="name">
                Nora
              </p>
              <p className="role">
                Chief Happiness Officer
              </p>
            </Box>
          </div>
        </div>

        <div className={styles.section}>
          <p className="title">
            Our Mission
          </p>

          <p className="content">
            We are introducing an inclusive and diverse ecosystem to facilitate climate action in
            the
            society. Pivoting around tree plantation, we aim to help various community groups to
            benefit
            from it, both financially and non-financially. Treejer helps people, businesses and
            public
            sectors gain as much as they invest in a better future.
          </p>
        </div>

        <div className={styles.section}>
          <p className="title">
            Our Vision
          </p>

          <p className="content">
            We envision to become the top community that is admired for their action on
            climate change.
          </p>
        </div>

        <div className={styles.section}>
          <p className="title">
            Our Values
          </p>

          <p className="content">
            As we step in this journey, we make sure that we are in line with our values. We value
            the future but we never forget our roots
          </p>
        </div>

        <div className={styles.cards}>
          <div className="row">
            <p>Community</p>
            <p>Technology</p>
            <p>Creativity</p>
          </div>
          <div className="row">
            <p>Futurism</p>
            <p>Empathy</p>
            <p>Transparency</p>
          </div>
          <div className="row">
            <p>Sustainablity</p>
            <p>Partnership</p>
            <p>Diversity</p>
          </div>
        </div>

        <Footer />
      </Layout>
    );
  }
}
