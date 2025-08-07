import React from 'react';
import axios from 'axios';
import AnswersList from './AnswersList';

function Question({ question }) {
  // given the question as a prop, find all answers associated with that question, sorted
  // sort first by seller, then by helpfulness without upending seller answers
  function loadMoreAnswers() {
    // show all remaining answers
    // confined to half the screen and scrollable
  }

  return (
    <div>
      <div>
        {`Q: ${question.question_body}`}
      </div>
      <AnswersList question_id={question.question_id}/>
      <input type="button" value="Load More Answers" onClick={loadMoreAnswers} />
    </div>
  );
}

export default Question;
