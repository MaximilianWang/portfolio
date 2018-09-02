import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

// Import Style
import styles from './Header.css';

export function Header(props, context) {
  return (
    <div className={styles.header}>

      <div className={styles.content}>
        <h1 className={styles['site-title']}>
          <Link to="/" >Home</Link>
        </h1>
        {
          context.router.isActive('/', true)
            ? <a href="#"></a>
            : null
        }
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: PropTypes.object,
};

Header.propTypes = {
};

export default Header;
