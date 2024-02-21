import React from 'react';
import QuestionCard from '../component/QuestionCard';


const BodyScreen = ({ navigation }) => {
  const handleNext = () => {
    // Perform any necessary actions before navigating to the next screen
    console.log('Navigating to the next screen');
    // For demonstration purposes, let's navigate to the next screen
    navigation.navigate('Life');
  };

  return (
    <QuestionCard question="How many parts of your body bend that make you happy?" onNext={handleNext} />
  );
};

export default BodyScreen;
