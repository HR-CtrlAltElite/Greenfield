import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function AnswersList({ question_id }) {
  const [answers, setAnswers] = useState([]);
  const [gotAll, setGotAll] = useState(false);
  const [count, setCount] = useState(2);
  useEffect(() => {
    axios.get(`/questions/${question_id}/answers`, { params: { count: count.toString() } })
      .then((response) => {
        console.log('ADDED 2 ANSWERS FOR question', question_id, ':', response.data.results);
        if (response.data.results) {
          setAnswers(response.data.results);
        } else {
          console.log('got all!');
          setGotAll(true);
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [count]);
  function loadMoreAnswers() {
    // show all remaining answers
    // confined to half the screen and scrollable
    setCount(count + 2);
  }
  return (
    <div>
      {answers.map((answer) => <li>{answer.body}</li>)}
      <input type="button" value="Load More Answers" onClick={loadMoreAnswers} />
    </div>
  );
}
export default AnswersList;
