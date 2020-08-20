import React from 'react';
import styles from "./App.module.scss";

import Header from "./Header";

const App = () => {
  return ( <div className={styles.App}>
    <div className={styles.container}>
    <Header />
    </div>
  </div> );
}
 
export default App;