import React, { Component } from 'react';
import QuizContainer from '../../containers/QuizContainer/QuizContainer';

class Answers extends Component {
  constructor() {
    super();
    this.state = {
      answer: '',
      scores: 0
    }
  }

  setScore(e, score, id) {
    this.setState({ answer: e.target.value, scores: score }, () => {
      const copy = Object.assign({}, this.props.allScores)
      copy[id] = score;
      this.props.updateScores(copy)
    })
  }

  render() {
    const { answers, questionId } = this.props;
    const quizAnswers = answers.map((answer, i) => {
      let { title, score } = answer
      return(
        <label className='mult-choice-answer' key={score}>
          <input type='radio'
                 className='radio-btn'
                 value={title}
                 onChange={(e) => this.setScore(e, score, questionId) }
                 checked={this.state.answer === title}/>
          {title}
        </label>
      )
    })

    return (
      <div className='answers-container'>
        {quizAnswers}
      </div>
    )
  }
}

export default QuizContainer(Answers);
