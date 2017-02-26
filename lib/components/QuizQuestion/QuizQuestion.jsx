import React, { Component } from 'react';
import QuizContainer from '../../containers/QuizContainer/QuizContainer';
import Answers from '../Answers/Answers';

export class QuizQuestion extends Component {

  render() {
    const { answers, title, id } = this.props;
    return(
      <div className='question-block'>
        <h3>
          <span className='quiz-question-title'>{title}</span>
        </h3>
        <form>
          <Answers answers={answers} questionId={id} />
        </form>
      </div>
    )
  }
}

export default QuizContainer(QuizQuestion);
