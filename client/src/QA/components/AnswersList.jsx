import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function AnswersList({ question_id }) {
  const [answers, setAnswers] = useState([]);
  const [gotAll, setGotAll] = useState(false);
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (!gotAll) {
      axios.get(`/questions/${question_id}/answers`, { params: { page: page.toString() } })
        .then((response) => {
          console.log('ADDED 2 ANSWERS FOR question', question_id, ':', response.data.results);
          if (response.data.results.length === 0) {
            console.log('got all!');
            setGotAll(true);
          } else {
            setAnswers(answers.slice().concat(response.data.results));
          }
        })
        .catch((err) => {
          throw new Error(err);
        });
    }
  }, [page]);
  function loadMoreAnswers() {
    // show all remaining answers
    // confined to half the screen and scrollable
    setPage(page + 1);
  }
  return (
    <div>
      {answers.map((answer) => <li key={answer.answer_id}>{answer.body}</li>)}
      <input type="button" value="Load More Answers" onClick={loadMoreAnswers} />
    </div>
  );
}
export default AnswersList;
