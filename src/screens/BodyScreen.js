import React from 'react';
import { View } from 'react-native';
import QuestionCard from '../component/QuestionCard';
import useQuestionNavigator from '../hooks/useQuestionNavigator';

const questions = [
  { id: 'q1-1', image: require('../img/body/body1.jpeg') },
  { id: 'q1-2', image: require('../img/body/body2.jpeg') },
  { id: 'q1-3', image: require('../img/body/body3.jpeg') },
  { id: 'q1-4', image: require('../img/body/body4.jpeg') },
  { id: 'q1-5', image: require('../img/body/body5.jpeg') },
  { id: 'q1-6', image: require('../img/body/body6.jpeg') },
  { id: 'q1-7', image: require('../img/body/body7.jpeg') },
  { id: 'q1-8', image: require('../img/body/body8.jpeg') },
  { id: 'q1-9', image: require('../img/body/body9.jpeg') },
  { id: 'q1-10', image: require('../img/body/body10.jpeg') },
  // Add more questions if needed
];

const BodyScreen = () => {
  const {
    currentQuestion,
    handleNext,
    handlePrevious,
    handleResponseSubmit,
    currentQuestionIndex,
    responseSubmitted,
  } = useQuestionNavigator(questions);

  return (
    <QuestionCard
      questionImage={currentQuestion.image}
      onPrevious={handlePrevious}
      onNext={handleNext}
      cardId={currentQuestion.id}
      onAnswerSubmit={handleResponseSubmit}
      initialResponse={responseSubmitted ? currentQuestionIndex : null}
      isLastQuestion={currentQuestionIndex === questions.length - 1}
      cardBackgroundColor="#fed905"
    />
  );
};

export default BodyScreen;