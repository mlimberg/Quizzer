const finalScore = (state=0, action) => {
  switch(action.type) {
    case 'UPDATE_FINAL':
      return action.score;
    default:
      return state;
  }
}

export default finalScore;
