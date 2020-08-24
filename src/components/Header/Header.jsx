import React from 'react';
import { Link } from '@reach/router';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <Link to="/" className={styles.logo}>
              <span>ForexTools</span>
            </Link>
          </div>
          <div className="col text-right">
            <nav>
              <ul className={styles.menu}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="pip-value-calculator">Pip Value calculator</Link>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
