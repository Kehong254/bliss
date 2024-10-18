import React from 'react';
import { View, Text } from 'react-native';
import ProgressBar from 'react-native-progress/Bar'; // 导入进度条组件
import QuestionCard from '../component/QuestionCard';
import useQuestionNavigator from '../hooks/useQuestionNavigator';

const questions = [
  { id: 'q2-1', image: require('../img/life/life1.jpeg') },
  { id: 'q2-2', image: require('../img/life/life2.jpeg') },
  { id: 'q2-3', image: require('../img/life/life3.jpeg') },
  { id: 'q2-4', image: require('../img/life/life4.jpeg') },
  { id: 'q2-5', image: require('../img/life/life5.jpeg') },
  { id: 'q2-6', image: require('../img/life/life6.jpeg') },
  { id: 'q2-7', image: require('../img/life/life7.jpeg') },
  { id: 'q2-8', image: require('../img/life/life8.jpeg') },
  { id: 'q2-9', image: require('../img/life/life9.jpeg') },
  { id: 'q2-10', image: require('../img/life/life10.jpeg') },
  // Add more questions
];

const LifeScreen = () => {
  const {
    currentQuestion,
    handleNext,
    handlePrevious,
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
        onPrevious={handlePrevious}
        onNext={handleNext}
        cardId={currentQuestion.id}
        onAnswerSubmit={handleResponseSubmit}
        initialResponse={responseSubmitted ? currentQuestionIndex : null}
        isLastQuestion={currentQuestionIndex === questions.length - 1}
        cardBackgroundColor="#fed905"
      />
    </View>
  );
};

export default LifeScreen;