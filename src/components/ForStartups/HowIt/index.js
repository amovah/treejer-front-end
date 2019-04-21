import React from 'react';
import styles from './index.less';

export default () => (
  <div className={styles.container}>
    <p className="title">
      How it works
    </p>
    <div className="content">
      <div className="bar">
        <div className="head" />
        <div className="act" />
        <div className="tail" />
      </div>

      <div style={{ height: 100 }} />

      <div className="section">
        <div className="pad" />
        <div className="ball" />
        <div className="text">
          <p className="title">
            Buy Voucher for User
          </p>
          <p className="desc">
            Treejer gives you a voucher code when you purchase trees for your customers. You just
            need to select tree owners as &quot;My Customers&quot; in the checkout. We&apos;ll
            send you the voucher via email.
          </p>
        </div>
      </div>

      <div style={{ height: 50 }} />

      <div className="section">
        <div className="text left">
          <p className="title">
            Transfer Voucher to User
          </p>
          <p className="desc">
            You need to transfer the voucher code to your customers either online or offline when
            you sell your product or service. It&apos;s a simple code that can be displayed in your
            product&apos;s checkout page.
          </p>
        </div>
        <div className="ball" />
        <div className="pad" />
      </div>

      <div style={{ height: 50 }} />

      <div className="section">
        <div className="pad" />
        <div className="ball" />
        <div className="text">
          <p className="title">
            User Submits Voucher
          </p>
          <p className="desc">
            Your users can submit the voucher in Treejer website to collect their trees and add
            them to their forest. Doing this they can know where and by whom their trees are
            planted. However, their trees are planted even if they don&apos;t submit their voucher.
          </p>
        </div>
      </div>

      <div style={{ height: 150 }} />

    </div>
  </div>
);
