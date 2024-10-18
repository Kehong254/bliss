import React from 'react';
import { View, Text } from 'react-native';
import ProgressBar from 'react-native-progress/Bar'; // 导入进度条组件
import QuestionCard from '../component/QuestionCard';
import useQuestionNavigator from '../hooks/useQuestionNavigator';

const questions = [
  { id: 'q3-1', image: require('../img/identity/identity1.jpeg') },
  { id: 'q3-2', image: require('../img/identity/identity2.jpeg') },
  { id: 'q3-3', image: require('../img/identity/identity3.jpeg') },
  { id: 'q3-4', image: require('../img/identity/identity4.jpeg') },
  { id: 'q3-5', image: require('../img/identity/identity5.jpeg') },
  { id: 'q3-6', image: require('../img/identity/identity6.jpeg') },
  { id: 'q3-7', image: require('../img/identity/identity7.jpeg') },
  { id: 'q3-8', image: require('../img/identity/identity8.jpeg') },
  { id: 'q3-9', image: require('../img/identity/identity9.jpeg') },
  { id: 'q3-10', image: require('../img/identity/identity10.jpeg') },
  // Add more questions

];

const IdentityScreen = () => {
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

export default IdentityScreen;