import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Question from './Question';

function QA() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('/questions', { params: { product_id: '40347' } })
      .then((response) => {
        // console.log('QUESTIONS FOR hardcoded product 40347', response.data.results);
        setQuestions(response.data.results);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return (
    <div>
      Q & A Module
      {questions.map((question) => (<Question key={question.question_id} question={question} />))}
    </div>
  );
}

export default QA;
