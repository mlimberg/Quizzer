import React, { Component } from 'react';
import { Link } from 'react-router';
import QuizContainer from '../../containers/QuizContainer/QuizContainer';
import Quiz from '../Quiz/Quiz';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizData: null
    }
  }

  componentWillMount() {
    fetch('http://localhost:3001/quizzes/1')
      .then(res => res.json())
      .then(res => this.props.storeQuizData(res.quiz))
      // .then(res => this.props.storeQuizData(res.quizzes[0]))
  }

  render() {
    return(
      <div>
        <Quiz data={this.props.quizData}/>
      </div>
    )
  }
}

export default QuizContainer(App);
