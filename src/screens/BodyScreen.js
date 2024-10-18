import React, { useState } from 'react';
import { View, Alert,} from 'react-native';
import QuestionCard from '../component/QuestionCard';

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

const BodyScreen = ({ navigation }) => {
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
        cardBackgroundColor="#fed905" // Pick a suitable screen color.
      />
  );
};

export default BodyScreen;