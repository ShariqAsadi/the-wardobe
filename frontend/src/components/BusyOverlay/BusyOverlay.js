import React from 'react';
import styles from './BusyOverlay.module.css';
import { GridLoader } from 'react-spinners';

const BusyOverlay = () => (
  <div className={styles.main}>
    <GridLoader size={15} color="#4A90E2" />
  </div>
);

export default BusyOverlay;
