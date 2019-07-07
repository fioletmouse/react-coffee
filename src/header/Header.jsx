import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <h2 className={styles.mainHeader}>
        Test Application
      </h2>        
    </header>
  );
}

export default Header;
