import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import QuestionCard from '../component/QuestionCard';

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

const StuffScreen = ({ navigation }) => {
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
        cardBackgroundColor="#e83c62" // Pick a suitable screen color
      />
  );
};

export default StuffScreen;



