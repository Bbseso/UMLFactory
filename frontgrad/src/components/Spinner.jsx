import React from 'react';
import styles from './styles/Spinner.module.css';

export default function Spinner({ message = 'Loading...' }) {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinnerCircle} />
      <div className={styles.spinnerMessage}>{message}</div>
    </div>
  );
} 