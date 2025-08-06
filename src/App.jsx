import React from 'react';
import './styles.css';
import Overview from './Overview';
import Related from './Related';
import QA from './QA';
import Ratings from './Ratings';

function App() {
  return (
    <div>
      <h1>This is my App!</h1>
      <Overview />
      <Related />
      <QA />
      <Ratings />
    </div>

  );
}

export default App;
