import React from 'react';
import Card from '../components/Card/Card';
import PageTitle from '../components/PageTitle/PageTitle';

const HomePage = () => {
  return (
    <>
      <PageTitle title="Home" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Card>Lorem</Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
