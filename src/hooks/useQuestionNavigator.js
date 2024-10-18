import { useState } from 'react';
import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';

const useQuestionNavigator = (questions) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responseSubmitted, setResponseSubmitted] = useState(false);
  const [responses, setResponses] = useState(Array(questions.length).fill(null));

  // const handlePrevious = () => {
  //   if (currentQuestionIndex > 0) {
  //     setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  //   }
  // };

  const handleResponseSubmit = (response) => {
    const updatedResponses = [...responses];
    updatedResponses[currentQuestionIndex] = response;
    setResponses(updatedResponses);
    setResponseSubmitted(true);

    // 自动跳转到下一个问题
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
    
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
    // handlePrevious,
    handleResponseSubmit,
    responseSubmitted,
    responses,
  };
};

export default useQuestionNavigator;

