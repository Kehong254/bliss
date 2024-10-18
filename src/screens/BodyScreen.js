import React from 'react';
import { View, Text } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import QuestionCard from '../component/QuestionCard';
import useQuestionNavigator from '../hooks/useQuestionNavigator';

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

const BodyScreen = () => {
  const {
    currentQuestion,
    // handlePrevious,
    handleResponseSubmit,
    currentQuestionIndex,
    responseSubmitted,
  } = useQuestionNavigator(questions);

  // Calculate progress as a value between 0 and 1
  const progress = (currentQuestionIndex + 1) / questions.length;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', marginVertical: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
          Question {currentQuestionIndex + 1} of {questions.length}
        </Text>
        <ProgressBar
          progress={progress} // 设置进度条的进度
          width={300} // 进度条的宽度
          height={10} // 进度条的高度
          color="#3498db" // 进度条的颜色
          borderRadius={5} // 进度条的圆角
        />
      </View>
      <QuestionCard
        questionImage={currentQuestion.image}
        // onPrevious={handlePrevious}
        cardId={currentQuestion.id}
        onAnswerSubmit={handleResponseSubmit}
        initialResponse={responseSubmitted ? currentQuestionIndex : null}
        isLastQuestion={currentQuestionIndex === questions.length - 1}
        cardBackgroundColor="#fed905"
      />
    </View>
  );
};

export default BodyScreen;