import React from 'react';
import { Link } from 'react-router';
import QuizContainer from '../../containers/QuizContainer/QuizContainer';

const Response = (props) => {
  return (
    <div className='response-popup'>
      <button className='btn'
        onClick={() => props.closePopup()}>
        X
      </button>

      <div className='response-text'>
        {props.response}
      </div>

    </div>
  )
}

export default QuizContainer(Response);
