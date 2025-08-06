import React from 'react';
import axios from 'axios';

function Question({ product_id }) {
  // given the question as a prop, find all answers associated with that question, sorted
  // sort first by seller, then by helpfulness without upending seller answers
  function loadMoreAnswers() {
    // show all remaining answers
    // confined to half the screen and scrollable
  }
  console.log('props product_id', product_id);
  axios.get(`/questions/${product_id}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => console.log(err));
  return (
    <div>
      <div>Q: [question]</div>
      <ul>
        A:
        <li>
          [answer 1 when sorted]
        </li>
        <li>
          [answer 2 when sorted]
        </li>
      </ul>
      <input type="button" value="Load More Answers" onClick={loadMoreAnswers} />
    </div>
  );
}

export default Question;
