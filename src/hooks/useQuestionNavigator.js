import { useState } from 'react';
import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';

const useQuestionNavigator = (questions) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responseSubmitted, setResponseSubmitted] = useState(false);
  const [responses, setResponses] = useState(Array(questions.length).fill(null));

  const handleNext = () => {
    if (currentQuestionIndex === questions.length - 1) {
      // Last question, cannot proceed further
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
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleResponseSubmit = (response) => {
    const updatedResponses = [...responses];
    updatedResponses[currentQuestionIndex] = response;
    setResponses(updatedResponses);
    setResponseSubmitted(true);
    
    // Show a success toast only after a response is submitted
    Toast.show({
      type: 'success',
      text1: 'Response Submitted',
      text2: 'Your response has been saved successfully!',
      position: 'bottom',
    });
  };

  const currentQuestion = questions[currentQuestionIndex] || {};

  return {
    currentQuestion,
    currentQuestionIndex,
    handleNext,
    handlePrevious,
    handleResponseSubmit,
    responseSubmitted,
    responses,
  };
};

export default useQuestionNavigator;

