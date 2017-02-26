import { combineReducers } from 'redux';
import quizData from './quizData';
import allScores from './allScores';
import finalScore from './finalScore';
import response from './response';


const rootReducer = combineReducers({
  quizData,
  allScores,
  finalScore,
  response
})

export default rootReducer;
