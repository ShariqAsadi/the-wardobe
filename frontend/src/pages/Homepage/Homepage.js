import React from 'react';
import styles from './Homepage.module.css';
import { data } from './Homepage.data';
import MenuItem from '../../components/MenuItem/MenuItem';
const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.menu}>
        {data.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
