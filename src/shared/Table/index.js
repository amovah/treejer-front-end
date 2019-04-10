import React from 'react';
import { generate } from 'shortid';
import classnames from 'classnames';
import styles from './index.less';

export default props => (
  <table className={classnames(styles.table, props.className)}>
    <thead>
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
    </thead>
    <tbody>
      {
        props.data.map(i => (
          <tr
            key={generate()}
          >
            {
              i.map(x => (
                <td
                  key={generate()}
                >
                  {x}
                </td>
              ))
            }
          </tr>
        ))
      }
    </tbody>
  </table>
);
