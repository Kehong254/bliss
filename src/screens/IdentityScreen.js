import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import QuestionCard from '../component/QuestionCard';

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

const IdentityScreen = ({ navigation }) => {
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
        cardBackgroundColor="#f18538" // Pick a suitable screen color
      />
  );
};

export default IdentityScreen;
