/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import styles from './Loader.scss';

interface ILoader {
  color?: string;
  inline?: boolean;
}

const Loader: React.SFC<ILoader> = ({ color, inline = false }) => {

  if (inline) {
    return (
      <div className={styles['loader-dots']}>
        <div className={styles['loader-dot']} css={css`background: ${color};`}></div>
        <div className={styles['loader-dot']} css={css`background: ${color};`}></div>
        <div className={styles['loader-dot']} css={css`background: ${color};`}></div>
      </div>
    );
  }

  return (
    <div className={styles.loader}>
      <div className={styles['loader-dots']}>
        <div className={styles['loader-dot']} css={css`background: ${color};`}></div>
        <div className={styles['loader-dot']} css={css`background: ${color};`}></div>
        <div className={styles['loader-dot']} css={css`background: ${color};`}></div>
      </div>
    </div>
  );

};

export default Loader;
