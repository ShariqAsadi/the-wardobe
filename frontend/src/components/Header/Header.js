import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import * as WardobeImage from '../../images/wardobe.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link className={styles['logo-container']} to="/">
        <div className={styles.logo}>
          <img src={WardobeImage} alt="logo" height="40px" />
          <span>The Wardobe</span>
        </div>
      </Link>
      <div className={styles.options}>
        <Link className={styles.option} to="/shop">
          SHOP
        </Link>
        <Link className={styles.option} to="/shop">
          CONTACT
        </Link>
        {/* {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : ( */}
        <Link to="/login">SIGN IN</Link>
        {/* )} */}
        {/* <CartIcon /> */}
      </div>
      {/* {!hidden ? <CartDropdown /> : null} */}
    </div>
  );
};

export default Header;
