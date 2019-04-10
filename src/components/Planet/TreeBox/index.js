import React from 'react';
import Box from 'Root/shared/Box';
import acacia from 'Root/assets/acacia.png';
import styles from './index.less';

export default props => (
  <Box className={styles.box}>
    <div className="circle">
      <img
        src={acacia}
        alt="acacia"
      />
    </div>
    <div className="padding" />
    <p className="title">
      Acacia Tree
    </p>
    <p className="detail">
      Via <span>Gulf Green</span> in Oman
    </p>
    <div className="details">
      <div className="detail">
        <p className="title">
          Adopters
        </p>
        <p className="info">
          1.5 K
        </p>
      </div>
      <div className="divider" />
      <div className="detail">
        <p className="title">
          O2 Rate
        </p>
        <p className="info">
          35<span>/Day</span>
        </p>
      </div>
      <div className="divider" />
      <div className="detail">
        <p className="title">
          Value
        </p>
        <p className="info">
          $12
        </p>
      </div>
    </div>
    <button
      type="button"
      className="btn"
    >
      Add to Forest
    </button>
  </Box>
)
