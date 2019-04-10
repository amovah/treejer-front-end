import React from 'react';
import { generate } from 'shortid';
// import Scrollbars from 'react-custom-scrollbars';
import styles from './index.less';

export default props => (
  <table className={styles.table}>
    <tr>
      {
          props.heads.map(i => (
            <th
              key={i}
            >
              {i}
            </th>
          ))
        }
    </tr>
    {
      props.data.map(i => (
        <tr
          key={generate()}
        >
          {
            i.map(x => (
              <td
                key={generate()}
                style={{
                  padding: props.gap,
                }}
              >
                {x}
              </td>
            ))
          }
        </tr>
      ))
    }
  </table>
);
