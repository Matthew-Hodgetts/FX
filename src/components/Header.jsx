import React from 'react';

import styles from "./Header.module.scss";

const Header = () => {
    return ( <header className="header">
        <h1 className={styles.title}>Currency Conversion</h1>
    </header> );
}
 
export default Header;