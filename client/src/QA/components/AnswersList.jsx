import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function AnswersList({ question_id }) {
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    axios.get(`/questions/${question_id}/answers`)
      .then((response) => {
        // console.log('QUESTIONS FOR hardcoded product 40347', response.data.results);
        setAnswers(response.data.results);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [question_id]);
  return (
    <div>
      {answers.map((answer) => <li>{answer.body}</li>)}
    </div>
  );
}
export default AnswersList;
