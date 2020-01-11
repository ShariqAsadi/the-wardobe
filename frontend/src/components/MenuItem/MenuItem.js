import React from 'react';
import styles from './MenuItem.module.css';

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${styles[size] || ''} ${styles[`menu-item`]}`}>
    <div
      className={styles['background-image']}
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    ></div>
    <div className={styles.content}>
      <h1 className={styles.title}>{title.toUpperCase()}</h1>
      <span className={styles.subtitle}>SHOP</span>
    </div>
  </div>
);

export default MenuItem;
