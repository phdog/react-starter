/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import styles from './Loader.scss';

interface ILoader {
  color?: string;
  inline?: boolean;
}

const Loader: React.SFC<ILoader> = ({ color, inline = false }) => {

  const colorStyle = css`background: ${color};`;

  if (inline) {
    return (
      <div className={styles['loader-dots']}>
        <div className={styles['loader-dot']} css={colorStyle}></div>
        <div className={styles['loader-dot']} css={colorStyle}></div>
        <div className={styles['loader-dot']} css={colorStyle}></div>
      </div>
    );
  }

  return (
    <div className={styles.loader}>
      <div className={styles['loader-dots']}>
        <div className={styles['loader-dot']} css={colorStyle}></div>
        <div className={styles['loader-dot']} css={colorStyle}></div>
        <div className={styles['loader-dot']} css={colorStyle}></div>
      </div>
    </div>
  );

};

export default Loader;
