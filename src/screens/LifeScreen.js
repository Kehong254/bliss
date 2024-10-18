import React from 'react';
import { View } from 'react-native';
import QuestionCard from '../component/QuestionCard';
import useQuestionNavigator from '../hooks/useQuestionNavigator';

const questions = [
  { id: 'q2-1', image: require('../img/life/life1.jpeg') },
  { id: 'q2-2', image: require('../img/life/life2.jpeg') },
  { id: 'q2-3', image: require('../img/life/life3.jpeg') },
  { id: 'q2-4', image: require('../img/life/life4.jpeg') },
  { id: 'q2-5', image: require('../img/life/life5.jpeg') },
  { id: 'q2-6', image: require('../img/life/life6.jpeg') },
  { id: 'q2-7', image: require('../img/life/life7.jpeg') },
  { id: 'q2-8', image: require('../img/life/life8.jpeg') },
  { id: 'q2-9', image: require('../img/life/life9.jpeg') },
  { id: 'q2-10', image: require('../img/life/life10.jpeg') },
  // Add more questions
];

const LifeScreen = () => {
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

export default LifeScreen;