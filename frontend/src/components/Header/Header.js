import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link className={styles['logo-container']} to="/">
        The Wardobe
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
