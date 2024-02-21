import React from 'react';
import QuestionCard from '../component/QuestionCard';


const SocietyScreen = ({ navigation }) => {
  const handleNext = () => {
    // Perform any necessary actions before navigating to the next screen
    console.log('Navigating to the next screen');
    // For demonstration purposes, let's navigate to the next screen
    navigation.navigate('Stuff');
  };

  return (
    <QuestionCard question="how is science and tech important in your area?" onNext={handleNext} />
  );
};

export default SocietyScreen;
