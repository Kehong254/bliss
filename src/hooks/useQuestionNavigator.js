import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useQuestionNavigator = (questions, storageKey) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responseSubmitted, setResponseSubmitted] = useState(false);
  const [responses, setResponses] = useState(Array(questions.length).fill(null));
  const [isLoading, setIsLoading] = useState(true);

  // 读取上次保存的问题索引
  useEffect(() => {
    const loadLastIndex = async () => {
      try {
        const savedIndex = await AsyncStorage.getItem(storageKey);
        if (savedIndex !== null) {
          setCurrentQuestionIndex(parseInt(savedIndex, 10));
        }
      } catch (error) {
        console.error('Error loading last question index:', error);
      } finally {
        setIsLoading(false); // 加载完成后更新状态
      }
    };
    loadLastIndex();
  }, [storageKey]);

  const handleResponseSubmit = async (response) => {
    const updatedResponses = [...responses];
    updatedResponses[currentQuestionIndex] = response;
    setResponses(updatedResponses);
    setResponseSubmitted(true);

    // 保存当前问题索引到本地存储
    try {
      await AsyncStorage.setItem(storageKey, currentQuestionIndex.toString());
    } catch (error) {
      console.error('Error saving current question index:', error);
    }

    // 自动跳转到下一个问题
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        AsyncStorage.setItem(storageKey, newIndex.toString());
        return newIndex;
      });
    }
    
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
    handleResponseSubmit,
    responseSubmitted,
    isLoading,
    responses,
  };
};

export default useQuestionNavigator;