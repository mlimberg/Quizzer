import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(actions, dispatch)

const mapStateToProps = ({ quizData, allScores, finalScore, response }) => ({
  quizData,
  questions: quizData.questions || [],
  allScores,
  finalScore,
  response
})

export default connect(mapStateToProps, mapDispatchToProps);
