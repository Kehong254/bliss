import React from 'react';
import { View } from 'react-native';
import QuestionCard from '../component/QuestionCard';
import useQuestionNavigator from '../hooks/useQuestionNavigator';

const questions = [
  { id: 'q4-1', image: require('../img/society/society1.jpeg') },
  { id: 'q4-2', image: require('../img/society/society2.jpeg') },
  { id: 'q4-3', image: require('../img/society/society3.jpeg') },
  { id: 'q4-4', image: require('../img/society/society4.jpeg') },
  { id: 'q4-5', image: require('../img/society/society5.jpeg') },
  { id: 'q4-6', image: require('../img/society/society6.jpeg') },
  { id: 'q4-7', image: require('../img/society/society7.jpeg') },
  { id: 'q4-8', image: require('../img/society/society8.jpeg') },
  { id: 'q4-9', image: require('../img/society/society9.jpeg') },
  { id: 'q4-10', image: require('../img/society/society10.jpeg') },
  // Add more questions
];

const SocietyScreen = () => {
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

export default SocietyScreen;
