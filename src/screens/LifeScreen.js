import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import QuestionCard from '../component/QuestionCard';

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

const LifeScreen = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responseSubmitted, setResponseSubmitted] = useState(false);
  const [responses, setResponses] = useState(Array(questions.length).fill(null));

  const handleNext = () => {
    if (currentQuestionIndex === questions.length - 1) {
      // This is the last question, do not proceed
      return;
    }

    if (responseSubmitted || responses[currentQuestionIndex] !== null) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setResponseSubmitted(false);
    } else {
      Alert.alert(
        'Error',
        'Response not submitted. Please submit your response before proceeding.',
        [{ text: 'OK' }]
      );
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };
  
  const handleResponseSubmit = (response) => {
    const updatedResponses = [...responses];
    updatedResponses[currentQuestionIndex] = response;
    setResponses(updatedResponses);
    setResponseSubmitted(true);
  };

  // Ensure that questions[currentQuestionIndex] is defined before accessing its text property
  const currentQuestion = questions[currentQuestionIndex] || { id: '', text: '' };

  return (
      <QuestionCard
        questionImage={currentQuestion.image}
        onPrevious={handlePrevious}
        onNext={handleNext}
        cardId={currentQuestion.id}
        onAnswerSubmit={handleResponseSubmit} // Pass the function to handle answer submission
        initialResponse={responses[currentQuestionIndex]}
        isLastQuestion={currentQuestionIndex === questions.length - 1} // Pass a flag indicating if this is the last question
        cardBackgroundColor="#f9b026" // Pick a suitable screen color
      />
  );
};

export default LifeScreen;
