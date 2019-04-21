import React from 'react';
import { cdn } from 'Root/config';
import styles from './index.less';

export default () => (
  <div className={styles.container}>
    <div className="section">
      <img
        src={`${cdn}/forstartups/1.png`}
        alt="sale"
      />
      <div className="padder" />
      <div className="text">
        <p className="title">
          Green Marketing
        </p>
        <p className="desc">
          Nielsen, a global leader in market research, polled 30,000 consumers in 60 countries
          around the world in 2015. They wanted to know more about what influences how people feel
          about brands, and how those feelings impact buying behavior. One overwhelming conclusion
          of the report? That consumers are willing to pay extra for one thing: sustainability.
          Another study by The Shelton Group has found that 90% of millennials will buy from a
          brand whose social and environmental practices they trust, and 95% of them will recommend
          that brand to a friend. Considering millennials spend a $600 billion per year — a figure
          that&apos;s expected to grow to $1.4 trillion, which is 30% of the market — those numbers
          have
          a huge significance for brands. Treejer provides you with green marketing solutions,
          whether it&apos;s for a one-time campaign or a consistent marketing program for your
          product.
          Plant trees with everything you sell to gain new users or retain the current ones.
        </p>
      </div>
    </div>
    <div className="section">
      <div className="text">
        <p className="title">
          HR Rewarding
        </p>
        <p className="desc">
          More than 70% of US employees surveyed are more likely to work for a company that has a
          strong green footprint, according to a survey of 1,000 employees by Swytch. Nearly half
          of respondents are even willing to accept a smaller salary to work for an environmentally
          and socially responsible company. In fact, more than 10% reported they would accept a
          salary decrease between $5,000 and $10,000 and over 3% would even be inclined to accept a
          decrease of more than $10,000 per year. Considering employee&apos;s significant interest
          in sustainability, Treejer has made it possible for businesses of any size to reward
          their in a sustainable way. You can collect trees for your employees occasionally or
          define a consistent green reward program. Employees have personal forests that always can
          get expanded by you!
        </p>
      </div>
      <div className="padder" />
      <img
        src={`${cdn}/forstartups/2.png`}
        alt="aman"
      />
    </div>
    <div className="section">
      <img
        src={`${cdn}/forstartups/3.png`}
        alt="hand"
      />
      <div className="padder" />
      <div className="text">
        <p className="title">
          Social Impact
        </p>
        <p className="desc">
          While even five years ago, companies were still somewhat slow to integrate social impact
          into their day-to-day activities and long-term strategies, but over the past few years,
          that’s all changing. Today, it will no longer be a choice for companies to embed social
          impact into their business and brand strategies - it’ll be imperative. Studies show,
          embracing social impact is key to engaging a growing number of customers, talents and
          investors who care deeply about these issues. In an increasingly competitive business
          world, customers have countless options for almost any service or product you could
          imagine - and research shows that many will choose to buy from the companies whose values
          they most align with. Treejer&apos;s inclusive model of reforestation brings elevated
          social
          and environmental impact for companies.
        </p>
      </div>
    </div>
  </div>
);
