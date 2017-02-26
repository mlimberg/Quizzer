import React, { Component } from 'react';
import QuizContainer from '../../containers/QuizContainer/QuizContainer';
import QuizQuestion from '../QuizQuestion/QuizQuestion';
import Response from '../Response';

export class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false
    }
  }

  handleSubmit() {
    const copy = Object.assign({}, this.props.allScores)
    const keys = Object.keys(copy);
    const score = keys.reduce((sum, key) => {
      return sum += copy[key]
    }, 0)
    this.submitScore(score);
  }

  submitScore(score) {
    fetch('http://localhost:3001/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ score: score })
    })
      .then(res => res.json())
      .then(res => this.props.quizResponse(res.score))
      .then(() => this.setState({ submitted: true }))
  }

  render() {
    const { questions, quizData } = this.props;
    const quizQuestions = questions.map(obj => {
      return (
        <QuizQuestion title={obj.title}
                      answers={obj.answers}
                      key={obj.id}
                      id={obj.id} />
      )
    })

    return(
      <div>
        {this.state.submitted ? <Response closePopup={() => this.setState({ submitted: false })}/> : null}

          <h1 className='quiz-title'>{quizData.title}</h1>
          <div className='quiz-container'>
            {quizQuestions}
            <button className='submit-btn' onClick={this.handleSubmit.bind(this)}>Submit</button>
          </div>
      </div>
    )
  }
}

export default QuizContainer(Quiz);
