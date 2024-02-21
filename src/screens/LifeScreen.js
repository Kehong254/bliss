import React from 'react';
import QuestionCard from '../component/QuestionCard';


const LifeScreen = ({ navigation }) => {
  const handleNext = () => {
    // Perform any necessary actions before navigating to the next screen
    console.log('Navigating to the next screen');
    // For demonstration purposes, let's navigate to the next screen
    navigation.navigate('Identity');
  };

  return (
    <QuestionCard question="Who is important to you that you’ve never met, how are they important to you?" onNext={handleNext} />
  );
};;

export default LifeScreen;
