import React from 'react';
import { Router } from '@reach/router';
import Header from '../Header/Header';

// Pages
import HomePage from '../../pages/home';
import PvcPage from '../../pages/pvc';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <HomePage path="/" />
        <PvcPage path="pip-value-calculator" />
      </Router>
    </div>
  );
}

export default App;
