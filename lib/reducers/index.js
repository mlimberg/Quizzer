import { combineReducers } from 'redux';
import quizData from './quizData';
import allScores from './allScores';
import response from './response';


const rootReducer = combineReducers({
  quizData,
  allScores,
  response
})

export default rootReducer;
