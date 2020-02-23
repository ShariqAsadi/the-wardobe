import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/authActions';
import styles from './Header.module.css';
import * as WardobeImage from '../../images/wardobe.png';

const Header = () => {
  const authenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutUser = () => {
    dispatch(logout());
    history.push('/');
  };

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
        {authenticated ? (
          <div className={styles.option} onClick={logoutUser}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/login">SIGN IN</Link>
        )}
        {/* <CartIcon /> */}
      </div>
      {/* {!hidden ? <CartDropdown /> : null} */}
    </div>
  );
};

export default Header;
