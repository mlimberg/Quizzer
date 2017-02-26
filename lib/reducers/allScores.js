const allScores = (state={}, action) => {
  switch(action.type) {
    case 'UPDATE_SCORES':
      return action.scores;
    default:
      return state;
  }
}

export default allScores;
