import React from 'react';
import QuestionCard from '../component/QuestionCard';


const StuffScreen = ({ navigation }) => {
  const handleNext = () => {
    // Perform any necessary actions before navigating to the next screen
    console.log('Navigating to the next screen');
    // For demonstration purposes, let's navigate to the next screen
    navigation.navigate('Body');
  };

  return (
    <QuestionCard question="What has been invented that makes your life better?
    " onNext={handleNext} />
  );
};

export default StuffScreen;
