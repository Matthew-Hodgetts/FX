import React from 'react';

import styles from './PageTitle.module.scss';

const PageTitle = ({ title }) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className={styles.title}>{title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

PageTitle.defaultProps = {
  title: 'Title not defined',
};

export default PageTitle;
