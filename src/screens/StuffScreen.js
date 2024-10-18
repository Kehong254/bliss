import React from 'react';
import { View } from 'react-native';
import QuestionCard from '../component/QuestionCard';
import useQuestionNavigator from '../hooks/useQuestionNavigator';

const questions = [
  { id: 'q5-1', image: require('../img/stuff/stuff1.jpeg') },
  { id: 'q5-2', image: require('../img/stuff/stuff2.jpeg') },
  { id: 'q5-3', image: require('../img/stuff/stuff3.jpeg') },
  { id: 'q5-4', image: require('../img/stuff/stuff4.jpeg') },
  { id: 'q5-5', image: require('../img/stuff/stuff5.jpeg') },
  { id: 'q5-6', image: require('../img/stuff/stuff6.jpeg') },
  { id: 'q5-7', image: require('../img/stuff/stuff7.jpeg') },
  { id: 'q5-8', image: require('../img/stuff/stuff8.jpeg') },
  { id: 'q5-9', image: require('../img/stuff/stuff9.jpeg') },
  { id: 'q5-10', image: require('../img/stuff/stuff10.jpeg') },
];

const StuffScreen = () => {
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

export default StuffScreen;