import React from 'react';
import QuestionCard from '../component/QuestionCard';


const IdentityScreen = ({ navigation }) => {
  const handleNext = () => {
    // Perform any necessary actions before navigating to the next screen
    console.log('Navigating to the next screen');
    // For demonstration purposes, let's navigate to the next screen
    navigation.navigate('Society');
  };

  return (
    <QuestionCard question="What daily rituals are important to you?" onNext={handleNext} />
  );
};

export default IdentityScreen;
