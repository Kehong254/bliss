import React from 'react';
import { View } from 'react-native';
import QuestionCard from '../component/QuestionCard';
import useQuestionNavigator from '../hooks/useQuestionNavigator';

const questions = [
  { id: 'q3-1', image: require('../img/identity/identity1.jpeg') },
  { id: 'q3-2', image: require('../img/identity/identity2.jpeg') },
  { id: 'q3-3', image: require('../img/identity/identity3.jpeg') },
  { id: 'q3-4', image: require('../img/identity/identity4.jpeg') },
  { id: 'q3-5', image: require('../img/identity/identity5.jpeg') },
  { id: 'q3-6', image: require('../img/identity/identity6.jpeg') },
  { id: 'q3-7', image: require('../img/identity/identity7.jpeg') },
  { id: 'q3-8', image: require('../img/identity/identity8.jpeg') },
  { id: 'q3-9', image: require('../img/identity/identity9.jpeg') },
  { id: 'q3-10', image: require('../img/identity/identity10.jpeg') },
  // Add more questions

];

const IdentityScreen = () => {
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

export default IdentityScreen;