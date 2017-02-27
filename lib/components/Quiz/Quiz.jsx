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
        {this.state.submitted ? <Response closePopup={this.reset.bind(this)}/> : null}

          <h1 className='quiz-title'>{quizData.title}</h1>
          <div className='quiz-container'>

            {quizQuestions}

            <button className='submit-btn'>
              Submit
            </button>
          </div>
      </div>
    )
  }
}

export default QuizContainer(Quiz);
