import React from 'react';
import axios from 'axios';
import Question from './Question';

function QA() {
  axios.get('/questions/40347')
    .then((response) => {
      console.log('QUESTIONS FOR hardcoded product 40347', response.data.results);
    })
    .catch((err) => console.log(err));
  return (
    <div>
      Q & A Module
      <Question question={'question'} />
    </div>
  );
}

export default QA;
