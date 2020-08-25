import React from 'react';

import PageTitle from '../components/PageTitle/PageTitle';
import Card from '../components/Card/Card';
import PipValueCalc from '../components/PipValueCalc/PipValueCalc';
const PvcPage = () => {
  return (
    <>
      {' '}
      <PageTitle title="Pip value calculator" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <p className="text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur quos eos dolorum quas provident aperiam, quod porro
              commodi voluptatum, corporis laboriosam magni modi ipsum alias
              exercitationem autem itaque, temporibus eum!
            </p>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-md-6 offset-md-3">
            <Card>
              <PipValueCalc />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default PvcPage;
