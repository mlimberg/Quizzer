export const storeQuizData = (data) => {
  return {
    type: 'STORE_DATA',
    data
  }
}

export const updateScores = (scores) => {
  return {
    type: 'UPDATE_SCORES',
    scores
  }
}

export const updateFinal = (score) => {
  return {
    type: 'UPDATE_FINAL',
    score
  }
}

export const quizResponse = (response) => {
  return {
    type: 'QUIZ_RESPONSE',
    response
  }
}
